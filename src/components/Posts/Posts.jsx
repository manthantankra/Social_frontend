import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getTimeLinePosts } from '../../actions/postAction';
// import { PostsData } from '../../Data/PostsData';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData)
    let { posts, loading } = useSelector((state) => state.postReducer)
    const params = useParams();
    console.log(posts);

    useEffect(() => {
        dispatch(getTimeLinePosts(user._id));
    }, []);

    if(!posts) return "no posts";
    if(params.id) posts = posts.filter((post) => post.userId === params.id)

    return (
        <div className="Posts">
            {
                loading ? "Fetching Post..." :
                    posts.map((post, id) => {
                        return <Post data={post} id={id} />
                    })
            }
        </div>
    )
}

export default Posts;