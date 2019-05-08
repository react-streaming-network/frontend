import styled from 'styled-components';

import { paper, secondary, darkSecondary, spacing } from '../main-stylesheet';

export const ChannelCardContainer = styled.div`
    display: flex;  
    align-items: center;
    padding: 13px;
    height: 80px;
    ${paper}
    img{
        width: 70px;
        height: 70px;
        margin-right: 10px;
        border-radius: 55px;
        border: 2px solid ${secondary};
        box-shadow: 0px 2px 8px rgba(0,0,0,0.27);
    }
    div{
        display: flex;
        flex-direction: column;
        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 7px;
            h1{
                margin-left: unset;
                color: #FFFFFF;
                font-size: 1.2rem;
                font-weight: 400;
            }
            .live{
                background-color: ${props => props.live ? "red" : "grey"};
                width: 10px;
                height: 10px;
                margin: 0 10px;
                border-radius: 10px;
            }
        }
        .social-container{
            display: flex;
            flex-direction: row;
        }
    }
`;

export const SocialIconContainer = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    margin-right: 8px;
    border-radius: 15px;
    text-decoration: none;
    background-color: ${secondary};
    box-shadow: 0px 2px 8px rgba(0,0,0,0.27);
    transition: .2s;
    i{
        font-size: 0.7rem;
        color: #ffffff;
    }
    &:hover{
        background-color: ${darkSecondary};
        box-shadow: 0px 2px 8px rgba(0,0,0,0);
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 13px;
    width: 270px;
`;

export const AdminButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: ${spacing/2}px;
    button{
        width: 48.5%;
        height: 30px;
        border: unset;
        ${paper};
        color: #FFFFFF;
        transition: .2s;
        &:hover{
            cursor: pointer;
            background-color: ${secondary};
            box-shadow: 0px 2px 8px rgba(0,0,0,0);
        }
        &:focus{
            outline: none;
        }
    }
`;