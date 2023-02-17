import { useRouter } from "next/router";

const Alert = (props: {streamKey: string, id: string}) => {
  const router = useRouter();

  const showStreamHandler = () => {
    router.push(`/player/${props.id}?isLive=true`)
  };
  
  return (
      <div className="alert shadow-lg z-10 fixed w-5/12 mb-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">Stream Key: {props.streamKey}</h3>
            <div className="text-xs">Stream url: {`srt://rtmp.livepeer.com:2935?streamid=${props.streamKey}`}</div>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-sm" onClick={showStreamHandler}>Done</button>
        </div>
      </div>
  );
};

export default Alert;
