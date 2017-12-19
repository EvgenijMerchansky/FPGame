import React, { PropTypes } from 'react';
import Auth from '../modules/Auth';
import LoginForm from '../components/LoginForm.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser, sendUsersWithBase, updateUserStatus, addUsersFromDataBase } from '../actions/basic-actions';

class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    // set the initial component state
    this.state = {
      errors: {},
      successMessage,
      user: {
        email: '',
        password: '',
      },
      allUsers: [],
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.currentUsersState = this.props.loginPageState.newMessageReducer.users;
  };

  componentDidMount() {
      const functionForAdding = this.props.sendUsersWithBase;

      addUsersFromDataBase({users: this.currentUsersState, adding: functionForAdding});
  }
  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {

    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    const user = this.state.user;

    updateUserStatus(user);
    this.props.getUser({usersArray: this.currentUsersState, user}); // users[array] from store

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });
        // save the token
        Auth.authenticateUser(xhr.response.token, user.email);
        // change the current URL to /
        this.context.router.replace('/');
      } else {
        // failure
        localStorage.removeItem('currentUser');

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
      return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        user={this.state.user}
      />
    );
  }

}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        loginPageState: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUser,
        sendUsersWithBase
        // - - -
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
