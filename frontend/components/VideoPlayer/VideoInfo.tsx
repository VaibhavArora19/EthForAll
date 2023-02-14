type Iprops = {
  name: string;
  description: string;
};

const VideoInfo = (props: Iprops) => {
  return (
    <div className="ml-4 flex justify-between">
      <div>
        <h1 className="text-xl font-semibold">{props.name}</h1>
        <p className="mt-2 text-slate-200">{props.description}</p>
      </div>
      <div>
        <button className="btn btn-info mr-2">
        <i className="fa-solid fa-hand-holding-medical"></i>&nbsp;Donate
        </button>
        <button className="btn btn-success">Subscribe</button>
      </div>
    </div>
  );
};

export default VideoInfo;
