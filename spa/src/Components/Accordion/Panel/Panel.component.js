
import React, { Component } from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, withStyles } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
})
class Panel extends Component {

    state = {
        city: '',
        description: ''
    }

    getCityDescription = async (city) => {
        if (city.length < 0) return
        const response = await fetch('/api/city', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city: city })

        });
        const body = await response.json();

        const { extract } = body

        return extract
    }

    componentDidMount() {
        this.getCityDescription(this.props.city)
            .then(res => this.setState({
                city: this.props.city,
                description: res
            }))
    }

    componentDidUpdate() {
       
        if (this.props.city !== this.state.city) {
            this.getCityDescription(this.props.city).then(res => this.setState({
                city: this.props.city,
                description: res
            }))
        }
    }


    render() {
        const { city } = this.props

        return (
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >{city}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {this.state.description}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

export default withStyles(styles)(Panel);