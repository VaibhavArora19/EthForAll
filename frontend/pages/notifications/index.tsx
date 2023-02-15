import { getNotifications } from "@/push";
import { useEffect, useState } from "react"
import { useAccount } from "wagmi";
import { NotificationItem } from "@pushprotocol/uiweb";
import { chainNameType } from "@pushprotocol/uiweb/lib";

const Notifications = () => {
    const {address} = useAccount();
    const [notifications, setNotifications] = useState<any>([]);
    const notificationsStyle = {
        margin: "2% auto",
        width:"70%",
    }
    
    useEffect(() => {

        if(address) {
            (async function() {
                const allNotifications = await getNotifications(address);
                console.log(allNotifications);
                setNotifications(allNotifications);
            })();
        }
    }, []);

    return (
        <div style={notificationsStyle}>
            {notifications.length > 0 && notifications.map((notification:any) => {
                return <NotificationItem key={notification.sid} notificationTitle={notification.title} notificationBody={notification.message} cta={notification.cta} app={notification.app} icon={notification.icon} image={notification.image} url={notification.url} theme="dark"  chainName={notification.blockchain as chainNameType}/>
            })}
        </div>
    )
};

export default Notifications;