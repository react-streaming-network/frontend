import React from 'react';
import NumberFormat from 'react-number-format';

import { 
  CardContainer, 
  TopSection, 
  BottomSection, 
  Overlay
} from './liveCardStyles.js';

const LiveCard = ({
  name,
  title,
  viewers,
  channelUrl,
  videoId,
  pictureUrl,
  channelName,
  history,
  watchChannel,
}) => {
  return (
    <CardContainer>
      <iframe 
        title={title}
        src={`https://www.youtube.com/embed/${videoId}?mute=1&autoplay=1&controls=0`}
        frameborder="0" 
        allowfullscreen
      />
      <Overlay>
        <TopSection>
          <a href={`https://www.youtube.com/watch?v=${videoId}`}>{title}</a>
          <div className="right-section">
            <div/>
            <NumberFormat value={viewers} displayType={'text'} thousandSeparator={true}/>            
          </div>
        </TopSection>
        <BottomSection>
          <a href={channelUrl}>
            <img src={pictureUrl} alt=""/>
            {name}
          </a>
          <button onClick={() => {
            watchChannel(channelName);
            history.push('/watch')
          }}>
            Watch Now
          </button>
        </BottomSection>
      </Overlay>
    </CardContainer>
  )
}

export default LiveCard;