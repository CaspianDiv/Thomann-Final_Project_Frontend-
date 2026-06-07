import {  useEffect, useState } from "react";
import {  useThomman } from "../context/DataContext";
import emptyImg from "../assets/empty_favoruite.png";
import Error from "./Error";
import { PiShoppingCartLight, PiTrash } from "react-icons/pi";
import toast from "react-hot-toast";

function Favoruite() {
  const [favElement, setFavElement] = useState([]);

  const { products } = useThomman();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favList")) || [];
    setFavElement(data);
  }, []);

  if (!products) {
    return <Error />;
  }

  const updateLocalStorageFav = (newFav) => {
    localStorage.setItem("favList", JSON.stringify(newFav));
    setFavElement(newFav);

    window.dispatchEvent(new Event("favListUpdated"));
  };

  const handleRemoveFavList = (id) => {
    const updatedFav = favElement.filter((item) => item.id !== id);
    updateLocalStorageFav(updatedFav);

    toast.error("Wishlist item deleted !");
  };

  const handleAddToBasket = (id) => {
    const product = favElement.find((basketItem) => basketItem.id === id);

    if (!product) return;

    const existingBasket = JSON.parse(localStorage.getItem("basketList")) || [];

    const existingItemIndex = existingBasket.findIndex(
      (basketItem) => basketItem.id === id
    );

    if (existingItemIndex !== -1) {
      existingBasket[existingItemIndex].quantity =
        (existingBasket[existingItemIndex].quantity || 1) + 1;
    } else {
      existingBasket.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem("basketList", JSON.stringify(existingBasket));

    window.dispatchEvent(new Event("basketUpdated"));
  };

  return (
    <>
      <div className="dark:bg-gray-90">
        <h1 className="font-bold text-4xl underline underline-offset-12 p-5 dark:bg-gray-800 dark:text-[#01b4bc]">
          My Wishlist
        </h1>
        {!favElement || favElement.length === 0 ? (
          <div className="p-5 dark:bg-gray-800">
            <div className="p-5 my-10">
              <img src={emptyImg} className="m-auto rounded-[20px]" alt="" />
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-5 justify-center cursor-pointer dark:bg-gray-900">
            {favElement.map((item, i) => (
              <div className="border dark:border-[#01b4bc] dark:text-[#01b4bc] rounded p-5 my-20" key={i}>
                <div>
                  <img src={item.image} className="w-50 m-auto" alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-[1.2rem]">{item.name}</p>
                  <p className="text-[1.2rem]">Rating : {item.rating} star</p>
                  <p className="text-[1.2rem] text-green-400">
                    {item.availability}
                  </p>
                </div>
                <div className="gap-3 flex justify-end py-3">
                  <button className="cursor-pointer">
                    <PiTrash
                      onClick={() => handleRemoveFavList(item.id)}
                      size={30}
                    />
                  </button>
                  <button className="cursor-pointer">
                    <PiShoppingCartLight
                      onClick={() => handleAddToBasket(item.id)}
                      size={30}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Favoruite;
