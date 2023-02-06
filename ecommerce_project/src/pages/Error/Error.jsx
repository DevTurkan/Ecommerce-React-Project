import React from 'react'
import e from "./error.module.scss"
import errorImg from "../../assets/image/404-img.png"
import {useNavigate} from "react-router-dom"

function Error() {
    const navigate = useNavigate();

    const goTo =()=>{
        navigate("/home")
    }

    return (
        <>
            <div className={e.error}>
                <div className="container">
                    <diw className="row">
                        <div className="col-6 col-xs-12 col-sm-12">
                            <div className={e.errorL}>
                                <i class="fa-solid fa-exclamation"></i>
                                <p>Oops! Somthing's missing.</p>
                            </div>
                            <div className={e.errorL2}>
                                <p>Page not found</p>
                                <p>It seems like we dont find what you searched. The page you were looking for doesn't exist, isn't available loading incorrectly.</p>
                            </div>
                            <button onClick={() => goTo()} >Back To Home <i class="fa-solid fa-right-long"></i></button>
                        </div>
                        <div className="col-6 col-sm-12 col-xs-12">
                            <div className={e.errorImg}>
                                <img src={errorImg} alt="" />
                            </div>
                        </div>
                    </diw>
                </div>
            </div>
        </>
    )
}

export default Error