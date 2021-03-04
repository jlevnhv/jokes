import React from 'react';

function CategoryList(props) {
  const categories = props.categories;
  const categoryNames = categories.map((category) =>
    <li key={category.id} className="categoryName">
      {category.name}
    </li>
  );

  return (
    <ul className="categoryNames">
      {categoryNames}
    </ul>
  );
}

export default CategoryList;
