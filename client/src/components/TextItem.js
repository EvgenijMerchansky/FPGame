import React from 'react';

const TextItem = ({messageId, textMessage, author}) => {

    return (
        <p
            className="simple-li"
            id={messageId}
        >
            {textMessage}
        <br/>
        <hr/>
            author: {author}
        </p>
    )
};

export default TextItem;