import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, CssBaseline, Typography } from '@material-ui/core';

const styles = theme => ({
    background: {
        width: '100%',
        height: '100vh',
    }
})


const BackgroundContainer = (props) => {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <Typography component="div" className={classes.background}>
                {props.children}
            </Typography>
        </React.Fragment>
    );
}

BackgroundContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackgroundContainer);