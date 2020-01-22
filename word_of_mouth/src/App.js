import React from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import Signup from "./componants/views/Signup";
import { LOGIN } from '../src/Paths';

function App() {


    //
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [age, setAge] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [gender, setGender] = useState('');
    //
    //   function signUpClick() {
    //       console.log("sign up clicked");
    //       const api = axios.create({
    //       });
    //       api.post("/graphql",
    //           { query: `
    //             mutation CreateUser($user: UserInput!) {
    //               createUser(user: $user) {
    //                   email
    //                   lastName
    //                   firstName
    //                   uuid
    //               }
    //             }
    //             `,
    //             variables: {
    //               user: {
    //                   firstName: firstName,
    //                   lastName: lastName,
    //                   email: email,
    //                   password: password,
    //                   age: age,
    //                   gender: gender,
    //               }
    //             },
    //           }).then(result => console.log(result))
    //       .catch(err => console.group(err));
    //   }

      return (
          <Router>
            <Signup path={LOGIN} />
          </Router>

  );
}

export default App;
