import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel/Panel.component';
import { withStyles } from '@material-ui/core';
const styles = theme => ({

})

class AccordionList extends Component {
    render() {
        const { cities } = this.props;
        return (
            <div className="flow">
                {cities.map((city, index) => (
                    <Panel key={index} city={city} />
                ))}
            </div>
        )
    }
};

AccordionList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccordionList);