import React from "react";
import { connect } from "react-redux";
 
import { removeChannel, startEditing } from '../../store/actions/ChannelActions.js';
import { 
    ChannelCardContainer, 
    SocialIconContainer,
    MainContainer,
    AdminButtons
} from "./channelCardStyles.js";

const SocialIcon = ({ icon, link }) => (
    <SocialIconContainer href={link}>
        <i className={icon}/>
    </SocialIconContainer>
)

const ChannelCard = ({ channel, name, pictureUrl, live, socials, id, removeChannel, startEditing }) => (
    <MainContainer>
        <ChannelCardContainer live={live}>
            <img src={pictureUrl} alt=""/>
            <div>
                <div>
                    <h1>{name}</h1> 
                    <div className="live"/>
                </div>
                <div className="social-container">
                    <SocialIcon icon="fab fa-youtube" link={socials.youtube} />
                    <SocialIcon icon="fab fa-twitter" link={socials.twitter} />
                    <SocialIcon icon="fab fa-discord" link={socials.discord} />
                    <SocialIcon icon="fab fa-instagram" link={socials.instagram} />
                    <SocialIcon icon="fas fa-user" link={socials.userLink} />
                </div>
                    
            </div>
        </ChannelCardContainer>
        {true &&
        <AdminButtons>
            <button onClick={() => {
                removeChannel(id)
            }}>
                Delete Channel
            </button>
            <button onClick={() => {
                startEditing(channel)
            }}>
                Edit Channel
            </button>
        </AdminButtons>
        }
    </MainContainer>
)

export default connect(
    null,
    {
        removeChannel,
        startEditing
    }
)(ChannelCard);