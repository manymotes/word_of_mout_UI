import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';



class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '', email: '', age:'', gender:'',  password: '', password2:'' };
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };


    signUpClick = () => {
        if (this.state.password != this.state.password2 || this.state.password2 == null) {
            alert('Password entries must match and cannot be empty');
            return;
        }
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
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.email,
                        password: this.state.password,
                        age: this.state.age,
                        gender: this.state.gender,
                    }
                },
            }).then(result => {
                console.log(result)
            if (result.data.firstName != null) {
                console.log("success");
                return  <Redirect  to="/home/" />
            }
        }).catch(err => console.group(err));
    };

    render() {
        return (
            <React.Fragment>
                    <header>Word of Mouth</header>
                    <br/>
                    <br/>
                    <br/>
                    <p>Sign Up</p>

                    <br/>
                    <input placeholder={"First Name"}
                           type="text"
                           name={"firstName"}
                           value={this.state.firstName}
                           onChange={this.handleChange}
                    />
                    <input placeholder={"Last Name"}
                           type="text"
                           name={"lastName"}
                           value={this.state.lastName}
                           onChange={this.handleChange}
                    />

                    <br/>
                    <br/>
                    <input placeholder={"Age"}
                           type="integer"
                           name={"age"}
                           value={this.state.age}
                           onChange={this.handleChange}
                    />
                    <input placeholder={"Gender"}
                           type="text"
                           name={"gender"}
                           value={this.state.gender}
                           onChange={this.handleChange}
                    />

                    <br/>
                    <br/>


                    <input placeholder={"Email"}
                           type="text"
                           name={"email"}
                           value={this.state.email}
                           onChange={this.handleChange}
                    />
                    <input placeholder={"Password"}
                           type="text"
                           name={"password"}
                           value={this.state.password}
                           onChange={this.handleChange}
                    />
                    <br/>
                    <br/>
                    <input placeholder={"Renter Password"}
                           type="text"
                           name={"password2"}
                           value={this.state.password2}
                           onChange={this.handleChange}
                    />

                    <br/>
                    <br/>

                    <button id={"signUp"} onClick={this.signUpClick}>Sign Up</button>
            </React.Fragment>
        )
    }

}
export default Signup
