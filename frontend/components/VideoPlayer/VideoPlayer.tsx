import { Player } from "@livepeer/react";

const VideoPlayer = (props: {playbackId: string, name: string}) => {
    return (
        <div>
            <Player title={props.name} playbackId={props.playbackId} showPipButton showLoadingSpinner showTitle aspectRatio="16to9"/>
        </div>
    )
};

export default VideoPlayer;