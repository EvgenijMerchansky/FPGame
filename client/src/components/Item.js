import React from 'react';

const Item = ({id, data, dataUser}) => {

    return (
        <p
           style={{
               marginLeft: id === dataUser && '52%',
               marginRight: id !== dataUser && '52%'
           }}
           className="simple-li"
           id={id}
        >
            {data}
        </p>
    )
};

export default Item;