import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./Auth/ProtectRoute";
import LayoutLoader from "./Components/Layout/Loaders";
// import PageNotfound from './Pages/PageNotfound';
// for dynamic loading of the import statements
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Chat = lazy(() => import("./Pages/Chat"));
const Groups = lazy(() => import("./Pages/Groups"));
const Notfound = lazy(() => import("./Pages/PageNotfound"));
const user = true;
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LayoutLoader/>}>
          <Routes>
            <Route element={<ProtectRoute user={user} />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/chat/:chatId" element={<Chat />}></Route>
              <Route path="/groups" element={<Groups />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>

            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
