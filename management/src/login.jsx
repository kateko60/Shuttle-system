import { useState, useEffect } from "react";
import Navigation from "./navigation.jsx";
import { useAuth } from "./authContext.jsx";
import {useNavigate} from 'react-router-dom';

function Login(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [studentNo, setStudentNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {logIn} = useAuth();
    const navigate = useNavigate();
    
    //Temporary static data
const Users = [
    {
        name: 'John',
        surname: 'Doe',
        studentNumber: 2256162,
        emailAddress: 'johndoe@gmail.com',
        Passkey: 'jdghdhfg76'
    },
    {
        name: 'Jane',
        surname: 'Smith',
        studentNumber: 2256163,
        emailAddress: 'janesmith@gmail.com',
        Passkey: 'samj88'
    },
    {
        name: 'Michael',
        surname: 'Brown',
        studentNumber: 2256164,
        emailAddress: 'michaelbrown@gmail.com',
         Passkey: 'jh76'
    },
    {
        name: 'Emily',
        surname: 'Davis',
        studentNumber: 2256165,
        emailAddress: 'emilydavis@gmail.com',
         Passkey: ' t5'
    },
    {
        name: 'Chris',
        surname: 'Wilson',
        studentNumber: 2256166,
        emailAddress: 'chriswilson@gmail.com',
         Passkey: 'j90sdgh'
    }
];

 const findUser = (e) =>{
             e.preventDefault();
          const user = Users.find(b => b.emailAddress.toLowerCase().trim() == email && b.Passkey.toLowerCase().trim() == password);
      user != null ?  logIn() : console.log('user not found'); 

      setEmail('');
      setPassword('');
      navigate('/')

 }

    return(
        <>
        <h1 className="kazi-login">KAZI Shuttles</h1>
                <div className="form-hero">
                    <form className="form-login" onSubmit={findUser} logIn>
                    <h2 className="logIn">Log In</h2>
                    {/*email address */}
                    <label>Email address</label>
                    <input type="text" id="address" required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>

                     {/*Password*/}

                     <label>Password</label>
                    <input type="password" id="password" required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>


                            <input type="submit" value="Log In" className="submit-login"></input>
                        </form>
                </div>
                    
        </>
    )
}

export default Login;