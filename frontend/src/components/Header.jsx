import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <header>
        <Link to="/">
          <span>Mern</span>
        </Link>

        <ul>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
          <li onClick={logoutHandler}>logout</li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
