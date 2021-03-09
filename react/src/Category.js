import React from 'react';
import Button from 'react-bootstrap/Button';

function Category(props) {
  const category = props.category;

  return (
    <Button id={category.id}>{category.name}</Button>
  );
}

export default Category;
