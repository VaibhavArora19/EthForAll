import Link from "next/link";
import classes from "./Sidebar.module.css";

import Image from "next/image";

const followers = [
  {
    name: "0xVaibhav.lens",
  },
  {
    name: "0xStani.lens"
  },
  {
    name: "0xShihYu.lens"
  }
];

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
          <Link href="/" className={`${classes.link}`}>
            <h2 className = "text-lg font-semibold tracking-wider mb-6">
              <i className="fa-light fa-compass"></i>&nbsp;&nbsp;Browse
            </h2>
          </Link>
          <Link href="/live" className={`${classes.link}`}>
            <h2 className="text-lg font-semibold tracking-wider mb-6">
              <i style={{ color: "red" }} className="fa-solid fa-signal-stream"></i>
              &nbsp;&nbsp;Live
            </h2>
          </Link>
          <Link href="/following" className={`${classes.link}`}>
            <h2 className="text-lg font-semibold tracking-wider mb-6">
            <i className="fa-light fa-user-plus"></i>&nbsp;&nbsp; Following
            </h2>
          </Link>
          <Link href="/account" className={`${classes.link} text-lg font-semibold tracking-wider mb-6`}>
            <div className={classes.avatar}>
              <Image src="/avatar.png" width={32} height={32} alt="avatar" className="rounded-md"/>
              <span>&nbsp;&nbsp; Account</span>
            </div>
          </Link>
          <div className="mt-12">
            <h1 className="text-lg font-semibold">Following</h1>
            {followers.map(follower => {
              return <div key={follower.name} className="flex gap-3 mb-4 mt-4">
                <Image src="/avatar.png" width={32} height={32} alt="avatar" className="rounded-md"/>
                    <h1>{follower.name}</h1>
                </div>
            })}
          </div>
        </div>
      );
};

export default Sidebar;