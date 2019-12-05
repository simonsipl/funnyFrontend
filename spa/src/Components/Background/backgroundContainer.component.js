import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const BackgroundContainer = (props) => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '100vh'}}>
                {props.children}
            </Typography>
        </React.Fragment>
    );
}

export default BackgroundContainer