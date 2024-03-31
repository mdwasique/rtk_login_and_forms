import { useEffect, useState } from "react";
import "./register.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../../slices/usersApiSlice";
import { setCredentials } from "../../../slices/authSlice";

const Register = () => {
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(userRegister);
    if (userRegister.password !== userRegister.confirmPassword) {
      toast.error("Passwords do not match!");
    } else {
      try {
        const res = await register({ ...userRegister }).unwrap(); // here {...userRegister} contains {name: 'sfaf', email: 'xvv@gmail.com', password: '123', confirmPassword: '123'}
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (error) {
        // console.log(error);
        toast.error("Registration failed");
      }
    }
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegister({ ...userRegister, [name]: value }); // Corrected spreading userLogin
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="ENTER NAME"
          value={userRegister.name}
          onChange={handleInput}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="ENTER EMAIL"
          value={userRegister.email}
          onChange={handleInput}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="ENTER PASSWORD"
          value={userRegister.password}
          onChange={handleInput}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="ENTER PASSWORD"
          value={userRegister.confirmPassword}
          onChange={handleInput}
          required
        />
        <button type="submit">Submit</button>
        {isLoading && <span>Loading..</span>}
      </form>
    </div>
  );
};

export default Register;
