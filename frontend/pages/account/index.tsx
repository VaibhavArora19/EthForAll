import { Auth, useAuth } from "@arcana/auth-react";
import { useRouter } from "next/router";

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
                ) : auth.isLoggedIn ? (
                    <p>Logged In</p>
                ) : (
                    <div>
                        <Auth externalWallet={true} theme="dark" onLogin={onLogin}/>
                    </div>
                )
            }
        </div>
    )
};

export default Account;