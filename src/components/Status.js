import React from 'react';
import { connect } from 'react-redux';

class Status extends React.Component{
    render(){
        return(
            <h3>
                {this.props.patternGame.status}
            </h3>
        );
    }
}

const mapStateToProps = (state) => ({
    patternGame: state.patternGame
});

export default connect(mapStateToProps, null)(Status);