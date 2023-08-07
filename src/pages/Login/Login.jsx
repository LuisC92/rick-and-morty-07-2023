import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const Login = () => {
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  //   const [userLogin, setUserLogin] = useState({});

  const { userLogin, setUserLogin } = useContext(UserContext);

  const handleChange = (event) => {
    // console.log("target: ", event.target)
    // console.log("name: ", event.target.name)
    // console.log("value: ", event.target.value)

    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event, userLogin) => {
    event.preventDefault();
    console.log(userLogin);
  };

  return (
    <div className="content-container">
      <form onSubmit={(event) => handleSubmit(event, userLogin)}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            name="email"
            type="email"
            placeholder="Type your email here"
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            type="password"
            placeholder="Type your password here"
            onChange={handleChange}
          />
        </div>

        <br />
        <div className="text-center">
          <button className="btn btn-primary mt-3" type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
