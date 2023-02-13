import classes from "./Card.module.css";
import { useRouter } from "next/router";

type Iprops = {
    id: string;
    name: string;
    thumbnail: string;
}

const Card = (props: Iprops) => {
    const router = useRouter();
    return (
        <div className={classes.card} onClick={() => {router.push(`/player/${props.id}`)}}>
            <div>
                <img className={classes.thumbnail} src={`https://${props.thumbnail}.ipfs.w3s.link/${props.name}thumbnail`} alt="thumbnail" width={260} height={150}/>
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