import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./shop.module.css";
import { fetchProducts, selectAllProducts } from "../../redux/products/productSlice";
import Product from "./Product";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import {
  updateSelectedUserCard,
  updateSelectedUserCardMinus,
  updateEyeCard
  // updateUser,
  // deleteSelectedUserWishlist,
  // deleteSelectedUserCard,
} from "./../../redux/userSlice/userSlice";
const Shop = () => {
  const allProducts = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const [colors, setColors] = useState(["white", "black", "red", "blue"]);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(null);
  const [color, setColor] = useState("");
  const [prices, setPrices] = useState([0, 100, 500, 1000]);
  const [preAndNext, setPreAndNext] = useState([]);
  const [close, setClose] = useState(false);
  const [count, setCount] = useState(1);
  const [eye, setEye] = useState({});

  const setHeartModule = (product) => {
    setEye(product);
    setClose(!close);
  };
console.log('====================================');
console.log(eye);
console.log('====================================');
  const minCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else if (count == 1) {
      setHeartModule();
    }
  };

  const plusEyePro = () => {
    const finded = allProducts.find((item) => item.id === eye.id);
   
    console.log("====================================");
    console.log(finded);
    console.log("====================================");
    dispatch(updateEyeCard(finded));
  };
  const minusEyePro = () => {
    const finded = allProducts.find((item) => item.id === eye.id);
    dispatch(updateSelectedUserCardMinus(finded));
    console.log("====================================");
    console.log(finded);
    console.log("====================================");
  };

  const priceFilterOptions = prices.map((price, index) => {
    if (index !== prices.length - 1) {
      return (
        <option key={index} value={price}>
          {price}-{prices[index + 1]}
        </option>
      );
    }
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className={`${styles.shopContainer}`}>
          <div className={styles.shopHeader}>
            <div>
              <ul className={styles.axilbreadcrumb}>
                <li className={styles.axilbreadcrumbitem}>
                  <a href="/">Home</a>
                </li>
                <li className={styles.separator}></li>
                <li className={styles.axilbreadcrumbitemactive} aria-current="page">
                  My Account
                </li>
              </ul>
              <h1>Explore All Products</h1>
            </div>
            <div>
              <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-45.png" alt="" />
            </div>
          </div>

          <div className={styles.shopMain}>
            <div className={styles.shopFilterRow}>
              <div>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option>Categories</option>
                  {allProducts.map((product) => (
                    <option key={product.id} value={product.category}>
                      {product.category}
                    </option>
                  ))}
                </select>

                {/* <select
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                >
                  <option>Color</option>
                  {colors.map((color) => (
                    <option>{color}</option>
                  ))}
                </select> */}
                {/* 
              price filter 
            */}
                <select
                  value={price === null ? 0 : price}
                  onChange={(e) => {
                    setPrice((pre) => {
                      setPreAndNext([parseInt(e.target.value), prices[prices.indexOf(parseInt(e.target.value)) + 1]]);
                      return parseInt(e.target.value);
                    });
                  }}
                >
                  {priceFilterOptions}
                </select>
              </div>

              {/* <select>
                <option>Sort By Name</option>
                <option>Sort By Price</option>
              </select> */}
            </div>

            <div className={styles.shopProducts}>
              {preAndNext.length === 0
                ? allProducts.map((product) => {
                    if (category === "Categories" || (!category && product.category !== category)) {
                      return (
                        <Product product={product} className={styles.shopProductCard} setHeartModule={setHeartModule} />
                      );
                    } else if (category && product.category === category) {
                      return (
                        <Product product={product} className={styles.shopProductCard} setHeartModule={setHeartModule} />
                      );
                    }
                  })
                : allProducts.map((product) => {
                    if (
                      category === "Categories" ||
                      (!category &&
                        color.length === 0 &&
                        product.price >= preAndNext[0] &&
                        product.price <= preAndNext[1])
                    ) {
                      return (
                        <Product product={product} className={styles.shopProductCard} setHeartModule={setHeartModule} />
                      );
                    } else if (
                      category.length !== 0 &&
                      category !== "Categories" &&
                      product.category === category &&
                      product.price > preAndNext[0] &&
                      product.price < preAndNext[1]
                    ) {
                      return (
                        <Product product={product} className={styles.shopProductCard} setHeartModule={setHeartModule} />
                      );
                    }
                  })}
            </div>
          </div>
        </div>
      </div>
      {eye ? (
        <div className={`${styles.shopModule} ${close ? `${styles.moduleNone}` : ""} `}>
          <div className="container">
            <div className={styles.Modulex}>
              <div onClick={() => setHeartModule()} className={styles.Modulei}>
                <i class="fa-solid fa-x"></i>
              </div>
            </div>
            <div className={`${styles.Modulerow} row `}>
              <div className="col-6 col-xs-12">
                <div className={styles.shopModuleImg}><img src={eye.firstImg} alt="" /></div>
              </div>
              <div className="col-6 col-xs-12">
                <div className={styles.shopModuleLetter}>
                  <p>{eye.name}</p>
                  <p>${eye.price}</p>
                  <ul>
                    <li>
                      {" "}
                      <i class="fa-solid fa-check"></i> In stock
                    </li>
                    <li>
                      {" "}
                      <i class="fa-solid fa-check"></i> Free delivery available
                    </li>
                    <li>
                      {" "}
                      <i class="fa-solid fa-check"></i> Sales 30% Off Use Code: MOTIVE30
                    </li>
                  </ul>
                  <p>
                    In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna.
                    Pellentesque sagittis dictum libero, eu dignissim tellus.
                  </p>
                  <div className={styles.shopModuleColors}>
                    <span>Colors :</span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className={styles.shopModuleButton}>
                    <div className={styles.ButtonCount}>
                      <p onClick={() => minusEyePro()}>-</p>
                      <p>{ 0} </p>
                      <p onClick={() => plusEyePro()}>+</p>
                    </div>
                    <button className={styles.Button1}>Add to Card</button>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <Footer />
    </>
  );
};

export default Shop;
