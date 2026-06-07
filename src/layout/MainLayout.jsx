import {  Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useThomman } from "../context/DataContext";
import Loader from "../components/Loader";

function RootLayout({searchInpValue , setSearchValue , setStatus , status}) {

  const {products,loader} = useThomman();

  if(!products || loader) return <Loader />

  return (
    <>
          <Header
          searchInpValue={searchInpValue}
          setSearchValue={setSearchValue}
          setStatus={setStatus}
          status={status}
      />
      
          <Outlet />
        <Footer />
    </>
  )
}

export default RootLayout
