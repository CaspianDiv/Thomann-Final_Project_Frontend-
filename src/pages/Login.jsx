import { useState } from "react";
import { userSignIn } from "../services/AuthServices";
import { Link, useNavigate } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { toast } from "react-hot-toast"; 
import { useAuth } from "../context/AuthContext";

function Login() {

  const [showEye , setShoweye] = useState(false);

  const {login} = useAuth();

  
  const navigate = useNavigate(); 

  const [user , setUser] = useState({
    email: "",
    password: "",
  });
  


  function handleValues(e) {
    setUser({...user, [e.target.name]: e.target.value})
    
  };

  function handleSignUp() {

    if (!user.email || !user.password) {
      return toast.error(" Please fill all input fields !")
    };


    userSignIn(user)
    .then(item => {
      console.log(item);
      toast.success(" Congrulations !  successfully login !");
      login(item)
      navigate("/");
    })
    .catch(() => toast.error("Email or password is invalid ! "));
  };
  

  return (
    <>
      <div className="p-5 dark:bg-gray-800">
        <h1 className="text-center py-8 capitalize text-[3rem] text-[#1F1F1F] font-bold font-sans dark:text-[#01B4BC]">
          login
        </h1>
        <div className="flex flex-col gap-5 w-200  m-auto relative">
       
          <input
            value={user.email}
            onChange={handleValues}
            className="rounded bg-white p-2 dark:bg-gray-800 dark:border-[#01B4BC] dark:text-[#01B4BC] dark:placeholder:text-[#01B4BC] border-gray-400 outline-0 ring-0"
            type="email"
            name="email"
            placeholder="Email address"
          />
          <input
            value={user.password}
            onChange={handleValues}
            className="rounded bg-white p-2 dark:bg-gray-800 dark:text-[#01B4BC] dark:border-[#01B4BC] dark:placeholder:text-[#01B4BC] border-gray-400 outline-0 ring-0"
            type={showEye ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          <div
            onClick={() => setShoweye(!showEye)}
            className="absolute top-18 right-5 cursor-pointer"
          >
            {showEye ? <LuEye className="dark:text-[#01B4BC]" size={20} /> : <LuEyeClosed className="dark:text-[#01B4BC]" size={20} />}
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <button
            onClick={handleSignUp}
            className="bg-black text-white capitalize mt-10 p-[10px_30px] dark:bg-gray-700 dark:text-[#01B4BC] dark:hover:bg-[#01B4BC] dark:hover:text-gray-800 duration-400 w-35 cursor-pointer hover:bg-[#7E00F3] transition-colors rounded-full text-lg font-bold"
          >
            login
          </button>
          <p className="text-[#4E4E4E] dark:text-[#01B4BC]">Do you not have account?</p>
          <p className="text-[#4E4E4E] text-lg underline underline-offset-10 hover:underline-offset-2 duration-500  cursor-pointer transition-all dark:text-[#01B4BC] hover:text-[#7E00F3]">
            <Link to={"/register/sign-up"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
