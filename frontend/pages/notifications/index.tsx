import { getNotifications } from "@/push";
import { useEffect } from "react";

const Notifications = () => {
    
    useEffect(() => {

        (async function() {
            const notifications = await getNotifications('0x5e97BBfb258fBb110231c4f01C693ef6BA9553a6');
            console.log('notifi', notifications);
        })();
    }, []);

    return (
        <div></div>
    )
};

export default Notifications;