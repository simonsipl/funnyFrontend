import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
})

const Panel = ({ cities }) => {
    return (
        <ExpansionPanel key={cities.code}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography >{cities}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}


class AccordionList extends Component {
 render() {
        const { cities } = this.props;
        return (
            <div className="flow">
                {cities.map((cities,index) => (
                    <Panel key={index} cities={cities} />
                ))}
            </div>
        )
    }
};

AccordionList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccordionList);