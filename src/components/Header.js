import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import { authSliceActions } from "../store/auth";

const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticate);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(authSliceActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {true === isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
