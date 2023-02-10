import Image from "next/image";

import classes from "./Card.module.css";

type Iprops = {
    name: string;
}

const Card = (props: Iprops) => {
    return (
        <div className={classes.card}>
            <div>
                <Image className={classes.thumbnail} src="/thumbnail.jpg" alt="thumbnail" width={260} height={150}/>
            </div>  
            <div className={classes.details}>
                <h4>
                    {props.name}🔥
                </h4>
                <p>
                    0xvaibhav.lens
                </p>
                <p>
                    21 likes &nbsp;|&nbsp; 2 hours ago
                </p>
            </div>
        </div>
    )
};

export default Card;