import React from 'react'
import { useSelector } from 'react-redux'


function UserContent({dateSplit, months}) {

    const userData = useSelector(state => state.user.data)

    return (
        <div className="content">
    
        <div className="profile">
            <div className="profile_frame">
            <img id = "avatar"src={userData.avatar_url} alt=""/>
            </div>
        </div>

        <div className="user">

            <div className="user_info">

            <div className="name" >

                <h3 id = "name">{userData.name}</h3>

                <div className="username">
                <p id="login">{`@${userData.login}`}</p>
                </div>
            </div>
        
            <div className="date">
                <p id="date">{userData ? `Joined ${dateSplit[2]} ${months[dateSplit[1]-1]} ${dateSplit[0]}` : ""}</p>
            </div>
            </div>

            <div className="bio">
            <p id = "bio">{userData.bio ? userData.bio : "This profile has no bio"}</p>
            </div>


            <div className="stats_container" id="statistics">

            <div className="stats">
                <p>Repos</p>
                <p id="repo">{userData.public_repos}</p>
            </div>

            <div className="stats">
                <p>Followers</p>
                <p id="followers">{userData.followers}</p>
            </div>

            <div className="stats">
                <p>Following</p>
                <p id="following">{userData.following}</p>
            </div>

            </div>

            <div className="links_container">

            <div className="left">
                <div className="info">
                <img src="./assets/icon-location.svg" alt=""/>
                <p id="location">{userData.location}</p>
                </div>
                <div className="info">
                <img src="./assets/icon-website.svg" alt=""/>
                <a href="link" id = "blog">{userData.blog}</a>
                </div>
            </div>

            <div className="right">
                <div className="info">
                <img src="./assets/icon-twitter.svg" alt=""/>
                <p id ="twitter">{userData.twitter_username ? userData.twitter_username : "Not Available" }</p>
                </div>
                <div className="info">
                <img src="./assets/icon-company.svg" alt=""/>
                <p id= "company">{userData.company ? userData.company : "Not Available"}</p>
                </div>
            </div>

            </div>
        </div>







        </div>
    )
}

export default UserContent
