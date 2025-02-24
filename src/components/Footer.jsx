import React from "react";

const Footer = () => {
  return (
    <footer className="text-xs h-8 bg-blackSpecial text-center">
      <div>
        @{new Date().getFullYear()} - Created by Eric Cavalcanti. All right
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
