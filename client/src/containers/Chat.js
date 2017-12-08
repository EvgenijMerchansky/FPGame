import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from '../components/Item';

import { sendToChat, getUsers } from '../actions/basic-actions';


class Chat extends Component {
    constructor() {
        super();
    }

    componentDidMount () {
        let { getUsers } = this.props,
            usersFromBase = getUsers();

        console.log(usersFromBase, 'usersFromBase');
        // sendToChat({eventName: 'NEW_MESSAGE', data: textValue});
    }

    sendText (textValue) {
        let { sendToChat } = this.props;

        if (textValue === '') return;

        sendToChat({eventName: 'NEW_MESSAGE', data: textValue});
        this.input.value = '';
    };

    render () {
        console.log(this);
        return (
            <div className="chat-container">
                <h1 className="chat-title">
                    This is chat
                </h1>
                <div className="message-block">
                    {
                        this.props.renderMessages.map(userArrayItem => {
                            return (
                                <Item
                                    messageId={userArrayItem.id}
                                    key={userArrayItem.id}
                                    textMessage={userArrayItem.text}
                                />
                            )
                        })
                    }
                </div>
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
        renderMessages: state.newMessageReducer.newMessages,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        sendToChat,
        getUsers
        // - - -
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);