import React from 'react';
import styled from 'styled-components';

export default function TitleComponent() {

    const MainTitle = styled.p`
        font-size:35.2px;
        font-weight:900;
        margin: 40px 0px 0px 11%;
        color:#D40511;
    `

    const SubTitle = styled.p`
        font-size:17.6px;
        font-weight:600;
        margin: 5px 0px 0px 11%;
        color:#D40511;
    `


    return (
        <>
            <MainTitle>당신의 모든 배송</MainTitle>
            <SubTitle>시킨 물건이 어디쯤 왔는지 한꺼번에 확인해 보세요.</SubTitle>
        </>
    );

}