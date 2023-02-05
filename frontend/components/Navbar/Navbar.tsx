import Link from "next/link";
import classes from "./Navbar.module.css";

import { Web3Button } from "@web3modal/react";

const Navbar = () => {

    return (
      <div className={classes.navbar}>
        <div className={classes.logo}>
          {/*<Image src="text.png" alt="App logo"/>*/}
          <h1>Appname</h1>
        </div>
        <div className={classes.links}>
          <Link href="/upload" className={classes.link}>
            <h2>
              <i className="fa-sharp fa-solid fa-plus"></i>
            </h2>
          </Link>
          <Link href="#" className={classes.link}>
            <h2>
              <i className="fa-regular fa-bell"></i>
            </h2>
          </Link>
          <div className={classes.button}>
            <Web3Button />
          </div>
        </div>
      </div>
    );
  };

export default Navbar;