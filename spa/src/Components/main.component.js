import React from 'react';
import BackgroundContainer from './backgroundContainer.component'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CountryInput from './autocompleteCountries.component'
import { Container } from '@material-ui/core';


const Main = ({ data }) => {
    const state = data;
    return (
        <div>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Countries and Cities
          </Typography>
                </Toolbar>
            </AppBar>
            <BackgroundContainer>
                <Container>
                    <CountryInput countries={state.countries} ></CountryInput>
                </Container>
            </BackgroundContainer>
        </div>
    );
}

export default Main;