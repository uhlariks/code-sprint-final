import React, { useState } from "react";
import "./location-form.css";

function LocationForm() {
  const [category, setCategory] = useState(1);

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const onFormSubmit = (event) => {
    // to do: kick off the game instead of alerting
    alert(`You chose the ${category} neighborhood of Chicago.`);
  };

  return (
    <form className="game-form" onSubmit={onFormSubmit}>
      <div className="game-form__row">
        <label className="game-form__label" htmlFor="category">
          Choose a Chicago Neighborhood:
        </label>
        <select
          id="category"
          className="game-form__input"
          value={category}
          onChange={onCategoryChange}
        >
          <option value="Edgewater">Edgewater</option>
          <option value="Hyde Park">Hyde Park</option>
          <option value="Lakeview">Lakeview</option>
          <option value="Logan Square">Logan Square</option>
        </select>
      </div>
      <div className="game-form__row">
        <input className="game-form__submit" type="submit" value="SEARCH" />
      </div>
    </form>
  );
}

export default LocationForm;
