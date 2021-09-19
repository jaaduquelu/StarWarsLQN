import React from 'react';
import Container from '@material-ui/core/Container';

const Layout = ({ children }) => {
    return (
        <>
            <Container>
                <h1>Desde Layout</h1>
                {children}
            </Container>
        </>
    );
}

export default Layout;