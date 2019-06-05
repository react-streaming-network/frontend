import styled from 'styled-components';

import { transparentPrimary } from '../main-stylesheet';

export const FeaturedCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
    margin: 15px;
`;

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    color: #FFFFFF;
    h1{
        margin: unset;
        font-size: 1.2rem;
        font-weight: 500;
        text-shadow: 0px 2px 8px rgba(0,0,0,0.57);
    }
    .viewers{
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        background-color: ${transparentPrimary};
        padding: 6px;
        color: #ffffff;
        div{
            height: 10px;
            width: 10px;
            border-radius: 5px;
            background-color: red;
            margin-right: 5px;
        }
    }
`;

export const BottomSection = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    iframe{
        height: 510px;
        width: 100%;
    }
    .channel{
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 865px;
        margin: -15px 15px 15px 15px;
        z-index: 2;
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            font-weight: 300;
            padding: 5px 7px;
            text-decoration: none;
            color: #FFFFFF;
            background-color: ${transparentPrimary};
            box-shadow: 0px 2px 8px rgba(0,0,0,0.27);
            transition: .2s;
            img{
                height: 30px;
                width: 30px;
                margin-right: 5px;
                border-radius: 15px;
            }
            &:hover{
                box-shadow: 0px 2px 8px rgba(0,0,0,0.5);
            }
        }
        button{
            display: flex;
            align-items: center;
            background-color: ${transparentPrimary};
            padding: 6.5px;
            border: unset;
            color: #ffffff;
            text-decoration: none;
            &:hover{
                cursor: pointer;
                
            }
        }
    }
`;