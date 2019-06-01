import React from 'react';
import NumberFormat from 'react-number-format';

import { SubNavContainer } from '../videoSectionStyles.js';


const SubNav = ({ history, toggleChannel, liveChannels, activeChannels }) => (
    <SubNavContainer className="subnav-hover">
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
    </SubNavContainer>
)

export default SubNav;