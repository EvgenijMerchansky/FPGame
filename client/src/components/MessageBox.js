import React from 'react';
import TextItem from './TextItem';

const MessageBox = ({messagesArray, author}) => {

    return (
        <div className="message-block">
            {
                messagesArray.map((userArrayItem, index) => {
                    return (
                        <TextItem
                            messageId={userArrayItem.id}
                            key={index}
                            textMessage={userArrayItem.text}
                            author={author}
                        />
                    )
                })
            }
        </div>
    )
};

export default MessageBox;