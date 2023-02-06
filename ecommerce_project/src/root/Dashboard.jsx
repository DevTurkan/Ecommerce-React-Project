import React from "react";
import { Routes, Route} from "react-router-dom";
import SignIn from "../pages/LogIn/SignIn";
import SignUp from "../pages/LogIn/SignUp";
import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import ForgotPassword from "../pages/LogIn/ForgotPassword";
import ResetPassword from "../pages/LogIn/ResetPassword";
import WhishList from "../pages/WhishList/WhishList";
import Error from "../pages/Error/Error";
import NewPage from "../pages/newPage/NewPage";
import ScrollToTop from "../pages/ScroolToTop/ScrollToTop";
import Card from "../pages/Card/Card";


const Dashboard = () => {
  return (
    <div>

      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/blog" element={<Blog />} />


        {/* FORM SIGN IN AND SIGN UP ROUTINGS */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />

        {/* FORGOT PASSWORD ROUTING */}
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />

        <Route path="/whishList" element={<WhishList />} />
        <Route path="/newPage" element={<NewPage />} />
        <Route path="/card" element={<Card />} />
        {/* ERROR NOT FOUND 404 */}
         <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
