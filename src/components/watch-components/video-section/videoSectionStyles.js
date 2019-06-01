import styled from 'styled-components';

import { spacing, primary } from '../../main-stylesheet';

export const VideoSectionContainer = styled.div`
    width: 80%;
    background-color: black;
    .videos{
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        iframe{
            ${props => props.count > 1 ? `
                width: 50%;
                height: 22.5vw;
                margin: auto; 
            ` : `
                width: 100%;
                height 45vw;
                margin: auto;
            `}
        }
    }
    &:hover{
        .subnav-hover{
            opacity: 1;
            top: 0px;
        }
    }
`;

export const SubNavContainer = styled.div`
    position: fixed;
    display: flex;
    top: -45px;
    width: 100%;
    height: 45px;
    margin: ${spacing/2}px;
    opacity: 0;
    transition: .2s;
    .back-button{
        border: unset;
        color: #FFFFFF;
        background-color: ${primary};
        border-radius: 4px;
        width: 65px;
        margin: 0 ${spacing/4}px 0 0;
        box-shadow: 0px 2px 8px rgba(0,0,0,0.15);
        transition: .2s;
        i{
            margin-right: 5px;
        }
        &:hover{
            cursor: pointer;
            box-shadow: 0px 2px 8px rgba(0,0,0,0.35);
            opacity: 0.8;
        }        
        &:focus{
            outline: none;
        }   
    }
    .channel-button{
        display: flex;
        align-items: center;
        border: unset;
        color: #FFFFFF;
        opacity: 0.5;
        background-color: ${primary};
        margin: 0 ${spacing/4}px;
        padding: ${spacing/3}px;
        border-radius: 4px;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
        box-shadow: 0px 2px 8px rgba(0,0,0,0.15);
        transition: .2s;
        img{
            min-width: 35px;
            min-height: 35px;
            max-width: 35px;
            max-height: 35px;
            border-radius: 35px;
            margin-right: 5px;
        }
        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h4{
                display: flex;
                align-items: center;
                div{
                    height: 10px;
                    width: 10px;
                    background-color: red;
                    border-radius: 5px;
                    margin-right: 5px;
                }
            }
        }
        &:hover{
            cursor: pointer;
            box-shadow: 0px 2px 8px rgba(0,0,0,0.35);
            opacity: 1;
        }
        &:focus{
            outline: none;
        }   
    }
    .active{
        box-shadow: 0px 2px 8px rgba(0,0,0,0.15);
        opacity: 1;
        &:hover{
            opacity: 0.5;
        }
    }
`;