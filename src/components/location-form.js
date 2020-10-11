import React, { useState } from "react";
import "./location-form.css";

function Edgewater() {
  return (
    <div>
      <h2 className="location-info__header">
        Composting Information for Edgewater
      </h2>
      <h3 className="location-info__header">
        Service through{" "}
        <a
          className="location-info__link"
          href="https://collectiveresource.us/residential-composting-service/"
        >
          Collective Resource™ Compost
        </a>
        .
      </h3>
      <p className="location-info__text">
        Our residential composting service provides door-to-door pickup of food
        scraps and other compostable matter. We provide a 5-gallon bucket to
        your family and then weekly or biweekly pick up the food scraps and take
        them to a commercial compost site. We leave a clean bucket for you to
        continue your collection for the next pickup. Most households work with
        some kind of countertop container and then empty into the big bucket
        when needed. Some customers choose to keep the bucket outside with a
        brick or flower pot on top, or it can be put out on your pickup day.
      </p>

      <h3 className="location-info__subheader">Cost:</h3>
      <ul>
        <li>Weekly pickup - $10.50</li>
        <li>Bi-weekly pickup - $15.50</li>
        <li>1x a month - $20.50</li>
      </ul>
    </div>
  );
}

function HydePark() {
  return (
    <div>
      <h2 className="location-info__header">
        Composting Information for Hyde Park
      </h2>
      <h3 className="location-info__header">
        Service through{" "}
        <a
          className="location-info__link"
          href="https://healthysoilcompost.com/services/#service_1"
        >
          Healthy Soil Compost LLC
        </a>
        .
      </h3>
      <p className="location-info__text">
        Reduce landfill waste at home while contributing to a community compost
        program. Our programs are clean and effective while providing a
        practical solution to household food-waste.
      </p>
      <ul>
        <li>Apartments - Single Unit</li>
        <li>Condos/Townhomes - Single Unit</li>
        <li>Single Family Homes</li>
      </ul>
      <h3 className="location-info__subheader">Cost:</h3>
      <ul>
        <li>1x a month - $20.00</li>
        <li>2x a month - $30.00</li>
        <li>4x a month - $40.00</li>
      </ul>
    </div>
  );
}

function Lakeview() {
  return (
    <div>
      <h2 className="location-info__header">
        Composting Information for Lakeview
      </h2>
      <h3 className="location-info__header">
        Service through{" "}
        <a
          className="location-info__link"
          href="https://www.greencitymarket.org/programs/program.asp?id=12"
        >
          Green City Market
        </a>
        .
      </h3>
      <p className="location-info__text">
        Green City Market is committed to creating a more sustainable Chicago by
        diverting waste headed for landfills. We partner with Healthy Soil
        Compost to process the local, organic waste produced at the market back
        into nutrient-rich energy for increasing soil health and community urban
        farming. By composting and recycling, we reduced our waste at markets
        from approximately thirty garbage bins per day to just six!
      </p>
      <h3 className="location-info__subheader">Cost:</h3>
      <p className="location-info__text">
        Shoppers can use their own container or bag of organic waste (up to 5
        gallons) and drop it off for only $3!
      </p>
    </div>
  );
}

function LoganSquare() {
  return (
    <div>
      <h2 className="location-info__header">
        Composting Information for Logan Square
      </h2>
      <h3 className="location-info__header">
        Service through{" "}
        <a
          className="location-info__link"
          href="https://dillpickle.coop/compost"
        >
          The Dill Pickle Food Co-Op
        </a>
        .
      </h3>
      <p className="location-info__text">
        We've worked with The Ground Rules for years to recapture organic waste
        from our produce department and deli, returning nutrients to the soil in
        neighborhood gardens. We're excited to expand this effort with a home
        composting service open to the Dill Pickle community.
      </p>
      <h3 className="location-info__subheader">Compost Drop-off:</h3>
      <p className="location-info__text">
        Bring your full bucket to the compost cage in the back parking area of
        the co-op during open hours and ring the receiving doorbell for staff
        assistance. We’ll accept your full bucket and sign you out an empty
        bucket. Let your cashier know to add the new bucket fee to your total at
        checkout.
      </p>

      <h3 className="location-info__subheader">Cost:</h3>
      <ul>
        <li>$19.99 initial refundable deposit, includes first bucket</li>
        <li>
          $9.99 per bucket composting fee, paid at the register each time you
          take a new bucket home from the co-op.
        </li>
      </ul>
    </div>
  );
}

function LocationForm() {
  const [category, setCategory] = useState(1);

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  let Contents = () => <div></div>;
  if (category === "Edgewater") {
    Contents = Edgewater;
  } else if (category === "Hyde Park") {
    Contents = HydePark;
  } else if (category === "Lakeview") {
    Contents = Lakeview;
  } else if (category === "Logan Square") {
    Contents = LoganSquare;
  }

  return (
    <form className="game-form">
      <div className="game-form__row">
        <h1 className="location-page__title">
          Composting in Chicago &mdash; Services{" "}
        </h1>
        <label className="game-form__label" htmlFor="category">
          Choose a Chicago Neighborhood:
        </label>
        <select
          id="category"
          className="game-form__input"
          value={category}
          onChange={onCategoryChange}
        >
          <option value="">Select Your Neighborhood</option>
          <option value="Edgewater">Edgewater</option>
          <option value="Hyde Park">Hyde Park</option>
          <option value="Lakeview">Lakeview</option>
          <option value="Logan Square">Logan Square</option>
        </select>
      </div>
      <Contents />
    </form>
  );
}

export default LocationForm;
