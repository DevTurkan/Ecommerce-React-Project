import React, { useState } from "react";
import style from "./shop.module.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSelectedUserWishlist,
  updateSelectedUserCard,
  selectSelectedUser,
  updateUser,
} from "./../../redux/userSlice/userSlice";

const Product = ({ product,setHeartModule }) => {
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const dispatch = useDispatch();


  const handleWishList = () => {
    if (selectedUser) {
      dispatch(updateSelectedUserWishlist(product));
      dispatch(updateUser({ id: selectedUser.id, user: selectedUser }));
    } else {
      alert("Please Login First");
    }
  };

  const handleAddToCart = () => {
    if (selectedUser) {
      dispatch(updateSelectedUserCard(product));
      dispatch(updateUser({ id: selectedUser.id, user: selectedUser }));
    } else {
      alert("Please Login First");
    }
  };

  return (
    <div>
      <div className={style.productCardHeader}>
        <img src={product.firstImg} alt="product" />
        <div className={style.content}>
          <div>
            <button onClick={handleWishList}>
              <AiOutlineHeart />
            </button>
            <button onClick={handleAddToCart}>Add to Card</button>
            <button onClick={()=> setHeartModule(product)}>
              <FaRegEye />
            </button>
          </div>
        </div>
      </div>
      <div className={style.productCardMain}>
        <Link>
          <h5>{product.name}</h5>
        </Link>
        <div>
          <span>${product.price}</span>
          <span>{product.discountPercent ? product.price * product.discountPercent : null}</span>
        </div>
      </div>
    </div>
    
  );
};

export default Product;
