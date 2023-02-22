import React, { useEffect, useState } from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { likedPost } from '../../api/postRequest'


const Post = ({ data }) => {
    // data.likes = [];
    const { user } = useSelector((state) => state.authReducer.authData);
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        setLiked(data?.likes?.includes(user._id));
        setLikes(data?.likes?.length)
    }, [])

    const handleLiked = () => {
        setLiked((prev) => !prev);
        liked ? setLikes((prev) => (prev - 1)) : setLikes((prev) => (prev + 1));
        likedPost(data._id, user._id);
        console.log("postId", data._id );
    }

    return (
        <div className="Post">
            <img src={process.env.REACT_APP_PUBLIC_FOLDER + data.image} alt="" />
            <div className="postReact">
                <img src={liked ? Heart : NotLike} alt="" style={{ cursor: "pointer" }} onClick={handleLiked} />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>


            <span style={{ color: "var(--gray)", fontSize: '12px' }}>{likes} likes</span>

            <div className="detail">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}

export default Post;