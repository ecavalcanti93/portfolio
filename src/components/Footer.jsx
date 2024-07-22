import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            @{new Date().getFullYear()} - Created by Eric Cavalcanti. All right reserved.
        </footer>
    )
}

export default Footer;