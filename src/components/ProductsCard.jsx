import { useState } from "react";
import toast from "react-hot-toast";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { Link } from "react-router";

function ProductsCard({item}) {
  
  const [statusFav , setStatusFav] = useState(false);
  
  const {name, category, brand, image, price, currency_symbl, rating, availability , id} = item;

  const handleAddToBasket = () => {

    const existingBasket = JSON.parse(localStorage.getItem("basketList")) || [];

    const existingItemIndex = existingBasket.findIndex(basketItem => basketItem.id === id);

    if (existingItemIndex !== -1) {
        existingBasket[existingItemIndex].quantity = (existingBasket[existingItemIndex].quantity || 1) + 1
    } else {
        existingBasket.push({
          ...item,
          quantity: 1
        })
    };

    localStorage.setItem("basketList", JSON.stringify(existingBasket));

    window.dispatchEvent(new Event("basketUpdated"));

    toast.success(`${brand} added to Basket ! :)`)
    
  };


  const handleAddToFav = () => {
    setStatusFav(!statusFav);

    const existingFavList = JSON.parse(localStorage.getItem("favList")) || [];

    const existingFavIndex = existingFavList.findIndex(favItem => favItem.id === id);

    if (existingFavIndex !== -1) {
      existingFavList[existingFavIndex].quantity = (existingFavList[existingFavIndex].quantity || 1) + 1
    }else{
      existingFavList.push({
        ...item,
        quantity: 1
      })
    };

    localStorage.setItem("favList", JSON.stringify(existingFavList));

    window.dispatchEvent(new Event("favListUpdated"));  

    toast.success(`${brand} added to WishList ! :)`)

  };

  const handleRemoveFav = () => {
    setStatusFav(false);
  };

  
    return (
      <>
        <div className="max-w-xs bg-white border relative border-gray-200 p-3 cursor-pointer rounded-xl hover:shadow-md dark:bg-gray-900 dark:border-gray-700">
            <div className="absolute right-5 top-5">
             {  
            statusFav ?
                <FaHeart onClick={handleRemoveFav}  size={30} /> :
                 <CiHeart onClick={handleAddToFav} size={40} /> 
               }
            </div>
            <div className="p-10 bg-white">
               <div className="hover:scale-105 transition-all duration-300">
                  <img className="rounded-t-lg w-full" src={image} alt={name} />
               </div>
            </div>
            <div>
                <Link to={`/details/${brand}`}>
                  <h5 className="mb-2 text-[1.8rem] lg:text-[1.2rem] font-semibold tracking-tight dark:text-[#01b4bc] text-gray-900 py-3 px-3 hover:underline">{name}</h5>
                </Link>
                <p className="mb-3 font-normal px-3 text-gray-700 dark:text-[#01b4bc] xl:text-[1.2rem] lg:text-[1.2rem] whitespace-nowrap text-ellipsis mask-ellipse overflow-clip text-2xl"><span className="font-semibold">Category :</span> {category}</p>
               <div className="flex items-center justify-between px-5 py-4">
                 <div className="flex flex-col gap-5">
                    <p className="font-semibold text-4xl lg:text-[1.5rem] xl:text-[1.5rem] dark:text-[#01b4bc]">{currency_symbl}{price}</p>
                    <p className="dark:text-[#01b4bc] text-2xl lg:text-[1.2rem] xl:text-[1.2rem]"><span className="font-semibold dark:text-[#1ad1da] text-2xl lg:text-[1.5rem] xl:text-[1.2rem]">Rating : </span>{rating} stars</p>
                    <p className="text-green-600 font-semibold text-2xl dark:text-[#01b4bc]">{availability}</p>
                 </div>
                    <RiShoppingBasketLine
                      onClick={handleAddToBasket}
                       className="dark:text-[#01b4bc] hover:text-violet-600 transition-colors cursor-pointer" 
                       size={35} 
                     />
               </div>
            </div>
        </div>
      </>
    )
  };

export default ProductsCard