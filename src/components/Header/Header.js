import { Link } from "react-router-dom";
import "./Header.css";

import App from './../../App';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
         Quiz App
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
