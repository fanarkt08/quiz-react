export const initialState = {
    questions: []
  };
  
  export function quizReducer(state, action) {
    switch (action.type) {
      case 'Answer': {
        const { id, isCorrect } = action.payload;
        return {
          questions: state.questions.map(q =>
            q.id === id && q.validation === null
              ? {...q, validation: isCorrect }
              : q
          )
        };
      }
      default:
        return state;
    }
  }
  