import Link from "next/link";
import classes from "./Navbar.module.css";

import { Web3Button } from "@web3modal/react";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <div className={classes.navbar}>
          <div className={`${classes.logo} cursor-pointer`} onClick={() => {router.push("/")}}>
            {/*<Image src="text.png" alt="App logo"/>*/}
            <h1 className="text-lg font-semibold mt-8 ml-4">WEB3TV</h1>
          </div>
        <div className={classes.links}>
          <Link href="/golive" className={`${classes.link} `}>
            <h2 className="text-red-600">
            <i className="fa-regular fa-tower-broadcast"></i>
            </h2>
          </Link>
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