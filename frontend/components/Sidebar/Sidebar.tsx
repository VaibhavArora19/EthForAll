import Link from "next/link";
import classes from "./Sidebar.module.css";

import Avatar from "../UI/Avatar";

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
          <Link href="/" className={classes.link}>
            <h2>
              <i className="fa-light fa-compass"></i>&nbsp;&nbsp;Discover
            </h2>
          </Link>
          <Link href="/live" className={classes.link}>
            <h2>
              <i style={{ color: "red" }} className="fa-solid fa-signal-stream"></i>
              &nbsp;&nbsp;Live
            </h2>
          </Link>
          <Link href="/following" className={classes.link}>
            <h2>
              <i className="fa-light fa-users"></i>&nbsp;&nbsp; Following
            </h2>
          </Link>
          <Link href="/account" className={classes.link}>
            <div className={classes.avatar}>
                <Avatar />
              <span style={{fontSize:"1.5rem"}}>&nbsp;&nbsp; Account</span>
            </div>
          </Link>
        </div>
      );
};

export default Sidebar;