import { useEffect, useState } from "react";
import { useThomman } from "../context/DataContext";
import Loader from "../components/Loader";
import Error from "./Error";
import { IoClose } from "react-icons/io5";
import { deleteProductById, editProductById, postNewProduct } from "../services/ThommanServices";
import toast from "react-hot-toast";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";

function Admin() {
  const { products, loader, error, setProducts } = useThomman();
  const [popUp, setPopUp] = useState({ status: false, method: "post" });
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
    subcategory: "",
    brand: "",
    price: "",
  });

  function handleValues(e) {
    setNewProduct({...newProduct, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  if (loader) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  function handlePost() {
    if (
      !newProduct.name ||
      !newProduct.image ||
      !newProduct.description ||
      !newProduct.category ||
      !newProduct.subcategory ||
      !newProduct.brand ||
      !newProduct.price
    )
      return toast.error("Please fill all input fields!");

    if (popUp.method === "post") {
      postNewProduct(newProduct)
        .then((item) => {
          console.log(item);
          toast.success("Product create successfully !");
          setPopUp({ method: "post", status: false });
          setNewProduct({
            name: "",
            image: "",
            description: "",
            category: "",
            subcategory: "",
            brand: "",
            price: "",
          });
          setProducts([...products, item]);
        })
        .catch((err) => console.error(err));
    } else if (popUp.method === "edit") {
      editProductById(newProduct.id, newProduct)
        .then((res) => {
          console.log(res);
          toast.success("Product edit successfully !");
          setPopUp({ method: "edit" ,status: false });
          setNewProduct({
            name: "",
            image: "",
            description: "",
            category: "",
            subcategory: "",
            brand: "",
            price: "",
          });
          setProducts(
            products.map((item) => ( item.id === res.id ? res : item)),
          );
        })
        .catch((err) => console.error(err));
    }
  }

  function handleInps(id) {
    setPopUp({ status: true, method: "edit" });
    const findedProduct = products.find((item) => item.id === id);
    setNewProduct(findedProduct);
  };

  function handleDelete(id) {
    deleteProductById(id)
    .then(item => {
      console.log(item);
      toast.success("Product deleted");
      setProducts(products.filter(item => item.id !== id))
    })
  };

  return (
    <>
      <div
        className={`${popUp.status ? "flex" : "hidden"} inset-0 bg-black/50 flex fixed justify-center items-center`}
      >
        <div className="bg-white flex flex-col gap-5 w-150 p-5 rounded">
          <div className="flex justify-between items-center">
            <h1 className="text-center text-[2rem] capitalize">
              {popUp.method === "post" ? "add new product" : "edit product"}
            </h1>
            <button
              onClick={() => setPopUp({status: false })}
              className="cursor-pointer"
            >
              <IoClose size={35} />
            </button>
          </div>
          <input
            onChange={handleValues}
            className="border p-3 rounded w-full"
            name="name"
            placeholder="Name"
            type="text"
          />
          <input
            onChange={handleValues}
            className="border p-3 rounded w-full"
            name="image"
            placeholder="Image"
            type="text"
          />
          <input
            onChange={handleValues}
            className="border p-3 rounded w-full"
            name="description"
            placeholder="Description"
            type="text"
          />
          <input
            onChange={handleValues}
            className="border p-3 rounded w-full"
            name="category"
            placeholder="Category"
            type="text"
          />
          <input
            onChange={handleValues}
            className="border p-3 rounded w-full"
            name="subcategory"
            placeholder="SubCategory"
            type="text"
          />
          <input
            onChange={handleValues}
            className="border p-3 rounded w-full"
            name="brand"
            placeholder="Brand"
            type="text"
          />
          <input
            onChange={handleValues}
            className="border p-3 rounded w-full"
            name="price"
            placeholder="Amount"
            type="text"
          />
          <button
            onClick={handlePost}
            className="capitalize bg-black text-white p-3 rounded cursor-pointer"
          >
            {popUp.method === "post" ? "create new product" : "edit product"}
          </button>
        </div>
      </div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="py-5">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Admin Panel
          </h2>
          <button
            onClick={() => setPopUp({...popUp,method: "post", status: true })}
            className="capitalize cursor-pointer p-3 rounded bg-black text-white"
          >
            add new product
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Image</th>
                <th className="p-3">Description</th>
                <th className="p-3">Category</th>
                <th className="p-3">SubCategory</th>
                <th className="p-3 text-right">Brand</th>
                <th className="p-3 text-right">Amount</th>
                <th className="p-3">Operations</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{item.name}</p>
                  </td>
                  <td className="p-3 w-30">
                    {item.image && (
                      <img
                        src={item.image || "/no-image.png"}
                        alt="product image"
                      />
                    )}
                  </td>
                  <td className="p-3">
                    <p>{item.description}</p>
                  </td>
                  <td className="p-3">
                    <p>{item.category}</p>
                  </td>
                  <td className="p-3">
                    <p>{item.subcategory}</p>
                  </td>
                  <td className="p-3">
                    <p>{item.brand}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>${item.price}</p>
                  </td>
                  <td className="p-3 text-right">
                   <div className="flex items-center gap-2">
                     <span
                       onClick={() => handleDelete(item.id)}
                       className="cursor-pointer"
                     >
                         <RiDeleteBin6Line size={30} />
                     </span>
                     <span
                       onClick={() => handleInps(item.id)}
                       className="cursor-pointer"
                     >
                       <LiaEdit size={30} />
                     </span>
                   </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Admin;
