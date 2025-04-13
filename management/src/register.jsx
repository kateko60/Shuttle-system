import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./navigation.jsx";
import { useAuth } from "./authContext.jsx";

function Register({ isLoggedIn }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [studentNo, setStudentNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [email, setEmail] = useState('');
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      alert("Passwords do not match!");
      return;
    }
    register();
    navigate('/');
  };

  return (
    <>
      <div className="form-container">
        <h1 className="kazi">KAZI Shuttles</h1>
        <div className="form-hero">
          <form className="form" onSubmit={handleRegistration}>
            <h2 className="register">Registration</h2>

            {/* User firstname */}
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              id="firstname"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />

            {/* User lastname */}
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              id="lastname"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />

            {/* Student number */}
            <label htmlFor="studentNo">Student number (optional)</label>
            <input
              type="number"
              id="studentNo"
              value={studentNo}
              onChange={(e) => setStudentNo(e.target.value)}
            />

            {/* Email address */}
            <label htmlFor="address">Email address</label>
            <input
              type="email"
              id="address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Confirm password */}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              required
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />

            <input type="submit" value="Register" className="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
