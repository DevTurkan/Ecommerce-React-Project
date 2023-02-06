import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateSelectedUserWishlist,
  updateSelectedUserCard,
  updateUser,
} from "./../../redux/userSlice/userSlice";
import "./header.css";
import navlogo from "../../assets/image/logo.png";

function Header() {
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const dispatch = useDispatch();
  const addClass = useRef();
  const [user, setUser] = useState(false)
  const [length, setLength] = useState(false);


  function changeBars() {
    setLength(!length);
    addClass.current.classList.toggle("change");
  }

  const openUser = () => {
    setUser(!user)
  }

  // search Input Filer;



  const handleWishList = (product) => {
    if (selectedUser) {
      dispatch(updateSelectedUserWishlist(product));
      dispatch(updateUser({ id: selectedUser.id, user: selectedUser }));
    } else {
      alert("Please Login First");
    }
  };

  const handleAddToCart = (product) => {
    if (selectedUser) {
      dispatch(updateSelectedUserCard(product));
      dispatch(updateUser({ id: selectedUser.id, user: selectedUser }));
    } else {
      alert("Please Login First");
    }
  };


  const [close, setClose] = useState(false)

  const [data, setData] = useState([])

  const [search, setSearch] = useState('')

  const [result, setResult] = useState([])


  const setHeartModule = () => {

    setClose(!close)
  }

  // console.log(search);

  useEffect(() => {

    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(e => setData(e))

    // console.log(data);
  }, [])

  useEffect(() => {
    if (search) {

      setResult(data.filter((e) => e.name.toLowerCase().includes(search.toLowerCase())))
    }
    else {
      setResult([])
    }

    console.log(result.length);
  }, [search])





  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="nav-img">
              <img src={navlogo} alt="" />
            </div>
            {/* <div className="nav-menu"> */}
            <div className={`nav-menu ${length ? "length" : ""}`}>
              <ul onClick={() => changeBars()}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/aboutUs">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contactUs">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="nav-stic">
              <ul>
                <li onClick={() => setHeartModule()} ><a><i className="fa-solid fa-magnifying-glass"></i></a></li>
                <li>
                  {
                    !selectedUser.wishlist ? (<Link to="/signIn">
                    <i className="fa-regular fa-heart"></i>
                  </Link>): <Link to="/whishList">
                    <i className="fa-regular fa-heart"></i>
                  </Link>
                  }
                  
                </li>
                <li>
                  {
                    !selectedUser.card ? (<Link to="/signIn">
                    <i className="fa-solid fa-cart-plus"></i>
                  </Link>):<Link to="/card">
                    <i className="fa-solid fa-cart-plus"></i>
                  </Link>
                  }
                </li>
                <li onClick={() => openUser()} className={`${user ? "none" : ""}`}  ><a><i className="fa-regular fa-user"></i></a>
                  <ul >
                    <li><Link to="/signIn" ><i className="fa-regular fa-user"></i>My Account</Link></li>
                    <li><Link to="/signUp" ><i className="fa-regular fa-address-card"></i>Register Here</Link></li>
                    <Link to="/signIn" ><button >Login</button></Link>
                  </ul>

                </li>

                {/* <li>
                  <Link to="/">
                    <i className="fa-regular fa-user"></i>
                  </Link>
                </li> */}
                <li>
                  <Link to="/newPage">
                    <i className="fa-solid fa-calendar-plus"></i>
                  </Link>
                </li>
              </ul>
              <div ref={addClass} onClick={() => changeBars()} className="navBars">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={`headerModule  ${close ? "Modulenone" : ""} `} >
        <div className="headerModulex">
          <i onClick={() => setHeartModule()} className="fa-solid fa-x"></i>
        </div>
        <div className="headerModuleInput">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Write Something...' />
        </div>

        <div className="headerModuleFind">
          <p> {result.length} Result Find</p>
          <Link to="/shop" >View All</Link>
          {/* <p>View All</p> */}
        </div>
        <div className="headModuleProducts">
          {
            result.map((index, key) => (
              <div key={key} className="headModuleProduct">
                <div className="row">
                  <div className="col-2 col-sm-3 col-xs-5">
                    <div className="ProductsImg">
                      <img src={`${index.firstImg}`} alt="" />
                    </div>
                  </div>
                  <div className="col-10 col-sm-9 col-xs-12">
                    <div className="ProductsLetter">
                      <div className="ProLetter1">
                        <p>{index.name}</p>
                        <p>{index.price}$</p>
                      </div>
                      <div className="ProLetter2">
                        <p onClick={()=>handleAddToCart(index)}><i className="fa-solid fa-cart-shopping"></i></p>
                        <p onClick={()=>handleWishList(index)}><i className="fa-solid fa-heart"></i></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ))
          }



        </div>
      </div>


    </>
  );
}

export default Header;
