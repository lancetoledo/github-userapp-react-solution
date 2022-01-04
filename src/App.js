import './App.css';
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'

function App() {

const [user, setUser] = useState("octocat")
const [userData,setUserData] = useState({})
const [theme, setTheme] = useState('')

const userRef = useRef()


//REGULAR AXIOS CALL
  // useEffect(() => {
  //   axios.get('https://api.github.com/users/octocat')
  // .then(res => {
  //   console.log(res.data);
  //   // setMovies(res.data.results)
  // }, error => {
  //   console.log(error);
  // })
  // }, [])

// AXIOS CALL WITH ASYNC AWAIT

// **base url to make requests to the database 
// const instance = axios.create({
//   baseURL: "'https://api.github.com/users"
// })

  useEffect(() => {
    console.log(userRef.current.value)
    const getUser = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        setUserData(response.data)
      }
      catch(error) {
        console.log(error)
      }
    }
    getUser()
  }, [user])



console.log(userData)

// variable to split date create at for formatting


let dateSplit = ""

// if(userData) {
//   dateSplit = userData.created_at.split("T").shift().split("-")
// }
// userData.created_at.split("T").shift().split("-")
const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]


const changeTheme = ()=> {
  if(theme === "") {
    setTheme('dark')
  }
  else {
    setTheme("")
  }
}

  return (
    <div className={`App ${theme}`}>
      <div className='container'>

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
                <p id = "bio">{userData.bio}</p>
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
                  <p id= "company">{userData.company}</p>
                  </div>
                </div>

              </div>
            </div>


    

    
    
    
          </div>
      </div>
    </div>

  );
}

export default App;
