import { useThomman } from "../context/DataContext";
import  newsLetter  from "../assets/envelope-newsletter.svg";
import { useState } from "react";
import { userSignUp } from "../services/AuthServices";
import { Link, useNavigate } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { toast } from "react-hot-toast"; 

function SignUp() {
  const {countries} = useThomman();

  const [pass2 , setPass2] = useState("");

  const [showEye , setShoweye] = useState(false);

  const [showEye2 , setShowEye2] = useState(false);
  
  const navigate = useNavigate(); 

  const [user , setUser] = useState({
    company: "",
    firstName: "",
    lastName: "",
    streetNum: "",
    postalCode: null,
    email: "",
    password: "",
    town: "",
    country: null
  });
  


  function handleValues(e) {
    setUser({...user, [e.target.name]: e.target.value})
    
  };

  function handleSignUp() {

    if (!user.company || !user.firstName || !user.lastName || !user.streetNum || !user.postalCode || !user.town || !user.country || !user.email ) {
      return toast.error(" Please fill all input fields !")
    };

    if (user.password.length < 8) {
      return toast.error(" Password must be longer than 8 characters. ")
    };

    if (user.password.length != pass2.length) {
      return toast.error("The passwords do not match.")
    };

    const enhUser = {
      ...user,
      role: "user",
      isActive: new Date().toISOString(),
      lastActive: null
    }

    userSignUp(enhUser)
    .then(item => {
      console.log(item);
      toast.success(" Congrulations ! New user successfully registered !");
      navigate("/register/sign-in")
    })
    .catch(err => console.error(err));
  };
  
  

  

  return (
    <>
          <div className="p-5 dark:bg-gray-800">
              <h1 className="text-center py-8 capitalize text-[3rem] text-[#1F1F1F] font-bold font-sans dark:text-[#01B4BC]">register</h1>
              <div className="flex flex-col gap-5 w-200  m-auto relative h-screen">
                
                <input
                    value={user?.company}
                   onChange={handleValues} className="bg-white  p-4 ring-0 rounded border-gray-400 dark:bg-gray-700 dark:text-[#01B4BC] dark:placeholder:text-[#01B4BC] dark:border-[#01B4BC]" name="company" type="text" placeholder="Company/Organization" />
                <p className="absolute right-2 top-4 text-xs bg-gray-400 p-1 rounded text-white uppercase">optional</p>
                
                <input
                    value={user?.firstName}
                   onChange={handleValues} className="rounded bg-white p-2  border-gray-400 outline-0 ring-0 dark:bg-gray-700 dark:text-[#01B4BC] dark:placeholder:text-[#01B4BC] dark:border-[#01B4BC]" type="text" name="firstName" placeholder="First Name" />
            
                <input
                    value={user?.lastName}
                   onChange={handleValues} className="rounded bg-white p-2  border-gray-400 outline-0 ring-0 dark:bg-gray-700 dark:text-[#01B4BC] dark:placeholder:text-[#01B4BC] dark:border-[#01B4BC]" type="text" name="lastName" placeholder="Last Name" />
            
                <input
                    value={user?.streetNum}
                   onChange={handleValues} className="rounded bg-white p-2  border-gray-400 outline-0 ring-0 dark:bg-gray-700 dark:text-[#01B4BC] dark:placeholder:text-[#01B4BC] dark:border-[#01B4BC]" type="text" name="streetNum" placeholder="Street and number" />
            
                <input
                    value={user?.postalCode}
                   onChange={handleValues} className="rounded bg-white p-2  border-gray-400 outline-0 ring-0 dark:bg-gray-700 dark:text-[#01B4BC] dark:placeholder:text-[#01B4BC] dark:border-[#01B4BC]" type="number" name="postalCode" placeholder="Postal Code" />
            
                <input
                    value={user?.town}
                   onChange={handleValues} className="rounded bg-white p-2  border-gray-400 outline-0 ring-0 dark:bg-gray-700 dark:text-[#01B4BC] dark:placeholder:text-[#01B4BC] dark:border-[#01B4BC]" type="text" name="town" placeholder="Town" />
            
                <select onChange={handleValues} className="rounded bg-white p-2  border-gray-400 outline-0 ring-0 dark:bg-gray-700 dark:text-[#01B4BC] dark:placeholder:text-[#01B4BC] dark:border-[#01B4BC]" type="text" name="country">
                    {
                      countries?.map((item , i) => 
                        <option  key={i}>{item?.name}</option>
                    )
                    }
                </select>
            
                <input
                    value={user?.email}
                   onChange={handleValues} className="rounded bg-white p-2  border-gray-400 outline-0 ring-0 dark:bg-gray-700 dark:text-[#01B4BC] dark:placeholder:text-[#01B4BC] dark:border-[#01B4BC]" type="email" name="email" placeholder="Email address" />
                <input
                    value={user?.password}
                   onChange={handleValues} className="rounded bg-white p-2  border-gray-400 outline-0 ring-0 dark:bg-gray-700 dark:text-[#01B4BC] dark:placeholder:text-[#01B4BC] dark:border-[#01B4BC]" type={showEye ? "text" : "password"} name="password" placeholder="Password" />
                <div onClick={() => setShoweye(!showEye)} className="absolute top-130 right-5 cursor-pointer">
                  {showEye ?  <LuEye className="dark:text-[#01B4BC]" size={20} /> : <LuEyeClosed className="dark:text-[#01B4BC]"  size={20}  />}
                </div>
                <input onChange={(e) => setPass2(e.target.value)} className="rounded bg-white p-2  border-gray-400 outline-0 ring-0 dark:bg-gray-700 dark:text-[#01B4BC] dark:placeholder:text-[#01B4BC] dark:border-[#01B4BC]" type={showEye2 ? "text" : "password"} name="password2" placeholder="Re Password" />
                <div onClick={() => setShowEye2(!showEye2)} className="absolute top-145 right-5 cursor-pointer">
                    {showEye2 ?  <LuEye className="dark:text-[#01B4BC]" size={20} /> : <LuEyeClosed className="dark:text-[#01B4BC]" size={20} />}
                </div>
                <div className="border-[#E8E8E8] border-2 rounded  p-5 flex items-center gap-5 dark:border-[#01B4BC]">
                    <input className="p-3 rounded border-[#B4B4B4] dark:bg-gray-700 dark:border-[#01B4BC]  outline-0 ring-0 focus:outline-0 cursor-pointer" type="checkbox" name="agreement"  />
                    <p className="text-[#4E4E4E] w-150 dark:text-[#01B4BC]">
                      Yes, I would like to stay informed and agree to receive email advertising and a measurement of 
                      email usage behaviour.Unsubscribing is possible at any time.
                      Further information in our <span className="underline hover:text-[#7E00F3]">privacy policy</span>
                    </p>
                    <div>
                      <img src={newsLetter} alt="newsletter svg" />
                    </div>
                </div>
              </div>
                <div className="flex flex-col gap-5 justify-center items-center">
                  <button onClick={handleSignUp} className="bg-black text-white p-[10px_30px] duration-400 w-35 cursor-pointer hover:bg-[#7E00F3] transition-colors rounded-full text-lg font-bold capitalize dark:bg-gray-700 dark:text-[#01B4BC] dark:hover:bg-[#01B4BC] dark:hover:text-gray-700">register</button>
                  <p className="text-[#4E4E4E] dark:text-[#01B4BC]">Have you bought from us before?</p>
                  <p className="text-[#4E4E4E] text-lg underline underline-offset-10 hover:underline-offset-2 duration-500 dark:text-[#01B4BC] cursor-pointer transition-all hover:text-[#7E00F3]"><Link to={"/register/sign-in"}>Log In</Link></p>
                </div>
          </div>
          </>
  )
}

export default SignUp
