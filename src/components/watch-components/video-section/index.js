import React from 'react';
import NumberFormat from 'react-number-format';

import { VideoSectionContainer, SubNav } from './videoSectionStyles.js';

export const VideoSection = ({ 
    liveChannels, 
    history, 
    toggleChannel, 
    activeChannels 
}) => (
    <VideoSectionContainer count={activeChannels.length}>
        <SubNav className="subnav-hover">
            <button className="back-button" onClick={() => {
                history.push('/')
            }}>
                <i className="fas fa-angle-left"/>
                Back
            </button>
            {liveChannels.map(c => {
                return (
                    <button 
                        className={activeChannels.includes(c.channelName) ? 'channel-button active' : 'channel-button'} 
                        onClick={() => {
                            toggleChannel(c.channelName);
                        }}
                    >
                        <img src={c.channelThumbnails.high.url} alt=""/>
                        <div>
                            <h3>{c.channelName}</h3>
                            <h4>
                                <div/>
                                <NumberFormat 
                                    value={c.status.liveStatus.concurrentViewers} 
                                    displayType={'text'} 
                                    thousandSeparator={true}
                                />
                            </h4>
                        </div>
                    </button>
                )
            })}
        </SubNav>
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
            })}
        </div>
    </VideoSectionContainer>
)

export default VideoSection;