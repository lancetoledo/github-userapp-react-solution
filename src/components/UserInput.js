import React from 'react'

function UserInput({changeTheme, userRef, setUser}) {
    return (
        <div className='UserInput'>
            <div className="header">
                <h4>devfinder</h4>
                <div className="darkMode" >
                    <p id="modeText">DARK</p>
                    <img onClick = {changeTheme} src="./assets/icon-moon.svg" id = "dark_btn"alt=""/>
                </div>        
            </div>

            <div className="search" id="search_container">
                <img src="./assets/icon-search.svg" alt=""/>
                <input ref = {userRef} id ="input" type="text" placeholder="Search Github username..."/>
                <div className="search_btn">
                    <button onClick={()=>setUser(userRef.current.value)} id="search">Search</button>
                </div>
            </div>

            <div id="error">
              <p>User not found</p>
            </div>
        </div>
    )
}

export default UserInput
