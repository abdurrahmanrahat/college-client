import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import Logo from "../../../assets/bookLogo-notBg.png";
import "./Navbar.css";
import ButtonDesign from "../../../components/ButtonDesign/ButtonDesign";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // handleLogout
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .then((e) => console.log(e));
  };

  const navLinks = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/colleges">Colleges</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/admission">Admission</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/myCollege">My College</ActiveLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-36"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex">
          <img src={Logo} className="w-40 rounded ml-2 md:ml-0" alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="md:flex justify-center items-center font-medium uppercase">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <img className="w-10 mr-4 rounded-full" src={user.photoURL} alt="" />
        ) : (
          ""
        )}
        {user ? (
          <span onClick={handleLogout}>
            <ButtonDesign name="Logout" bgColor="#FFBD00"></ButtonDesign>
          </span>
        ) : (
          <Link to="/login">
            <ButtonDesign name="Login" bgColor="#FFBD00"></ButtonDesign>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
