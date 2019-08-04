import React from "react";

import "./collection-items.styles.scss";

const CollectionItems = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <div className="name">{name}</div>
      <div className="price">{price}</div>
    </div>
  </div>
);

export default CollectionItems;
