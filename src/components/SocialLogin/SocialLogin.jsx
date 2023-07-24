import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn, facebookSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline mt-2 mb-4 mr-2"
        >
          <FaGoogle />
        </button>
        <button
          onClick={handleFacebookSignIn}
          className="btn btn-circle btn-outline mt-2 mb-4"
        >
          <FaFacebook />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
