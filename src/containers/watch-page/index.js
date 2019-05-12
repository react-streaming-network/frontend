import React from 'react';
import { connect } from 'react-redux';

import { watchChannel } from '../../store/actions/ChannelActions.js';
import { ChatSection, MainContainer } from './watchContainerStyles.js';
import { VideoSection } from '../../components/watch-components/video-section';

export class WatchPage extends React.Component{
    toggleChannel = channelName => {
        this.props.watchChannel(channelName)
    }

    render(){
        const { history, liveChannels, activeChannels } = this.props;
        return(
            <MainContainer>
                <VideoSection 
                    history={history} 
                    liveChannels={liveChannels}
                    toggleChannel={this.toggleChannel}
                    activeChannels={activeChannels}
                />
                <ChatSection>
                    {liveChannels.length > 0 &&
                        <iframe 
                            title="test"
                            allowfullscreen="" 
                            frameborder="0"  
                            src={`https://www.youtube.com/live_chat?v=${liveChannels[0].status.videoId}&embed_domain=${process.env.REACT_APP_FRONTEND_DOMAIN}`}
                        />
                    }
                </ChatSection>
            </MainContainer>
        )
    }
}

const mapStateToProps = state => ({
    liveChannels: state.ChannelReducer.liveChannels,
    channels: state.ChannelReducer.channels,
    activeChannels: state.ChannelReducer.activeChannels || [],
})

export default connect(
    mapStateToProps,
    {
        watchChannel
    }
)(WatchPage);