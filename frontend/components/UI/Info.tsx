type IProps = {
    title: string;
}

const Info = (props: IProps) => {
    return (
        <div className="ml-6 text-red-500">
            <h1 className="text-xl tracking-widest font-semibold"><i className="fa-solid fa-circle-small"></i>&nbsp;&nbsp;{props.title}</h1>
        </div>
    )
};

export default Info;