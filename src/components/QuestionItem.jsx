import React, { useContext } from 'react';
import { Accordion, Button, Row, Col } from 'react-bootstrap';
import { QuizContext } from '../context/QuizContext';

function QuestionItem({ question, eventKey }) {
  const { dispatch } = useContext(QuizContext);

  const handleAnswer = (isCorrect) => {
    dispatch({
      type: 'Answer',
      payload: { id: question.id, isCorrect }
    });
  };

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        <Row className="w-100">
          <Col>{question.question}</Col>
          <Col className="text-end">
            {question.validation !== null && (
              <span className={question.validation ? 'text-success' : 'text-danger'}>
                {question.validation ? 'Juste' : 'Faux'}
              </span>
            )}
          </Col>
        </Row>
      </Accordion.Header>
      <Accordion.Body>
        <p>{question.answer}</p>
        <Button
            variant="success"
            onClick={() => handleAnswer(true)}
            className="me-2"
            disabled={question.validation !== null}
        >
        Juste
        </Button>
        <Button
            variant="danger"
            onClick={() => handleAnswer(false)}
            disabled={question.validation !== null}
        >
        Faux
        </Button>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default QuestionItem;

