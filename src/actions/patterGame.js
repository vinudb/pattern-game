export const setStartPlay = (actionObj) => ({
    type: 'START_PLAY',
    actionObj
});

export const startPlay = () =>{
    return (dispatch, getState) => {
        let patternGame = getState().patternGame;
        //get the initPatternLength and level
        //call function to generate pattern
        let pattern = generatePattern(patternGame.initPatterLength, patternGame.currentLevel)   
        let actionObj = {
            pattern,
            highlighting: true,
            playInProgress: true,
            status: 'Closely watch the boxes which are highlighting'
        }
        dispatch(setStartPlay(actionObj))
    }
}

const generatePattern = (length, level)=>{
    let complexity = (length + level) - 1;
    let pattern = [];
    let min = 1;
    let max = length;
    while (pattern.length < complexity) {
        let random_number = Math.floor( Math.random() * (max - min + 1)) + min;
        pattern.push( random_number );
    }
    return (pattern)
}

export const setHighlight = (highlighting) => ({
    type: 'SET_HIGHLIGHT',
    highlighting
});

export const setStatus = (status) => ({
    type: 'SET_STATUS',
    status
});

export const setMatchPattern = (actionObj) => ({
    type: 'MATCH_PATTERN',
    actionObj
});

export const startMatchPattern = (clickedNumber)=>{
    return (dispatch, getState) => {
        let patternGame = getState().patternGame;
        let pattern = patternGame.pattern;
        let userPattern = patternGame.userPattern;
        userPattern.push(parseInt(clickedNumber));
        let actionObj = {};
        console.log(userPattern, pattern)
        if(pattern[userPattern.length - 1] === userPattern[userPattern.length - 1]){
            //match
            if(pattern.length === userPattern.length){
                //level over
                actionObj= {
                    status: 'Yay!! You are in the next level. Click play to continue',
                    currentLevel: patternGame.currentLevel + 1,
                    pattern: [],
                    userPattern: [],
                    highlighting: false,
                    playInProgress: false
                }
                if(patternGame.currentLevel === 10){
                    actionObj = {
                        ...actionObj,
                        status: 'Hurray!! You have completed the game'
                    }
                }    
            }else{
                actionObj= {
                    userPattern,
                    status: 'Yay!! That was right'
                }
            }
        }else{
            //no match
            actionObj= {
                pattern: [],
                userPattern: [],
                highlighting: false,
                playInProgress: false,
                initPatterLength: 4,
                status: 'Oops!! That was wrong. Start again'
            }
        }

        dispatch(setMatchPattern(actionObj))
    }
}
