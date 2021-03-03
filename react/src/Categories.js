import React from 'react';

function Categories(props) {
  const categories = props.categories;
  const categoryNames = categories.map((category) =>
    <li key={category.id}>
      {category.name}
    </li>
  );

  return (
    <div className="categoryNames">
      {categoryNames}
    </div>
  );
}

export default Categories;
