import { Auth, useAuth } from "@arcana/auth-react";
import { useRouter } from "next/router";
import styles from "./Arcana.module.css";

const Backdrop = () => {

    return <div className={styles.backdrop}></div>
}

const Account = () => {
    const auth = useAuth();
    const router = useRouter();

    const onLogin = () => {
        console.log("Logged In");
        router.push("/");
    };
    
    return (
        <div>
            {
                auth.loading ? (
                    "Loading..."
                ) :  (
                    <div className={styles.modal}>
                        <Auth externalWallet={false} theme="dark" onLogin={onLogin}/>
                    </div>
                )
            }
        </div>
    )
};

const Modal = () => {
    return (
        <div>
            <Backdrop />
            <Account />
        </div>
    )
}
export default Modal;