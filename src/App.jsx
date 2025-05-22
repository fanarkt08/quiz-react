import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import FilterQuiz from './components/FilterQuiz';
import QuizAccordion from './components/QuizAccordion';
import { QuizProvider } from './context/QuizContext';

function App() {
  const [category, setCategory] = useState('All');

  return (
    <QuizProvider>
      <Container className="mt-4">
        <h1>Quiz Interactif</h1>
        <FilterQuiz onCategoryChange={setCategory} />
        <QuizAccordion selectedCategory={category} />
      </Container>
    </QuizProvider>
  );
}

export default App;

