import { Link, Navigate, NavLink} from "react-router-dom"; 
import { CiMail } from 'react-icons/ci';
import { BsPersonLock } from "react-icons/bs";
import { IoIosLogOut } from 'react-icons/io';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useAuth } from "../context/AuthContext";

function UserDashboard() {
  

  const {userJson , logout} = useAuth();
  console.log(userJson);


  return (
    <>
        <div className='p-5 dark:bg-gray-900 dark:border-[#01b4bc] border dark:text-[#01b4bc]'>
            <h1 className='capitalize text-2xl font-semibold'>user dashboard</h1>
            <div className="flex flex-wrap font-semibold justify-around p-5 gap-5 rounded mt-10">
                <div className="flex items-center flex-wrap gap-10">
                    <div className="flex flex-col gap-5 p-3">
                      <h2 className="capitalize">personal informations</h2>
                      <label className="uppercase">id</label>
                      <input value={userJson[0]?.id} readOnly type="text" className="rounded dark:bg-gray-800 dark:border-[#01b4bc] border-gray-300 ring-0 focus:ring-0 outline-0" />
                      <label className="capitalize">first name</label>
                      <input value={userJson[0]?.firstName} readOnly type="text" className="rounded dark:bg-gray-800 dark:border-[#01b4bc] border-gray-300 ring-0 focus:ring-0 outline-0" />
                      <label className="capitalize">postal code</label>
                      <input value={userJson[0]?.postalCode} readOnly type="number" className="rounded dark:bg-gray-800 dark:border-[#01b4bc] border-gray-300 ring-0 focus:ring-0 outline-0" />
                    </div>
                    <div className="flex flex-col gap-5 pt-10">
                      <label className="capitalize">email</label>
                      <input value={userJson[0]?.email} readOnly type="text" className="rounded dark:bg-gray-800 dark:border-[#01b4bc] border-gray-300 ring-0 focus:ring-0 outline-0" />
                      <label className="capitalize">last name</label>
                      <input value={userJson[0]?.lastName} readOnly type="text" className="rounded dark:bg-gray-800 dark:border-[#01b4bc] border-gray-300 ring-0 focus:ring-0 outline-0" />
                      <label className="capitalize">country</label>
                      <input value={userJson[0]?.country} readOnly type="text" className="rounded dark:bg-gray-800 dark:border-[#01b4bc] border-gray-300 ring-0 focus:ring-0 outline-0" />
                    </div>
                    <div className="flex flex-col gap-5 pt-10">
                      <label className="capitalize">password</label>
                      <input value={userJson[0]?.password} readOnly type="text" className="rounded dark:bg-gray-800 dark:border-[#01b4bc] border-gray-300 ring-0 focus:ring-0 outline-0" />
                      <label className="capitalize">street number</label>
                      <input value={userJson[0]?.streetNum} readOnly type="text" className="rounded dark:bg-gray-800 dark:border-[#01b4bc] border-gray-300 ring-0 focus:ring-0 outline-0" />
                      <label className="capitalize">town</label>
                      <input value={userJson[0]?.town} readOnly type="text" className="rounded dark:bg-gray-800 dark:border-[#01b4bc] border-gray-300 ring-0 focus:ring-0 outline-0" />
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                      <Link to={"/Thomann"} className="capitalize cursor-pointer hover:underline">profile</Link>
                      <Link to={"/Basket"} className="capitalize cursor-pointer hover:underline">my orders</Link>
                      <Link to={"/WishList"} className="capitalize cursor-pointer hover:underline">my wishlist</Link>
                    
                        <button onClick={logout} className="cursor-pointer flex items-center gap-2 capitalize">
                          log out
                          <IoIosLogOut size={20} />
                        </button>
                </div>
            </div>
        </div>
    </>
  )
}

export function PrivateRoute({ children }) {

  const {userJson} = useAuth();

  return(
    
    <> 
        {
          userJson ? children : <Navigate to={"/register/sign-in"} />
        }  
    </>
    
  )
};

export default UserDashboard
