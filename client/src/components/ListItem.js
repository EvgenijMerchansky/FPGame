import React from 'react';

const ListItem = ({item, ind}) => {

    return (
        <div
            style={{
                backgroundColor: '#eee',
                color: '#000',
                textAlign: 'left',
                padding: 5,
                marginTop: 7
            }}
            key={ind}
        >
            <p>{item.email}</p>
            <p style={{ color: item.online ? 'green' : 'red'}}>status: {item.online ? 'online' : 'offline'}</p>
        </div>
    )
};

export default ListItem;