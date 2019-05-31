import React from "react";
import { connect } from 'react-redux';

import { 
  FeaturedSection, 
  LiveSection, 
  ChannelSection, 
  MainContainer,
  HeadingSection
} from "./homeContainerStyles.js";
import { watchChannel } from "../../store/actions/ChannelActions.js";
import FeaturedCard from "../../components/featured-card";
import LiveCard from "../../components/live-card";
import LiveChat from "../../components/live-chat";
import ChannelCard from "../../components/channel-card";
import NavBar from '../../components/navigation';

class Home extends React.Component{
  render(){

    const { liveChannels, channels, watchChannel, history } = this.props;

    return (
      <MainContainer>
        <HeadingSection>
        <NavBar/>
          {liveChannels.length &&
            <FeaturedSection>
              <h1>Featured</h1>
              <div className="container">
                <FeaturedCard
                  name={liveChannels[0].channelName}
                  title={liveChannels[0].status.title}
                  viewers={liveChannels[0].status.liveStatus.concurrentViewers}
                  pictureUrl={liveChannels[0].channelThumbnails.high.url}
                  channelUrl={`https://youtube.com/channel/${liveChannels[0].youtube}`}
                  videoId={liveChannels[0].status.videoId}
                  channelName={liveChannels[0].channelName}
                  watchChannel={watchChannel}
                  history={history}
                />
                <LiveChat
                  chatId={liveChannels[0].status.liveStatus.activeLiveChatId}
                />
              </div>
            </FeaturedSection>
          }
        </HeadingSection>

        <LiveSection>
          <h1>Live</h1>
          <div className="container">
          {liveChannels.map(c => {
            return (
              <>
                <LiveCard
                  name={c.channelName}
                  title={c.status.title}
                  viewers={c.status.liveStatus.concurrentViewers}
                  pictureUrl={c.channelThumbnails.high.url}
                  channelUrl={`https://youtube.com/channel/${c.youtube}`}
                  videoId={c.status.videoId}
                  channelName={c.channelName}
                  watchChannel={watchChannel}
                  history={history}
                />
              </>
            )
          })}    
          </div>
        </LiveSection>

        <ChannelSection>
          <h1>Channels</h1>
          <div className="container">
            {channels.map(c => {
              return (
              <ChannelCard
                id={c.id}
                channel={c}
                name={c.channelName}
                pictureUrl={c.channelThumbnails.high.url}
                socials={{
                  youtube: `https://youtube.com/channel/${c.youtube}`,
                  twitter: c.twitter,
                  discord: c.discord,
                  instagram: c.instagram,
                  userLink: "https://google.com"
                }}
                live={c.status.live}
              />
              )
            })}

          </div>
        </ChannelSection>

      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  liveChannels: state.ChannelReducer.liveChannels,
  channels: state.ChannelReducer.channels
})

export default connect(
  mapStateToProps,
  {
    watchChannel
  }
)(Home);