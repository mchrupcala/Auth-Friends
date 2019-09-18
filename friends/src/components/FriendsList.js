import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import egg from '../images/egg.png';
import {Parallax} from 'react-scroll-parallax';
// import axios from 'axios';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [pending, setPending] = useState(true);
    const [newFriend, setNewFriend] = useState({
        age: '',
        email: '',
        id: Date.now(), 
        name: ''
        // isPending: false
    });

    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(res => {
            console.log('Friend List results: ', res);
            setFriends(res.data);
            setPending(false);
        })
        .catch(err => {
            console.log("Error! ", err)
        })
    }, [])


    const handleChange = event => {
        // event.preventDefault();
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value});
    }

    const submitHandler = event => {
        event.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log('Results from POST request: ', res);
            setFriends(res.data)
        })
        .catch(err => {
            console.log("Error! ", err)
        })
        // newFriend.isPending = true;
    }


    return (
    <div>
        <h1>Welcome back!</h1>

        <h3>Do you want to make new friends?</h3>

    {/* {const ParallaxImage = () => ( */}
        <Parallax className="form-parallax" y={[200, -200]
        //if second value is negative, item will scroll upward. Switch those, item will scroll downward.
        //Gap between value one and two impacts the item's original position. If wide gap, item's offset in a big way. If those values are the same, no offset.
        //Their value impacts the scroll speed. Higher value = faster scroll...value of 1 = almost no scroll.

    } tagOuter="figure" >
                
        <form className="friendslist-form" onSubmit={submitHandler}>
            Full Name:
            <input type="text" name="name"  onChange={handleChange}></input>

            Age:
            <input type="text" name="age"  onChange={handleChange}></input>

            Email: 
            <input type="email" name="email"  onChange={handleChange}></input>
            <button type="submit">Add Friend</button>
        </form>
        </Parallax>
    


        {/* LOADING SPINNER */}
        { (pending) ?  <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : null }

        {friends.map(item => {
            return (
                <div className="one-friend" key={item.id}>
                    <img src={egg} className="egg-image" />
                        <div className="friend-card">
                        <h1>{item.name}</h1>
                        <div>
                            <p>Age: {item.age}</p>
                            <p>{item.email}</p>
                        </div>
                        </div>
                </div>
            )
        })} 
    </div>
    )
}

export default FriendsList;