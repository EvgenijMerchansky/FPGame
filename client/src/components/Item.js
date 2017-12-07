import React from 'react';

const Item = ({messageId, textMessage}) => {

    return (
        <p
           className="simple-li"
           id={messageId}
        >
            {textMessage}
        </p>
    )
};

export default Item;