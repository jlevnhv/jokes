import React from 'react';
import Category from './Category';

function CategoryList(props) {
  const categories = props.categories;
  const categoryNames = categories.map((category) =>
    <Category category={category} />
  );

  return (
    <div className="categoryNames">
      {categoryNames}
    </div>
  );
}

export default CategoryList;
