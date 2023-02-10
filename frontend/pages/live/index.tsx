import Card from "../../components/UI/Card";
import styles from "../../styles/Live.module.css";

const Live = (props: any) => {
    
    console.log(props.streams);

    return (
        <div className={`${styles.live} grid md:grid-cols-4 sm:grid-cols-3`}>
            {props.streams.map((stream: {id: string, name: string}) => {
                return <Card key={stream.id} name={stream.name}/>
            })}
        </div>
    )
};

export async function getServerSideProps() {

    const data = await fetch('https://livepeer.studio/api/stream?streamsonly=1&filters=[{"id": "isActive", "value": true}]', {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_LIVEPEER_KEY}`,
        }
    });

    const response = await data.json();

    return {
        props: {
            streams: response
        }
    }

}

export default Live;