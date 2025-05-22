import React, { createContext, useReducer } from 'react';
import rawData from '../data/questions.json';

export const QuizContext = createContext();

const initialState = {
  questions: rawData.map(q => ({ ...q }))
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'Answer': {
      const { id, isCorrect } = action.payload;
      return {
        questions: state.questions.map(q =>
          q.id === id && q.validation === null
            ? { ...q, validation: isCorrect }
            : q
        )
      };
    }
    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}