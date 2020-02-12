import React from 'react';
import { connect } from 'react-redux';
import {startPlay, setHighlight} from '../actions/patterGame';

class PlayButton extends React.Component{
    onPlayClick = ()=>{
        if(this.props.highlighting && this.props.playInProgress) return;
        this.props.startPlay()
    }
    render(){
        return(
            <div>
                <button className='button' onClick={this.onPlayClick}>PLAY</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    patternGame: state.patternGame
});

const mapDispatchToProps = (dispatch, props) => ({
    startPlay: () => dispatch(startPlay()),
    setHighlight: (highlighting) => dispatch(setHighlight(highlighting))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);