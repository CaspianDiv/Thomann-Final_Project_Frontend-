import { useState } from "react";
import Main from "./components/Main";
import Error from "./pages/Error";
import { Routes, Route, Navigate } from "react-router-dom";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";
import Admin from "./pages/Admin";
import Favoruite from "./pages/Favoruite";
import UserDashboard, { PrivateRoute } from "./pages/UserDashboard";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";



function App() {


  const [status, setStatus] = useState(false);
  const [searchInpValue, setSearchValue] = useState('');
  

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Navigate to={"/Thomann"} />} />

        <Route path="/" element={
              <MainLayout 
                searchInpValue={searchInpValue}
                setSearchValue={setSearchValue}
                setStatus={setStatus}
                status={status}
          />}>

          <Route path="/Thomann">
            <Route index element={  
                    <Main
                      searchInpValue={searchInpValue}
                      status={status}
                    /> 
                      } />

                <Route path=":category" element={<Main  searchInpValue={searchInpValue} status={status} />} />
                
              </Route>

                <Route path="/details">
                  <Route path=":brand" element={<Detail />} />
                </Route>

                <Route path="/Basket">
                      <Route index element={<Basket />} />
                      <Route path="details/:brand" element={<Detail  />} />
                </Route>

                <Route path="/WishList">
                      <Route index element={<Favoruite /> } />
                      <Route path=":brand" element={<Favoruite  />} />
                </Route>
                
                <Route path="/register">
                      <Route path="sign-up" element={<SignUp />} />
                      <Route path="sign-in" element={<Login />} />
                </Route>
                <Route path="/userDashboard">
                  <Route 
                  index
                   element={

                    <PrivateRoute>
                      <UserDashboard />
                    </PrivateRoute>
                   } 
                    
                   />
                </Route>
          </Route>
              
              <Route path="/admin" element={<AdminLayout />}>
                      <Route index element={<Admin />} />
              </Route>


            <Route path="*" element={<Error />} />  

      </Routes>

    </>
  )
}

export default App