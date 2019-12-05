import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {fade, makeStyles} from '@material-ui/core/styles';
import BackgroundContainer from './backgroundContainer.component'
import CountryInput from './autocompleteCountries.component'

const useStyles = makeStyles(theme => ({
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            }
        },
        searchBar: {
            position: 'relative',
            width: '100%',
            backgroundColor:'#3daafc'
        }
    }),
);

const Main = ({data}) => {
    const state = data;
    const classes = useStyles();

    return (
        <div>
            <BackgroundContainer>
                <AppBar className={classes.searchBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Countries and Cities
                        </Typography>
                        <div className={classes.search}>
                            <CountryInput countries={state.countries}></CountryInput>
                        </div>
                    </Toolbar>
                </AppBar>
            </BackgroundContainer>
        </div>
    );
};

export default Main;