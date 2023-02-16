import classes from "./Support.module.css";

export const Support = () => {
    return (
        <div className={`${classes.modal} rounded-lg bg-black border-2 m-auto`}>
            <div className="ml-20 mt-6">
                <form>
                    <div>
                        <label className="block">
                            <span>Charity Fund/Public Good</span>
                        </label>
                        <input type="text" placeholder="Type here" className="mt-2 input w-full max-w-md"disabled/>
                        <label className="block mt-4">
                            <span>Token</span>
                        </label>
                        <input type="text" placeholder="Type here" className="mt-2 input w-full max-w-md"disabled/>
                        <label className="block mt-4">
                            <span>Amount</span>
                        </label>
                        <input type="text" placeholder="Type here" className="mt-2 input w-full max-w-md" />
                    </div>
                    <div className="ml-24 mt-6">
                        <button className="btn btn-success text-white">Donate</button>
                        <button className="btn btn-primary text-white ml-2">Pay via Superfluid</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

const Overlay = (props: {onConfirm:() => void}) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
};


const SupportModal = (props: {onConfirm: () => void}) => {
    return (
        <div>
            <Overlay onConfirm={props.onConfirm}/>
            <Support />
        </div>
    )
};

export default SupportModal;
