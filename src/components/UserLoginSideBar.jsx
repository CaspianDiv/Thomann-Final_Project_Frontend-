import { HiMiniXMark } from "react-icons/hi2"
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { IoIosArrowRoundForward, IoIosLogOut } from "react-icons/io";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { userSignIn } from "../services/AuthServices";
import { useAuth } from "../context/AuthContext";


function UserLoginSideBar({ userStatus, setUserStatusSideBar}) {
        const [eyeStatus , setEyeStatus] = useState(false);
        
        const {userJson , login , logout} = useAuth();
        
        const [user , setUser] = useState({
            email: "",
            password: "",
        });
        
        const navigate = useNavigate(); 


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
            login(item);
            navigate("/Thomann")
            })
            .catch(err => console.error(err));
        };



        function handleEyeStatus() {
            setEyeStatus(!eyeStatus)
        }

  return (
    <>
        <div onClick={() => setUserStatusSideBar(false)} className={`${userStatus ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} bg-black/50 inset-0 fixed transition-all duration-700 ease-in-out z-10`}>
             <div onClick={(e) => e.stopPropagation()} className={`${userStatus ? 'right-0' : '-right-250'}  z-50 tab:w-full xl:w-112.5 w-150 overflow-scroll lg:w-112.5  md:w-full  transition-all  duration-1000 dark:bg-gray-800 dark:text-[#01b4bc]  bg-[#fff] fixed h-full  `}>   
            {   userJson ?  
                <div className="p-5">
                  <div>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-xl">Email : {userJson[0]?.email}</p>
                        <HiMiniXMark className="cursor-pointer p-[5px_10px] mt-2  hover:text-[#7E00F3] text-[4rem] lg:text-[3rem] xl:text-[3rem]"  onClick={() => setUserStatusSideBar(false)} />
                      </div>
                      <div className="p-[40px_10px]">
                          <button onClick={logout} className="font-semibold flex gap-5 items-center hover:underline cursor-pointer">Log Out <IoIosLogOut size={22} className="text-red-500" /></button>
                      </div>
                      <p className="font-semibold hover:underline cursor-pointer"><Link to={"/userDashboard"}>User Dashboard</Link></p>
                  </div>
                </div>
                :
                    <div>
                    <div className="flex justify-between  items-center p-[0_24px]">
                        <h4 className="text-[2rem] p-3 font-bold leading-10 lg:text-lg xl:text-lg">Customer Centre login</h4>            
                        <HiMiniXMark className="cursor-pointer p-[5px_10px] mt-2  hover:text-[#7E00F3] text-[4rem] lg:text-[3rem] xl:text-[3rem]"  onClick={() => setUserStatusSideBar(false)} />
                    </div>
                    <div className="flex m-auto flex-col justify-center items-center py-4 px-4">
                        <div className="py-6 w-full">
                            <input onChange={handleValues} className="w-full rounded p-[12px_8px_12px_16px] text-[2rem] lg:text-lg xl:text-lg text-black hover:outline-[#7E00F3] dark:hover:outline-[#01b4bc] dark:focus:outline-[#01b4bc] dark:focus:outline-2 dark:placeholder:text-[#01b4bc] dark:text-[#01b4bc] dark:bg-gray-700 dark:focus:ring-[#01b4bc] dark:hover:outline-2 focus:outline-[#7E00F3] focus:ring-[#7E00F3]  dark:focus:ring-2  focus:ring-offset-0  hover:outline-2" name="email" placeholder="Email adress*" type="email"/>
                        </div>
                        <div className="relative w-full">
                            <label  className="absolute right-5 top-2">
                               {
                                 eyeStatus ? 
                                        <LuEye onClick={handleEyeStatus} className="cursor-pointer rounded-full p-2 dark:text-gray-200 dark:hover:bg-[#01b4bc] dark:hover:text-gray-600 hover:bg-[#ccccccb8] text-[3rem] lg:text-[2.5rem] xl:text-[2.5rem]" /> :
                                        <LuEyeClosed  onClick={handleEyeStatus} className="cursor-pointer rounded-full p-2 dark:hover:bg-[#01b4bc] dark:hover:text-gray-600 hover:bg-[#ccccccb8] dark:text-gray-200 text-[3rem] lg:text-[2.5rem] xl:text-[2.5rem]" /> 
                    
                               }
                            </label>
                            <input onChange={handleValues} className="w-full text-[2rem] lg:text-lg xl:text-lg text-black rounded p-[12px_8px_12px_16px] dark:focus:outline-2 dark:focus:outline-[#01b4bc] dark:placeholder:text-[#01b4bc] dark:text-[#01b4bc] dark:bg-gray-700 hover:outline-[#7E00F3] dark:hover:outline-[#01b4bc] dark:hover:outline-2  focus:outline-[#7E00F3] focus:ring-[#7E00F3] dark:focus:ring-[#01b4bc] dark:focus:ring-2 focus:ring-offset-0  hover:outline-2" name="password" placeholder="Password*" type={eyeStatus ? 'text' : 'password'}/>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="text-end px-10">
                      <button className="hover:border-b-2 border-[#7E00F3] dark:text-[#01b4bc] dark:border-[#01b4bc] text-[1.7rem] cursor-pointer font-semibold hover:text-purple-700 text-[#6009B0] dark:hover:text-gray-400 dark:hover:border-b-gray-400 lg:text-lg xl:text-lg">Forgot your password?</button>
                    </div>
                    <div className="py-4 px-5 ">
                        <label htmlFor="purple-checkbox" className="cursor-pointer  flex gap-2 items-center">
                        <input  id="purple-checkbox" type="checkbox" value="" className="w-4 h-4 text-purple-600  border-gray-300 rounded-sm focus:ring-purple-500  dark:ring-offset-gray-800 focus:ring-2  dark:text-[#01b4bc]  dark:border-[#01b4bc] dark:focus:ring-[#01b4bc]" />
                           <p className="text-[1.7rem] lg:text-lg xl:text-lg">Remember Me</p>
                        </label>
                    </div>
                    <div className="text-center p-4">
                        <button onClick={handleSignUp} className="w-full bg-[#7E00F3] dark:bg-gray-700 dark:text-[#01b4bc] dark:hover:bg-[#01b4bc] dark:hover:text-gray-700  hover:text-white text-white p-4 rounded-full font-bold cursor-pointer hover:bg-purple-900 transition-all duration-500 text-[1.8rem] lg:text-lg xl:text-lg">Log In</button>
                    </div>
                    <hr className="m-auto mx-5 mt-5 dark:border-[#01b4bc] border-gray-300" />
                    <div className="py-5">
                        <NavLink to={"register/sign-up"}>
                            <button className="text-[#7E00F3] dark:text-[#01b4bc] flex  items-center m-auto gap-2 font-semibold hover:border-b-2 dark:hover:text-gray-400 dark:hover:border-b-gray-400 text-[1.8rem] hover:text-purple-600 hover:border-purple-800 cursor-pointer lg:text-lg xl:text-lg">Register now <IoIosArrowRoundForward className="pt-2"  size={40} /></button>
                        </NavLink>
                    </div>
                </div> 
                }
            </div> 
        </div> 
    </>
  )
}

export default UserLoginSideBar