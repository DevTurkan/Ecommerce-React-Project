import React, { useState,useEffect } from "react";
import w from "./card.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSelectedUserCard,
  updateSelectedUserCardMinus,
  updateUser,
  deleteSelectedUserWishlist,
  deleteSelectedUserCard,
} from "./../../redux/userSlice/userSlice";

function Card() {
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const dispatch = useDispatch();
  const [card, setcard] = useState(selectedUser.card);
  const [cardTotal, setCardTotal] = useState(0);
  console.log(card, selectedUser.card);

  const deleteProductCard = (product) => {
    if (selectedUser) {
      dispatch(deleteSelectedUserCard(product));
    } else {
      alert("Please Login First");
    }
  };
  useEffect(() => {
    setcard(selectedUser.card);
  }, [selectedUser.card]);

  const increase = (item) => {
    const findedItem = selectedUser.card.find((product) => product.id === item.id);
    dispatch(updateSelectedUserCard(findedItem));
    dispatch(updateUser({ id: selectedUser.id, user: selectedUser }));
  };
  const decrease = (item) => {
    const findedItem = selectedUser.card.find((product) => product.id === item.id);
    if (findedItem.quantity > 0) {
      dispatch(updateSelectedUserCardMinus(findedItem));
      dispatch(updateUser({ id: selectedUser.id, user: selectedUser }));
    }
  };

  // const dispatch = useDispatch();

  // const handleAddToCart = (product) => {
  //   if (selectedUser) {
  //     dispatch(updateSelectedUserCard(product));
  //   } else {
  //     alert("Please Login First");
  //   }
  // };

  return (
    <>
      <Header />
      <div className="container">
        <div className={w.container}>
          <div className={w.header}>
            <h1>Your Cart</h1>
          </div>
          <table className={w.table}>
            <thead>
              <tr className={w.table_row}>
                <th></th>
                <th>Product</th>
                <th></th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {card.map((item) => (
                <tr className={w.table_row}>
                  <td>
                    <i class="fa-solid fa-xmark" onClick={() => deleteProductCard(item)}></i>
                  </td>
                  <td>
                    <img src={item.firstImg} alt="product" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td className={w.counter}>
                    <span onClick={() => increase(item)}>+</span>
                    <span>{item.quantity}</span>
                    <span onClick={() => decrease(item)}>-</span>
                  </td>
                  <td>${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className={w.table_resp}>
            {card.map((item) => (
              <div className={w.table_cont_resp}>
                <div>
                  <img src={item.firstImg} alt="product" />
                </div>
                <div className={w.table_main_resp}>
                  <div>
                    <p>{item.name}</p>
                    <i class="fa-solid fa-xmark" onClick={() => deleteProductCard(item)}></i>
                  </div>
                  <div>
                    <p>Price:</p>
                    <p>${item.price}</p>
                  </div>
                  <div>
                    <p>Qty</p>
                    <p className={w.counter_resp}>
                      <span onClick={() => increase(item)}>+</span>
                      <span>{item.quantity}</span>
                      <span onClick={() => decrease(item)}>-</span>
                    </p>
                  </div>
                  <div>
                    <p>Subtotal</p>
                    <p>${(item.quantity * item.price).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
       
      </div>

      <Footer />
    </>
  );
}

export default Card;