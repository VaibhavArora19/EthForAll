import { getNotifications } from "@/push";
import { useEffect, useState } from "react"
import { useAccount } from "wagmi";
import NotificationCard from "@/components/UI/NotificationCard"

const Notifications = () => {
    const {address} = useAccount();
    const [notifications, setNotifications] = useState<any>([]);
    useEffect(() => {

        if(address) {
            (async function() {
                const allNotifications = await getNotifications(address);
                setNotifications(notifications);
            })();
        }
    }, []);

    return (
        <div>
            {notifications.map((notification:any) => {
                return <NotificationCard title={notification.title} icon={notification.icon} message={notification.message}
                notificationTitle={notification.notification.title} notificationMessage={notification.notification.body}/>
            })}
        </div>
    )
};

export default Notifications;