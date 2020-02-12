import React from 'react';
import Squares from './Squares';
import Status from './Status';
import PlayButton from './PlayButton';
import { connect } from 'react-redux';

class PatternApp extends React.Component{
    render(){
        return(
            <div>
                <h1>{`Level: ${this.props.patternGame.currentLevel}`}</h1>
                <Squares />
                <Status />
                <PlayButton />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    patternGame: state.patternGame
});

export default connect(mapStateToProps, null)(PatternApp);