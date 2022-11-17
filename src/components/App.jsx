import "../styles/index.css";
import React, { useState } from 'react'
import LoginForm from "./LoginForm";


const App = () => {
    
    const adminUser ={
        email:"admin@test.com",
        password: "admin"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if(details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            })
        } else {
            console.log("Details do not match!")
        }
    }

    const Logout = () => {
        console.log("Logout")
    }

    return (
        <div className="App">
            {(user.email != "")? (
             <div className="welcome">
                <h2>Welcome, <span>{user.name}</span></h2>
                <h4>Where will you be today?</h4><input type="text" placeholder="Address"></input>
                <button>Update!</button>
            </div>  
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}
        </div>
    );
};

export default App;