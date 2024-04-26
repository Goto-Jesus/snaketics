import { Button } from "../UI/Button";
import { Navigation } from "../UI/Navigation";
import logo from "../../assets/images/icons/logo.svg";

import "./Header.scss";

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="header__navigation">
        <Navigation />

        <Button>Download App</Button>
      </div>
    </div>
  );
};
