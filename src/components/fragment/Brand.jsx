import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/img/music-air-logo.png"

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/home"}>
                    <h1>                        
                        <img src={Logo} width={"70px"} alt="Logo"/>
                    </h1>
                </Link>
            </div>
        );
    }
}

export default Brand;