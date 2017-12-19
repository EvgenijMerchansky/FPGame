import React from 'react';
import ListItem from './ListItem';

const UserList = ({onlineUserArray}) => {

    return (
        <div style={styles.listContainer}>
            <div style={styles.itemWrapper}>
                <h3>Users:</h3>
                {
                    onlineUserArray.map((item, index) => {
                        return(
                            <ListItem
                                item={item}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

const styles = {
    listContainer: {
        position: 'absolute',
        backgroundColor: '#ccc',
        color: 'white',
        width: 'auto',
        height: 'auto',
        padding: 10,
        left: 0,
        top: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemWrapper: {
        display: 'block',
        padding: 10
    }
};

export default UserList;