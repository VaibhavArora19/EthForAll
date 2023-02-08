import { useEffect } from "react";
import Card from "../../components/UI/Card";
import styles from "../../styles/Live.module.css";

const Live = () => {
    useEffect(() => {

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