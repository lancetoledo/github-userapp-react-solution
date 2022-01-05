import React from 'react'
import UserContent from './UserContent'
import UserInput from './UserInput'

function Container({setUser, changeTheme, userRef, dateSplit, months}) {
    return (
        <div className='container'>
            
            <UserInput changeTheme = {changeTheme} userRef = {userRef} setUser = {setUser}/>

            <UserContent dateSplit = {dateSplit} months = {months}/>

        </div>
    )
}

export default Container
