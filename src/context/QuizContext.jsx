import React, { createContext, useReducer } from 'react';
import rawData from '../data/questions.json';
import { quizReducer, initialState } from '../reducers/QuizReducer';

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, {
    ...initialState,
    questions: rawData.map(q => ({ ...q }))
  });

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}
