import { useEffect } from "react";
import Card from "../../components/UI/Card";
import styles from "../../styles/Live.module.css";

const Live = () => {
    useEffect(() => {
        (async function() {
            console.log('key is', process.env.NEXT_PUBLIC_LIVEPEER_KEY)
            const data = await fetch('https://livepeer.studio/api/stream/fc7a709b-02ef-4144-b4aa-ee8d93bd0f00', {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_LIVEPEER_KEY}`,
                }
            });

            const response = await data.json();
            console.log(response);
        })();

    }, []);

    return (
        <div className={`${styles.live} grid md:grid-cols-4 sm:grid-cols-3`}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
};

export default Live;