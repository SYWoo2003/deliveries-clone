import React, { useState } from 'react';
import styled from 'styled-components';
import './Modal.scss';
import ReactTransitionGroup from 'react-addons-css-transition-group';


const Modal = ({ isOpen, close }) => {


    const Modaloverlay = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color:#000000aa;

        &.Modal-anim-enter {
            opacity: 0.00;
            transition: all 0.3s;
        }
        &.Modal-anim-enter.Modal-anim-enter-active {
            opacity: 1;
        }
        &.Modal-anim-leave {
            opacity: 1;
            transition: all 0.3s;
        }
        &.Modal-anim-leave.Modal-anim-leave-active {
            opacity: 0.00;
        }
    `

    const ModalCom = styled.div`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0px 3px 6px #00000060;


        &.Modal-anim-enter {
            opacity: 0.00;
            transform: translate(-50%, -50%) scale(1);
            transition: all 0.5s;
        }
        &.Modal-anim-enter.Modal-anim-enter-active {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        &.Modal-anim-leave {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
            transition: all 0.5s;
        }  
        &.Modal-anim-leave.Modal-anim-leave-active {
            opacity: 0.00;
            transform: translate(-50%, -50%) scale(0.8);
        }
    `

    const Title = styled.p`
        font-size: 16pt;
        font-weight: bold;
        color: #333;
        margin: 16px 16px 10px 20px;
    `

    const Content = styled.div`
        border-top: 1px solid #bebebe;
        margin:0 16px 16px 16px;
    `

    const Modalel = styled.p`
        padding: 8px;
        font-size: 12pt;
        color: #999;
    `

    const BtnWrap = styled.div`
        margin: 0;
        margin-top: 8px;

        button{
                width: 100%;
                padding: 12px 0;
                border-radius: 0 0 10px 10px;
                background-color: #FFCC00;
                font-size: 16px;
                color: #3a3939;
                font-weight:600;
                padding-bottom:15px;
                font-family: Noto Sans KR, serif;
                border: 0;
                cursor: pointer;
    
            &:hover{
                    background-color: #eebe00;
            }
            &:active{
                    background-color: #d6ab00;
            }
            &:focus{
                    outline:none;
            }
    }
        `



    //const [name, setName] = useState('');
    //const [invnum, setInvnum] = useState('');



    return (
        <>
            {
                isOpen ?
                    <ReactTransitionGroup
                        transitionName={'Modal-anim'}
                        transitionEnterTimeout={200}
                        transitionLeaveTimeout={200}
                    >
                        <Modaloverlay onClick={close} />
                        <ModalCom>
                            <Title>택배 추가</Title>
                            <Content>
                                <Modalel>
                                    <input placeholder='상품 이름 입력' />
                                    <br />
                                    <input placeholder='숫자만 입력 가능' autocomplete='off' />
                                    <br />
                                    <input />

                                </Modalel>
                            </Content>
                            <BtnWrap>
                                <button onClick={close}> 추가하기</button>
                            </BtnWrap>
                        </ModalCom>
                    </ReactTransitionGroup>
                    :
                    <ReactTransitionGroup transitionName={'Modal-anim'} transitionEnterTimeout={200} transitionLeaveTimeout={200} />
            }
        </>
    )
}
export default Modal;