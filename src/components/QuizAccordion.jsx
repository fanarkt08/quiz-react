import React, { useContext } from 'react';
import { Accordion } from 'react-bootstrap';
import { QuizContext } from '../context/QuizContext';
import QuestionItem from './QuestionItem';

function QuizAccordion({ selectedCategory }) {
  const { state } = useContext(QuizContext);

  const filtered = selectedCategory === 'All'
    ? state.questions
    : state.questions.filter(q => q.category === selectedCategory);

  return (
    <Accordion defaultActiveKey="0">
      {filtered.map((q, idx) => (
        <QuestionItem key={q.id} question={q} eventKey={String(idx)} />
      ))}
    </Accordion>
  );
}

export default QuizAccordion;
