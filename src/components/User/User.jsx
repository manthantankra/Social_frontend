import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/userAction';


const User = ({ person }) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useSelector((state) => state.authReducer.authData);
    const [following, setFollowing] = useState(person.followers.includes(user._id));


    const Dispatch = useDispatch();

    const handleFollow = () => {
        following
            ? Dispatch(unfollowUser(person._id, user))
            : Dispatch(followUser(person._id, user));


        setFollowing((prev) => !prev);
    }
    return (
        <div className="follower">
            <div>
                <img src={person.coverPicture ? serverPublic + person.profilePicture : serverPublic + "profile.jpg"} alt="" className='followerImg' />
                <div className="name">
                    <span>{person.firstname}</span>
                    <span>@{person.username}</span>
                </div>
            </div>
            <button className={following ? "button fc-button unFollowButton" : "button fc-button"} onClick={handleFollow}>
                {following ? "UnFollow" : "Follow"}
            </button>
        </div>
    )
}

export default User;
