import React from 'react';
import Button from 'react-bootstrap/Button';

function Category(props) {
  const category = props.category;

  return (
    <div className="p-1">
      <Button id={category.id} size="sm">{category.name}</Button>
    </div>
  );
}

export default Category;
