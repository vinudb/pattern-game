import React from 'react';
import { connect } from 'react-redux';
import { startMatchPattern, setHighlight, setStatus } from "../actions/patterGame";

class Squares extends React.Component {
    componentDidUpdate() {
        if(this.props.patternGame.highlighting){
            this.startHighlighting(this.props);
        }
    }

    startHighlighting = (props) => {
        let pattern = this.props.patternGame.pattern;
        for (var x = 0, ln = pattern.length; x < ln; x++) {
            setTimeout(function(y) {    
                console.log("%d => %d", y, pattern[y]);
                var element = document.getElementById(pattern[y]);
                element.classList.add("highlight");
                setTimeout(function(z) {
                    element.classList.remove('highlight');
                    if(y=== pattern.length -1){
                        props.setHighlight(false);
                        props.setStatus('Start clicking the boxes in the same order')
                    }
                }, 500)  
            }, x * 2000, x);
            
          }
          
    }

    onSquareClick = (e)=>{
        this.props.startMatchPattern(e.target.id)
    }

    render() {
        return (
            <div>
                <div id={1} className='square red' onClick={this.onSquareClick}></div>
                <div id={2} className='square green' onClick={this.onSquareClick}></div>
                <div id={3} className='square blue' onClick={this.onSquareClick}></div>
                <div id={4} className='square yellow' onClick={this.onSquareClick}></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    patternGame: state.patternGame
});

const mapDispatchToProps = (dispatch, props) => ({
    startMatchPattern: (clickedNumber) => dispatch(startMatchPattern(clickedNumber)),
    setHighlight: (highlighting) => dispatch(setHighlight(highlighting)),
    setStatus: (status) => dispatch(setStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Squares);