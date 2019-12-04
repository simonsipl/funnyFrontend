import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const CountryInput = ({countries}) => {
  const classes = useStyles();
  return (
    <Autocomplete
      id="country"
      style={{ width: 300 }}
      options={countries}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={option => (
        <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.name}
        </React.Fragment>
      )}
      renderInput={params => (
        <TextField
          {...params}
          label="Choose a country"
          variant="outlined"
          fullWidth
          inputProps={{
            ...params.inputProps,
            autoComplete: 'disabled', 
          }}
        />
      )}
    />
  );
}

export default CountryInput;