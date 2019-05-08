import React from 'react';

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

const LiveChat = ({ messages }) => (
    <ChatContainer>
        <h1>Live Chat</h1>
        <Chat>
        {messages.length ? messages.map(m => {
            return (
            <Message 
                username={m.username}
                message={m.message}
                channelUrl={m.profileUrl}
                pictureUrl={m.pictureUrl}
            />
            )
        }): <h2>No Chat Loaded...</h2>}
        </Chat>
    </ChatContainer>
)

export default LiveChat;