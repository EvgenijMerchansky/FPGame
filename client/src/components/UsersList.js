import React from 'react';
import ListItem from './ListItem';

const UserList = ({onlineUserArray}) => {

    return (
        <div
            style={{
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
            }}
        >

            <div
                style={{
                    display: 'block',
                    padding: 10
                }}
            >
                <h3>Users:</h3>
                {
                    onlineUserArray.map((item, index) => {
                        return(
                            <ListItem item={item} ind={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default UserList;