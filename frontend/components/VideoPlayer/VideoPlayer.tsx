import { Player } from "@livepeer/react";

const VideoPlayer = (props: {playbackId: string, name: string}) => {
    console.log('props are', props)
    return (
        <div>
            <Player title={props.name} playbackId={props.playbackId} showPipButton showLoadingSpinner showTitle aspectRatio="21to9"/>
        </div>
    )
};

export default VideoPlayer;