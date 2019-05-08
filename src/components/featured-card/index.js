import React from 'react';
import NumberFormat from 'react-number-format';

import { 
    FeaturedCardContainer, 
    BottomSection, 
    TopSection 
} from './featuredCardStyles.js';

const FeaturedCard = ({
    name,
    title,
    viewers,
    pictureUrl,
    channelUrl,
    videoId,
    channelName,
    history,
    watchChannel,
}) => (
    <FeaturedCardContainer>
        <TopSection>
            <h1>{title}</h1>
            <div className="viewers">
                <div/>
                <NumberFormat value={viewers} displayType={'text'} thousandSeparator={true}/>
            </div>
        </TopSection>
        <BottomSection>
            <iframe 
                title={title}
                src={`https://www.youtube.com/embed/${videoId}?mute=1&autoplay=1&controls=0`}
                frameborder="0" 
                allowfullscreen
            />
            <div className="channel">
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
            </div>
        </BottomSection>
    </FeaturedCardContainer>
)

export default FeaturedCard;