import React from 'react';
import styled from 'styled-components';

export default function Addbtn({ onClick }) {


    const Wrapper = styled.div`
        text-align:center;
    `

    const Addbox = styled.button`
        width:80%;
        height:130px;
        display:inline-block;
        margin-top:30px;
        border-radius:10px;
        border: 5px dashed #ffffffdd;
        cursor:pointer;
        font-size:19.2px;
        color:#ffffffdd;
        font-weight:600;

        background-color:#00000020;
        -webkit-transition: background-color 400ms linear;
        -ms-transition: background-color 400ms linear;
        transition: background-color 400ms linear;

        &:hover{
            background-color: #00000040;
            -webkit-transition: background-color 400ms linear;
            -ms-transition: background-color 400ms linear;
            transition: background-color 400ms linear;
        }

        &:focus{
            outline:none;
        }
        `




    return (
        <Wrapper>
            <Addbox onClick={onClick}>
                새로운 택배 추가하기
            </Addbox>
        </Wrapper>
    );

}