import React from 'react';

const ListItem = ({item}) => {

    return (
        <div
            style={styles.itemStyle}
        >
            <p>{item.email}</p>
            <p
                style={{ color: item.online ? 'green' : 'red'}}
            >
                status: {item.online ? 'online' : 'offline'}
            </p>
        </div>
    )
};

const styles = {
    itemStyle: {
        backgroundColor: '#eee',
        color: '#000',
        textAlign: 'left',
        padding: 5,
        marginTop: 7
    }
};

export default ListItem;