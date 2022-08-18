import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";
function Navbar() {
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <l1 className="navbarListItem">
            <ExploreIcon fill="2c2c2c" width="36px" height="36px" />
            <p>Explore</p>
          </l1>
          <l1 className="navbarListItem">
            <OfferIcon fill="2c2c2c" width="36px" height="36px" />
            <p>Offer</p>
          </l1>
          <l1 className="navbarListItem">
            <PersonOutlineIcon fill="2c2c2c" width="36px" height="36px" />
            <p>Profile</p>
          </l1>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
