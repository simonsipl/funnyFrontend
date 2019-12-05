import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import BackgroundContainer from '../Components/Background/backgroundContainer.component'
import CountryInput from '../Components/MainBar/autocompleteCountries.component'

const styles = theme => ({
  search: {
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
      paddingTop: 10,
      paddingBottom: 10
    }
  },
  searchBar: {
    position: 'relative',
    width: '100%',
    backgroundColor: 'lightblue'
  }
})

class App extends Component {
  state = {
    countries: [
      {
        "code": "AU",
        "name": "Australia"
      },
      {
        "code": "BR",
        "name": "Brazil"
      },
    ],
  }

  getCountryNameHandler = (e) => {
    e.preventDefault()
      this.setState({
        countryName: e.target.value,
      });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <BackgroundContainer>
          <AppBar className={classes.searchBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Countries and Cities
                        </Typography>
              <div className={classes.search}>
                <CountryInput countries={this.state.countries} onInput={this.getCountryNameHandler}></CountryInput>
              </div>
            </Toolbar>
          </AppBar>
        </BackgroundContainer>
      </div>
    )
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);