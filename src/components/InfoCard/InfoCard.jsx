import React, { useEffect } from 'react'
import { UilPen } from '@iconscout/react-unicons'
import './InfoCard.css'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from '../../api/userRequests.js'
import { logout } from '../../actions/authAction.js'

const InfoCard = () => {

    const dispatch = useDispatch();
    const params = useParams();

    const profileUserId = params.id;
    const [profileUser, setProfileUser] = useState({});

    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user);
            } else {
                const profileUser = await UserApi.getUser(profileUserId);
                setProfileUser(profileUser);
            }
        }
        fetchProfileUser();
    }, [user]);

    const handlelogout = () => {
        dispatch(logout());
    }

    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className='InfoCard'>
            <div className="infoHead">
                <h4>Profile Info</h4>
                {user._id === profileUserId ? (<div>
                    <UilPen
                        width='2rem'
                        height='1.2rem'
                        onClick={() => setModalOpened(true)}
                    />
                    <ProfileModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                        data = {user}
                    />
                </div>) : ("")}
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>{profileUser.relationship}</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives In  </b>
                </span>
                <span>{profileUser.livesin}</span>
            </div>

            <div className="info">
                <span>
                    <b>Works At  </b>
                </span>
                <span>{profileUser.workAt}</span>
            </div>

            <button className="button logout-button" onClick={handlelogout}>Logout</button>

        </div>
    )
}

export default InfoCard
