const GoLive = () => {
    return (
        <div className="ml-60 mt-10 w-6/12">
            <form>
                <label className="block mb-4">
                    <span className="text-md">Name</span>
                </label>
                <input type="text" name="name" placeholder="Live Stream name" className="rounded-md w-11/12 h-10 pl-6 mb-6"/>
                <label className="block mb-4">
                    <span className="text-md">Description</span>
                </label>
                <input type="text" name="name" placeholder="Short Description" className="rounded-md w-11/12 h-10 pl-6 mb-6"/>
                <label className="block mb-4">
                    <span className="text-md">Flow Rate</span>
                </label>
                <input type="text" name="name" placeholder="Flow Rate/sec" className="rounded-md w-11/12 h-10 pl-6 "/>
                <button className="btn btn-primary btn-wide mt-10 ml-52">Go Live</button>
            </form>
        </div>
    )
};

export default GoLive;