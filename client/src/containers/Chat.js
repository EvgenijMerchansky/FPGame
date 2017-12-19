import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendToChat, deleteUser, sendUpdatedUsersWithBase, updateUsersFromDataBase } from '../actions/basic-actions';
import UserList from '../components/UsersList';
import MessageBox from '../components/MessageBox';

class Chat extends Component {
    constructor() {
        super();
    }

    componentDidMount () {

        this.currentUser = localStorage.getItem('currentUser');
    }


    sendText (textValue) {

        if (textValue === '') return;

        this.props.sendToChat({eventName: 'NEW_MESSAGE', data: textValue});
        this.input.value = '';
    };

    componentWillUnmount() {

        if (this.currentUser) {
            deleteUser(this.currentUser);

            updateUsersFromDataBase(this.props.sendUpdatedUsersWithBase);
        }
    }

    render () {

        let { users, newMessages } = this.props.renderMessages;

        console.log(users, 'onlineUsers onlineUsers');
        return (
            <div className="chat-container">
                <h1 className="chat-title">
                    This is chat
                </h1>
                <MessageBox messagesArray={newMessages} author={this.currentUser}/>
                <UserList onlineUserArray={users}/>
                <div className="control-container">
                    <textarea
                        className="message-field"
                        type="text"
                        id="message-field-id"
                        ref={node => this.input = node}
                    />
                    <button
                        className="send-button"
                        onClick={
                            () => this.sendText(this.input.value)
                        }
                    >
                        Send
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        renderMessages: state.newMessageReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        sendToChat,
        sendUpdatedUsersWithBase
        // - - -
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);