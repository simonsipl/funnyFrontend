import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import BackgroundContainer from '../Components/Background/backgroundContainer.component';
import CountryInput from '../Components/MainBar/autocompleteCountries.component';
import AccordionList from '../Components/Accordion/accordionList.component';

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
  },
  appBarText: {
    color: 'white',
    fontSize: '1.4rem',
  }
})

class App extends Component {
  // Maybe i should fetch all countries and just enable those 4. but it was quicker

  state = {
    countries: [
      {
        "code": "PL",
        "name": "Poland"
      },
      {
        "code": "DE",
        "name": "Germany"
      },
      {
        "code": "FR",
        "name": "France"
      },
      {
        "code": "ES",
        "name": "Spain"
      },
    ],
    cities: []
  }

  getCountryNameHandler = (e) => {
    e.preventDefault()
    this.setState({
      countryName: e.target.value,
    });
  }

  getTenMostPollutedCities = async (e) => {
    const { countries, countryName } = this.state;

    if (!countryName) return

    const countryCode = countries.find(country => country.name === countryName)
    if (!countryCode) return

    let url = new URL('https://api.openaq.org/v1/cities');
    // this might be adjusted later for filter as selected sorting etc.
    const params = {
      country: countryCode.code,
      limit: 10,
      order_by: 'count',
      sort: 'desc'
    }
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url);
    const body = await response.json();

    this.setState({
      cities: body.results.map(results => results.name)
    })

    return body;
  }
  async componentDidMount() {
    await this.getTenMostPollutedCities()
  };

  async componentDidUpdate() {
    if (localStorage.getItem('country') !== this.state.countryName) {
      await this.getTenMostPollutedCities()
      localStorage.setItem('country', this.state.countryName);
    }

  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <BackgroundContainer>
          <AppBar className={classes.searchBar}>
            <Toolbar>
              <Typography className={classes.appBarText} noWrap>
                Countries and Cities
                        </Typography>
              <div className={classes.search}>
                <CountryInput countries={this.state.countries} onInput={this.getCountryNameHandler}></CountryInput>
              </div>
            </Toolbar>
          </AppBar>
          <AccordionList cities={this.state.cities}></AccordionList>
        </BackgroundContainer>
      </div>
    )
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);