import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../slices/usersApiSlice";
import { setCredentials } from "../../../slices/authSlice";
import { toast } from "react-toastify";
const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation(); //note if you console.log() it returns const [loginMutationFunction, { loading, isLoading, error, isError, data, }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(userLogin);
    try {
      const res = await login({ ...userLogin }).unwrap(); //{email: 'ad@gmail.con`', password: 'sgssg'} because we passed {...userLogin}
      dispatch(setCredentials({ ...res }));
    } catch (error) {
      // toast.error(error?.data?.message || error.error);
      toast.error("invalid email and password");
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserLogin({ ...userLogin, [name]: value }); // Corrected spreading userLogin
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="email"
          placeholder="ENTER EMAIL"
          value={userLogin.email}
          onChange={handleInput}
          required
        />
        <input
          type="password" // Changed to password type for password input
          name="password"
          placeholder="ENTER PASSWORD"
          value={userLogin.password}
          onChange={handleInput}
          required
        />
        <button type="submit">Submit</button>

        {isLoading && <h2>Loading...</h2>}
      </form>
    </div>
  );
};

export default Login;
