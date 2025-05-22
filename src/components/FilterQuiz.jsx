import React from 'react';
import { Form } from 'react-bootstrap';

function FilterQuiz({ onCategoryChange }) {
  return (
    <Form.Select className="my-3" onChange={e => onCategoryChange(e.target.value)}>
      <option value="All">Toutes les catégories</option>
      <option value="Math">Math</option>
      <option value="Science">Science</option>
      <option value="Histoire">Histoire</option>
    </Form.Select>
  );
}

export default FilterQuiz;
