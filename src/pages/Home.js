import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .title {
        padding-top: 100px;
        font-family: 'Times New Roman', serif;
        font-size: 60px;
        text-align: center;
    }
    
    .description {
        font-family: 'Times New Roman', serif;
        font-size: 25px;
        text-align: center;
        padding-bottom: 150px;
    }

    .sub-title {
        font-family: 'Times New Roman', serif;
        font-size: 35px;
        text-align: left;
        padding-bottom: 150px;
    }
`;

export const Home = () => (
    <Styles>
        <div className="title">./John Bigornia</div>
        <div className="description">Hi, I'm John. I'm a front end developer, UI/UX designer, blood-type: coffee.</div>
        <hr color="black"/>
        <div className="sub-title">Projects</div>
    </Styles>
)