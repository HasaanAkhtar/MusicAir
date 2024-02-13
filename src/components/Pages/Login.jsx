import React from "react";
import HeadPhone from '../assets/img/frontpagelogo.PNG';
import './css/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">MusicAir</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Presented by Soundies'</h1>
                            <h3>"Music is the moonlight in the gloomy night of life." </h3>
                            <p> -John Paul Friedrich Richter </p>
                            <Link to={"/home"} className="btn">
                                Proceed to the music world?
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;