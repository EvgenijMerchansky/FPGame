import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from '../components/Item';

import { sendToChat } from '../actions/basic-actions';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.currentUser = '';
        this.state = {
            messageArray: []
        };
    }

    componentDidMount () {
        // this.socket.on("RECEIVE_MESSAGE", (data) => {
        //     this.currentUser = data.id;
        //     this.setState({
        //         messageArray: [...this.state.messageArray, data]
        //     });
        // });
    }

    sendText (textValue) {
        if (textValue === '') return;

        let { sendToChat } = this.props;

        sendToChat('NEW_MESSAGE', { data: textValue });
        // this.socket.emit('new message', { data: textValue });
        this.input.value = '';
    };

    render () {
        console.log(this);
        return (
            <div className="chat-container">
                <h1 className="chat-title">This is chat</h1>
                <div className="message-block">
                    {
                        this.props.chatState.map(userArrayItem => {
                            console.log(userArrayItem);
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
        chatState: state.commonReducer.messages,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        sendToChat
        // - - -
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);