import styled from 'styled-components';

import { paper, spacing, secondary, darkSecondary } from '../../main-stylesheet';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    .separator{
        height:2px;
        width: 80%;
        margin: 0 auto;
        ${paper};
        background-color: ${secondary};
    }
    .oauth-login{
        display: flex;
        justify-content: center;
        color: ${secondary};
        font-size: 1.6rem;
        i{
            margin: ${spacing}px ${spacing/1.6}px;
            transition: .2s;
            &:hover{
                cursor: pointer;
                transform: scale(1.1);
            }
        }
    }
    h3{
        margin: ${spacing/2}px 0;
        font-size: 0.9rem;
        font-weight: 300;
        color: #FFFFFF;
        text-align: center;
        span{
            color: ${secondary};
            &:hover{
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: ${spacing*1.5}px;
    label{
        color: #FFFFFF;
        font-size: 0.9rem;
        font-weight: 300;
        margin-bottom: ${spacing/2}px;
    }
    input,select{
        margin-bottom: ${spacing*1.5}px;
        padding: ${spacing/3}px ${spacing/2}px;
        font-size: 1.1rem;
    }
    button{
        width: 45%;
        margin: 0 auto;
        padding: ${spacing/2}px ${spacing}px;
        border: unset;
        border-radius: 2px;
        font-size: 1rem;
        background-color: ${secondary};
        color: #FFFFFF;
        transition: .2s;
        &:hover{
            cursor: pointer;
            background-color: ${darkSecondary};
        }
    }
`;