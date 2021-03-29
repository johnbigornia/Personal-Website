import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
    <Container>
        <Container>
            {props.children}
        </Container>
    </Container>
)