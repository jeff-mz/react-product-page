import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand " href="#">
          <img src={logo} height="15" alt="MDB Logo" loading="lazy" />
        </a>

        {/* desktop nav */}
        <div className="collapse navbar-collapse d-sm-none mt-1">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
                Collection
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* user dashboard */}
        <div
          className="d-flex justify-content-around"
          style={{ width: "100px" }}
        >
          <img src={cart} alt="shopping cart" />
          <img
            src={avatar}
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </div>

        {/* mobile nav  */}
        <div className="d-md-none w-100">
          {" "}
          <ul className="navbar-nav me-auto  d-sm-flex flex-row justify-content-evenly align-items-center my-2 ">
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
                Collection
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
