import {useState,useEffect} from 'react'
import axios from 'axios'

import './Members.css'
import { IUsersData } from '../../Types/types'



const Members = () => {
  const [users,setUsers] = useState<IUsersData[] | null>()

  useEffect(()=>{
    (async()=>{
      const response = await axios.get("http://localhost:3500/users") 
      setUsers(response.data)
      
    })()


  },[])
  return (
    <div className='users-container'>
      <h1>Users On plan</h1>
      <div className="users-wrapper">
        <div className="user-headers">
          <h4>EMAIL</h4>
          <h4>STATUS</h4>
        </div>

      {users? users.map(user=>{
        return(
          <div className={user.isActive?'user':'user inactive'} key={user.id}>
            <img src={user.img} alt="" />
            <p className='username' >{user.name}</p>
            <p className='user-email' >{user.email}</p>
            {user.isActive ?<p className='active-user' >Active</p> :<p className='inactive-user' >Inactive</p>}
            <span> . . .</span>
            
            
          </div>
        )
      }):null}
      </div>
    </div>
  )
}

export default Members