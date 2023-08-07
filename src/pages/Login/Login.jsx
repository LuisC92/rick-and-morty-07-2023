import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";

const Login = () => {
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
//   const [userLogin, setUserLogin] = useState({});

const {userLogin, setUserLogin} = useContext(UserContext)

  const handleChange = (event) => {
    // console.log("target: ", event.target)
    // console.log("name: ", event.target.name)
    // console.log("value: ", event.target.value)

    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event, userLogin) => {
    event.preventDefault();
    console.log(userLogin)
  }

  return (
    <div>
      <form onSubmit={(event)=>handleSubmit(event, userLogin)}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          name="email"
          type="email"
          placeholder="Type your email here"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          name="password"
          type="password"
          placeholder="Type your password here"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
