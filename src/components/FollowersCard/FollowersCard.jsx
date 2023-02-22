import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../api/userRequests'
import User from '../User/User'
import './FollowersCard.css'


const FollowersCard = () => {

  const [persons, setpersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData)

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setpersons(data);
      console.log(data);
    }
    fetchPersons();
  }, []);

  return (
    <div className='FollowersCard'>
      <h3>People you may Know</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id)
          return <User person={person} key={id} />
      })}
    </div>
  )
}

export default FollowersCard
