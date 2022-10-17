import React from "react";
import {AiOutlineSearch,AiOutlineUser} from "react-icons/ai";
// import {BsHandbag} from "react-icons/bs";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Navbar=()=>{
const [itemCount, setItemCount] = React.useState(1);
    return(
        <div>
            <nav className="navbar navbar-expand-sm">
        <a className="navbar-brand" href="#">
            <img className="logo" src="data:image/png;base64,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" alt="img" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Men <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Women</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Kids</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Home & Living</a>
            </li>
            </ul>
        </div>
        <div className="logos">
            <ul>
                    <li className="nav-item">
                        <AiOutlineSearch/>
                    </li>
                    <li className="nav-item">
                        <AiOutlineUser/>
                    </li>
                    <li className="nav-item">
                        {/* <BsHandbag/> */}
                        <Badge color="secondary" badgeContent={itemCount}>
		<ShoppingCartIcon />{" "}
		</Badge>
                    </li>
                    </ul>
                    </div>
         
      </nav>
        </div>
    )
}
export default Navbar;