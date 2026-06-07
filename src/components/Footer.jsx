import paypalImg from "../assets/paypal.svg"
import payImg from "../assets/amazonpay-short.svg"
import visaImg from "../assets/visa.svg"
import masterCardImg from "../assets/mastercard.svg"
import americanExpressImg from "../assets/amex.svg"
import dinersClubImg from "../assets/dinersclub.svg"
import prePayImg from "../assets/prePayment.svg"
import appstoreImg from "../assets/download-app-store.svg"
import googlePlayImg from "../assets/download-google-play.svg"
import { MdDone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


function Footer() {
  return (
    <>
        <footer>
                <div className="flex flex-wrap justify-around gap-5 bg-[#F3F3F3] dark:bg-gray-900 dark:text-[#01b4bc] p-3">
                        <div className="px-4">
                            <p className="font-semibold py-4 text-2xl xl:text-lg lg:text-lg">Shop and pay safely</p> 
                            <div className="xl:w-[50%] tab:w-[50%] flex flex-wrap gap-5">
                                <img src={paypalImg} className="h-15 w-17.5 object-center border hover:bg-blue-100 cursor-pointer transition-colors border-gray-200 bg-[#fff] dark:bg-gray-400 dark:border-0  p-2 rounded" alt="pay pal logo img"/>
                                <img src={payImg} className="h-15 w-17.5 object-center border hover:bg-blue-100 cursor-pointer transition-colors border-gray-200 bg-[#fff] dark:bg-gray-400 dark:border-0  p-2 rounded" alt="amazon pay logo img"/>
                                <img src={visaImg} className="h-15 w-17.5 object-center border hover:bg-blue-100 cursor-pointer transition-colors  border-gray-200 bg-[#fff] dark:bg-gray-400 dark:border-0  p-2 rounded" alt="visa logo img"/>
                                <img src={masterCardImg} className="h-15 w-17.5 object-center hover:bg-blue-100 cursor-pointer transition-colors  border border-gray-200 bg-[#fff] dark:bg-gray-400 dark:border-0  p-2 rounded" alt="mastercard logo img"/>
                                <img src={americanExpressImg} className="h-15 w-17.5 object-center hover:bg-blue-100 cursor-pointer transition-colors  border border-gray-200 bg-[#fff]  dark:bg-gray-400 dark:border-0 p-2 rounded" alt="americanexpress bank logo img"/>
                                <img src={dinersClubImg} className="h-15 w-17.5 object-center hover:bg-blue-100 cursor-pointer transition-colors border border-gray-200 bg-[#fff] dark:bg-gray-400 dark:border-0  p-2 rounded" alt="dinersclub logo img"/>
                                <img src={prePayImg} className="h-15 w-17.5 object-center border hover:bg-blue-100 cursor-pointer transition-colors border-gray-200 bg-[#fff] dark:bg-gray-400 dark:border-0  p-2 rounded" alt="prepay logo img"/>
                            </div>
                            <p className="pt-5 w-[70%] dark:text-[#01b4bc] text-[#1F1F1F] text-xl xl:text-lg lg:text-lg">Payment can be made safely and secuerly with PayPal,Amazon Pay,Credit Card or Bank Transfer</p>
                        </div>
                        <div className="pt-5 flex flex-col gap-5"> 
                            <p className="font-semibold py-4 text-2xl xl:text-lg lg:text-lg">Your benefits</p>
                            <div className="hover:text-[#7E00F3] dark:text-[#01b4bc] text-[#1F1F1F] transition-colors cursor-pointer flex gap-2 leading-10 items-center"> 
                                <MdDone size={25} />
                                <p className="text-2xl xl:text-lg lg:text-lg">3 Years Thoman"n Warranty</p>    
                            </div>
                            <div className="hover:text-[#7E00F3] dark:text-[#01b4bc] text-[#1F1F1F] transition-colors cursor-pointer flex gap-2 leading-10 items-center"> 
                                <MdDone size={25} />
                                <p className="text-2xl xl:text-lg lg:text-lg">30-Day Money-Back Guarantee</p>
                            </div>
                            <div className="hover:text-[#7E00F3] dark:text-[#01b4bc] text-[#1F1F1F] transition-colors cursor-pointer flex gap-2 leading-10 items-center"> 
                                <MdDone size={25} />
                                <p className="text-2xl xl:text-lg lg:text-lg">Repair Service</p>
                            </div>
                            <div className="hover:text-[#7E00F3] dark:text-[#01b4bc] text-[#1F1F1F] transition-colors cursor-pointer flex gap-2 leading-10 items-center"> 
                                <MdDone size={25} />
                                <p className="text-2xl xl:text-lg lg:text-lg">Advice from our experts</p>
                            </div>
                            <div className="hover:text-[#7E00F3] dark:text-[#01b4bc] text-[#1F1F1F] transition-colors cursor-pointer flex gap-2 leading-10 items-center">
                                <MdDone size={25} />
                                <p className="text-2xl xl:text-lg lg:text-lg">Satisfaction Guarantee</p>
                            </div>
                            <div className="hover:text-[#7E00F3] dark:text-[#01b4bc] text-[#1F1F1F] transition-colors cursor-pointer flex gap-2 leading-10 items-center"> 
                                <MdDone size={25} />
                                <p className="text-2xl xl:text-lg lg:text-lg">Europe's Largest Warehouse</p>
                            </div>
                        </div>
                        <div className="pt-5 flex flex-col gap-5">
                            <p className="font-semibold py-4 text-2xl xl:text-lg lg:text-lg">Service</p>
                            <p className="hover:text-[#7E00F3] xl:text-lg lg:text-lg dark:text-[#01b4bc] transition-colors cursor-pointer text-2xl text-[#1F1F1F]">Shipping Costs and Delivery Times</p>
                            <p className="hover:text-[#7E00F3] xl:text-lg lg:text-lg dark:text-[#01b4bc] transition-colors cursor-pointer text-2xl text-[#1F1F1F]">Help Centre</p>
                            <p className="hover:text-[#7E00F3] xl:text-lg lg:text-lg dark:text-[#01b4bc] transition-colors cursor-pointer text-2xl text-[#1F1F1F]">Vouchers</p>
                            <p className="hover:text-[#7E00F3] xl:text-lg lg:text-lg dark:text-[#01b4bc] transition-colors cursor-pointer text-2xl text-[#1F1F1F]">Contact Us</p>
                            <p className="hover:text-[#7E00F3] xl:text-lg lg:text-lg dark:text-[#01b4bc] transition-colors cursor-pointer text-2xl text-[#1F1F1F]">Walk-in Store</p>
                            <p className="hover:text-[#7E00F3] xl:text-lg lg:text-lg dark:text-[#01b4bc] transition-colors cursor-pointer text-2xl text-[#1F1F1F]">Service Overview</p>
                        </div>
                </div>
                <div className="bg-[#1F1F1F] dark:bg-gray-900  p-7 flex-wrap flex justify-between">
                    <div className="text-[#A8A8A8] py-2 leading-8">
                        <div className="flex gap-4 items-center py-5">
                            <FaFacebook className="text-[#E8E8E8] dark:text-[#01b4bc] cursor-pointer hover:text-blue-600" size={30} />
                            <FaYoutube className="text-[#E8E8E8] dark:text-[#01b4bc] cursor-pointer hover:text-[red]" size={30} />
                            <FaInstagram className="text-[#E8E8E8] dark:text-[#01b4bc] cursor-pointer  hover:bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg" size={30} />
                            <FaPinterest className="text-[#E8E8E8] dark:text-[#01b4bc] cursor-pointer hover:text-red-800"  size={30}/>
                            <AiFillTikTok className="text-[#E8E8E8] dark:text-[#01b4bc] cursor-pointer hover:text-red-600" size={30} /> 
                        </div>
                        <p className="cursor-pointer text-xl leading-10 dark:text-[#01b4bc] hover:text-[#E8E8E8] xl:text-lg lg:text-lg">Terms & Conditions / Imprint</p>
                        <p className="cursor-pointer text-xl leading-10 dark:text-[#01b4bc] hover:text-[#E8E8E8] xl:text-lg lg:text-lg">Privacy Policy</p>
                        <p className="cursor-pointer text-xl leading-10 dark:text-[#01b4bc] hover:text-[#E8E8E8] xl:text-lg lg:text-lg">Cookie Settings</p>
                        <p className="cursor-pointer text-xl leading-10 dark:text-[#01b4bc] hover:text-[#E8E8E8] xl:text-lg lg:text-lg">Right of Withdrawal</p>
                        <p className="cursor-pointer text-xl leading-10 dark:text-[#01b4bc] hover:text-[#E8E8E8] xl:text-lg lg:text-lg">Online Ordering Process</p>
                        <p className="cursor-pointer text-xl leading-10 dark:text-[#01b4bc] hover:text-[#E8E8E8] xl:text-lg lg:text-lg">Statutory Warranty Rights</p>
                        <p className="cursor-pointer text-xl leading-10 dark:text-[#01b4bc] hover:text-[#E8E8E8] xl:text-lg lg:text-lg">Accessibility Statement</p>
                    </div>
                    <div className="text-[#A8A8A8] py-4 leading-7">
                        <p className="cursor-pointer text-xl leading-10 dark:text-[#01b4bc] hover:text-[#E8E8E8] xl:text-lg lg:text-lg">About Us</p>
                        <p className="cursor-pointer text-xl leading-10 dark:text-[#01b4bc] hover:text-[#E8E8E8] xl:text-lg lg:text-lg">Jobs & Careers</p>
                        <p className="cursor-pointer text-xl leading-10 dark:text-[#01b4bc] hover:text-[#E8E8E8] xl:text-lg lg:text-lg">Blog</p>
                        <p className="cursor-pointer text-xl leading-10 dark:text-[#01b4bc] hover:text-[#E8E8E8] xl:text-lg lg:text-lg">Classfield Ads</p>
                        <p className="cursor-pointer text-xl leading-10 dark:text-[#01b4bc] hover:text-[#E8E8E8] xl:text-lg lg:text-lg">Whistleblower system</p>
                    </div>
                    <div className="py-4 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-4 py-4">
                        <img src={appstoreImg} className="border border-gray-400 rounded w-37.5"  alt="Appstore download img"/>
                        <img src={googlePlayImg} className="border border-gray-400 rounded w-37.5" alt="Google Play download img"/>
                    </div>
                        <div>
                            <p className="text-[#A8A8A8] dark:text-[#01b4bc] text-xl xl:text-lg lg:text-lg">&copy; 1996-{new Date().getFullYear()} Thomann GmbH.</p>
                            <p className="italic text-[#A8A8A8] dark:text-[#01b4bc] text-xl font-semibold xl:text-lg lg:text-lg">Thomann loves you, beacuse you rock!</p>
                        </div>
                    </div>
                </div>
        </footer>
    </>
  )
}

export default Footer