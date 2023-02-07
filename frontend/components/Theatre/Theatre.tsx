const Theatre = () => {

    const poster = {
        backgroundImage: "url('./avatar.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className={"ml-10 mb-8 rounded-lg h-72 w-11/12"} style={poster}>
            <div>
                <h1 className="ml-20 pt-16 tracking-tight text-5xl">Avatar</h1>
                <h2 className="ml-20 text-xl">The way of water</h2>
            </div>
            <div className="mt-14 ml-20 flex">
                <button className="btn btn-error text-white">Watch Live</button>
                <button className="btn btn-outline ml-4"><i className="fa-light fa-user"></i>&nbsp; &nbsp;512</button>
            </div>
        </div>
    )
};

export default Theatre;