import React from 'react';

import { VideoSectionContainer } from './videoSectionStyles.js';
import SubNav from './sub-nav';

export const VideoSection = ({ 
    liveChannels, 
    history, 
    toggleChannel, 
    activeChannels 
}) => (
    <VideoSectionContainer count={activeChannels.length}>
        <SubNav
            history={history}
            toggleChannel={toggleChannel}
            liveChannels={liveChannels}
            activeChannels={activeChannels}
        />
        <div className="videos">
            {liveChannels.map(c => {
                if(activeChannels.includes(c.channelName)){
                    return(
                        <iframe 
                            title={c.status.title}
                            src={`https://www.youtube.com/embed/${c.status.videoId}?mute=1&autoplay=1`}
                            frameborder="0" 
                            allowfullscreen
                        />
                    )
                }
                return null
            })}
        </div>
    </VideoSectionContainer>
)

export default VideoSection;