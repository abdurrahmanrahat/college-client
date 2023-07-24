import { Link, useLocation, useNavigate } from "react-router-dom";
import usePasswordToggle from "../../Hooks/usePasswordToggle";
import { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn, resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const emailRef = useRef();

  const [passwordInputType, toggleIcon] = usePasswordToggle();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // sign in user
    signIn(email, password)
      .then(() => {
        // const user = result.user;
        // console.log(user);
        toast.success("Login successfully", {
          position: "top-center",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message, {
          position: "top-center",
        });
      });
  };


  // Reset Password
  const handleResetPassword = () => {
    const email = emailRef.current?.value;
    // console.log(email);
    if (!email) {
      toast.error("Provide your email.", {
        position: "top-center",
      });
      return;
    }
    // Reset Pass
    resetPassword(email).then(() => {
      toast
        .success("Check your email, please!", {
          position: "top-center",
        })
        .catch((err) => {
          toast.error(err.message);
        });
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0B0016] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>

            <div className="relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type={passwordInputType}
                name="password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0B0016] bg-gray-200 text-gray-900"
              />
              <div className="space-y-1">
                <button
                  onClick={handleResetPassword}
                  className="text-xs hover:underline hover:text-rose-500 text-gray-400"
                >
                  Forgot password?
                </button>
              </div>
              <span className="absolute top-10 right-4 z-10 cursor-pointer">
                {toggleIcon}
              </span>
            </div>
          </div>

          <div>
            <input
              className="bg-[#0B0016] w-full rounded-md py-3 text-white"
              type="submit"
              value="Login"
            />
          </div>
        </form>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

        {/* Social Signin Button */}
        <SocialLogin></SocialLogin>

        <p className="px-6 text-sm text-center text-gray-400">
          Do not have an account yet?{" "}
          <Link
            to="/register"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
