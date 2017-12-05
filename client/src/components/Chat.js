import React, {Component} from 'react';
import io from "socket.io-client";
import Item from './Item';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.socket = io('http://localhost:9000/');
        this.currentUser = '';
        this.state = {
            messageArray: []
        };
    }

    componentWillUnmount () {
        this.socket.emit('disconnect');
    }

    componentDidMount () {
        this.socket.on("RECEIVE_MESSAGE", (data) => {
            this.currentUser = data.id;
            this.setState({
                messageArray: [...this.state.messageArray, data]
            });
        });
    }

    sendText (value) {

        if (value === '') return;

        this.socket.emit('SEND_MESSAGE', {
            data: value,
        });

        this.input.value = '';
    };

    render () {
        return (
            <div className="chat-container">
                <h1 className="chat-title">This is chat'aaaa!</h1>
                <div className="message-block">
                    {
                        this.state.messageArray.map(item => {
                            return (
                                <Item
                                    id={item.id}
                                    key={item.index}
                                    data={item.data}
                                    dataUser={this.currentUser}
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

export default Chat;