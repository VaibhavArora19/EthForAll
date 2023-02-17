import classes from "./Card.module.css";
import { useRouter } from "next/router";

type Iprops = {
    id: string;
    name: string;
    thumbnail: string;
    creator?: string;
}

const Card = (props: Iprops) => {
    const router = useRouter();

    const redirectHandler = () => {
        if(props.creator){
            router.push(`/player/${props.id}`)
        }else{
            router.push(`/player/${props.id}?isLive=true`)
        }
    }

    return (
        <div className={classes.card} onClick={redirectHandler}>
            <div>
                <img className={classes.thumbnail} src={`https://${props.thumbnail}.ipfs.w3s.link/${props.name}thumbnail`} alt="thumbnail" />
            </div>  
            <div className={classes.details}>
                <h4>
                    {props.name}🔥
                </h4>
                <p>
                    {`${props.creator ? 'By: '+props.creator.substr(0,6)+"..."+props.creator.substr(37,42): 'Click to watch'}`}
                </p>
                <p>
                    21 likes &nbsp;|&nbsp; 2 hours ago
                </p>
            </div>
        </div>
    )
};

export default Card;