import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(res => {
            console.log('Friend List results: ', res);
            setFriends(res.data);
        })
        .catch(err => {
            console.log("Error! ", err)
        })
    }, [])


    return (
    <div>
        <h1>Welcome back, user!</h1>
        <h3>Do you want to make new friends?</h3>

        <form>
            Full Name:
            <input type="text" name="name"  ></input>

            Age:
            <input type="text" name="age"  ></input>

            Email: 
            <input type="email" name="email"  ></input>
            <button type="submit">Add Friend</button>
        </form>

        {friends.map(item => {
            return (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <div>
                        <p>Age: {item.age}</p>
                        <p>{item.email}</p>
                    </div>
                </div>
            )
        })}
    </div>
    )
}

export default FriendsList;