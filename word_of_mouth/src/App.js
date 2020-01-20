import React from 'react';
import './App.css';
import './graphqlQueries/CreateUserMutation';
import axios from 'axios';

function App() {

      function signUpClick() {
          console.log("sign up clicked");
          const api = axios.create({
          });
          api.post("/graphql",
              { query: `
                mutation CreateUser($user: UserInput!) {
                  createUser(user: $user) {
                      email
                      lastName
                      firstName
                      uuid
                  }
                }
                `,
                variables: {
                  user: {
                      firstName: "ken",
                      lastName: "mot",
                      email: "email@rq.dev",
                      password: 'pass!',
                      age: "1",
                      gender: "male",
                  }
                },
              }).then(result => console.log(result))
          .catch(err => console.group(err));
      }

      return (
    <div className="App">
        <header>Word of Mouth</header>
        <br/>
        <br/>
        <br/>
        <p>Sign Up</p>
        <input placeholder={"Email"} />
        <input placeholder={"Password"}/>

        <br/>
        <br/>
        <input placeholder={"First Name"} />
        <input placeholder={"Last Name"}/>

        <br/>
        <br/>
        <input placeholder={"First Name"} />
        <input placeholder={"Last Name"}/>

        <br/>
        <br/>
        <input placeholder={"Age"} />
        <input placeholder={"Gender"}/>

        <br/>
        <br/>
        <button id={"signUp"} onClick={signUpClick}>Sign Up</button>

    </div>
  );
}

export default App;
