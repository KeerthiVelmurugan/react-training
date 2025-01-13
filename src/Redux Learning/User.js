import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from './slices/userSlice'
import { deleteFruits } from './slices/fruitSlice'

function User() {
    const dispatch= useDispatch()
    const users = useSelector((state)=> state.userInfo.users)
    const fruits = useSelector((state) => state.fruitsInfo.fruits)
    
    console.log(users)
    const deleteUserInfo = (index) => {
        
        dispatch(deleteUser(index))
        alert('deleted')
    }
  
    const deleteFruitsInfo = (index) => {
        dispatch(deleteFruits(index))
    }

    
  return (
    <div>
      users
      {users.map((user,index) => (
        <div>
        <h1 key={index}>{user.username}</h1>
        <h1 key={index}>{user.age}</h1>
        <h1 key={index}>{user.email}</h1>
        <h1 key={index}>{user.contact}</h1>
        <button onClick={()=>{deleteUserInfo(index)}}>deleteUser</button>
        

        </div>
      ))}
      {
        fruits.map((fruits,index)=> (
            <div>
            <li key={index}>{fruits}</li>
            <button onClick={() => {deleteFruitsInfo(index)}}>Delete</button>
            </div>
        ))
      }

    
    </div>
  )
}

export default User
