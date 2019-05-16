import React from 'react';
import { connect } from 'react-redux';

import { getChat } from '../../store/actions/ChatActions.js';
import { ChatContainer, MessageContainer, Chat } from './liveChatStyles.js';

const Message = ({ username, message, channelUrl, pictureUrl }) => (
    <MessageContainer>
        <a href={channelUrl}>
            <img src={pictureUrl} alt=""/>
        </a>
        <p>
            <a href={channelUrl}>{username}</a>
            {message}
        </p>
    </MessageContainer>
)

class LiveChat extends React.Component{
    componentDidMount(){
        this.props.getChat(this.props.chatId);
        this.startGettingChat();
    }

    startGettingChat = () => {
        this.getChatInterval = setInterval(() => {
            this.props.getChat(this.props.chatId);
        }, 60000)
    }

    render(){
        const { chat } = this.props;
        console.log(chat)
        return(
            <ChatContainer>
                <h1>Live Chat</h1>
                <Chat>
                {chat ? chat.items.map(m => {
                    const message = m.snippet;
                    const author = m.authorDetails;
                    return (
                    <Message 
                        username={author.displayName}
                        message={message.displayMessage}
                        channelUrl={`http://youtube.com/channel/${author.channelId}`}
                        pictureUrl={author.profileImageUrl}
                        roles={{
                            isChatModerator: author.isChatModerator,
                            isChatSponsor: author.isChatSponsor,
                            isChatOwner: author.isChatOwner,
                            isVerified: author.isVerified
                        }}
                    />
                    )
                }): <h2>No Chat Loaded...</h2>}
                </Chat>
            </ChatContainer>
        )
    }
}

const mapStateToProps = state => ({
    chat: state.ChatReducer.chat
})

export default connect(
    mapStateToProps,
    {
        getChat
    }
)(LiveChat);