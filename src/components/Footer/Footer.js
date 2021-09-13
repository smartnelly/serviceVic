import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <SocialIcon
        url="https://www.linkedin.com/in/nelly-dai/"
        network="linkedin"
        fgColor="white"
        bgColor="black"
      />
      <SocialIcon
        url="https://github.com/smartnelly"
        network="github"
        fgColor="white"
        bgColor="black"
      />
      <SocialIcon
        url="https://smartnelly.github.io/AboutMe/"
        network="mailto"
        fgColor="white"
        bgColor="black"
      />
    </div>
  );
}

export default Footer;
