const patternGameDefaultState = {
    currentLevel: 1,
    pattern: [],
    userPattern: [],
    highlighting: false,
    playInProgress: false,
    initPatterLength: 4,
    status: 'Click play to start the game'
  };

export default (state = patternGameDefaultState, action) => {
    switch (action.type) {
        case 'START_PLAY':
        return {
            ...state,
            ...action.actionObj
        }

        case 'MATCH_PATTERN': 
        return {
            ...state,
            ...action.actionObj
        }
        
        case 'SET_HIGHLIGHT':
            return {
                ...state,
                highlighting: action.highlighting
            }

        case 'SET_STATUS':
                return {
                    ...state,
                    status: action.status
                }   
      default:
        return state;
    }
  };
  