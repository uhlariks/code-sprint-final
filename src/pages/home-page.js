import React from "react";
import Helmet from "react-helmet";
import "./home-page.css";

/** this is the home page which will feature information on composting and image links to the other pages */

function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Composting App</title>
      </Helmet>
      <h1 className="home-page__title">Composting in Chicago</h1>
      <h2 className="home-page__header">What is Compost?</h2>
      <p className="home-page__text">
        Compost is simply decayed organic matter — and "organic matter" is a
        pretty wide-ranging label. A twig can be organic matter, but so can a
        banana peel. When you mix a bunch of these items together in a compost
        pile, they break down naturally into a nutrient-rich fertilizer that
        helps gardens grow.
      </p>
      <h2 className="home-page__header">Why Compost?</h2>
      <p className="home-page__text">
        Composting reduces what is being sent to the landfill. Fewer food scraps
        sitting in the landfill means that less methane gas is created and
        precious space is not being used for food waste. Composting also gives
        the vitamins and minerals of food scraps back to the Earth to create
        healthy soil. Using this rich soil reduces the need for water,
        fertilizer, and pesticides. Composting serves to educate people on
        environmentally friendly practices and demonstrates a commitment to
        protecting the environment. It is an easy thing we can all do on a daily
        basis.
      </p>
      <h3 className="home-page__subheader">
        WHAT’S WRONG WITH SENDING FOOD SCRAPS TO LANDFILLS?
      </h3>
      <p className="home-page__text">
        We are realizing that this thing we’ve been doing our whole lives has
        been contributing to global warming. They create methane, a greenhouse
        gas that is 34 times more damaging than CO2.
      </p>
      <h3 className="home-page__subheader">
        WHAT’S RIGHT ABOUT SENDING FOOD SCRAPS TO COMMERCIAL COMPOSTING
        FACILITIES?
      </h3>
      <p className="home-page__text">
        The food scraps in the commercial composting facilities are given the
        right environment to biodegrade thus do not contribute to methane gas
        production.
      </p>
      <h3 className="home-page__subheader">COMPOSTING DIVERTS ORGANIC WASTE</h3>
      <p className="home-page__text">
        You can divert 100% of your organic waste, including materials that
        worms can’t eat. This precious resource can be added back to our soil,
        so we can continue to grow plants, including food.
      </p>
      <h3 className="home-page__subheader">
        COMPOSTING SAVES VALUABLE RESOURCES
      </h3>
      <p className="home-page__text">
        Composting gives the vitamins and minerals of food scraps back to the
        Earth to create healthy soil. Using this rich soil reduces the need for
        water, fertilizer, and pesticides.
      </p>
      <h2 className="home-page__header">What Can Be Composted?</h2>
      <p className="home-page__text">
        Almost anything that comes from the ground can be composted. Cucumber
        ends, apple cores, carrot peels, cantaloupe rinds, avocado pits, an old
        pumpkin leftover from Halloween — any vegetable or fruit scrap will do.
        But grains also sprout from soil, which means you can throw stale bread,
        cereal, and pasta in your compost heap, too.
      </p>
      <p className="home-page__text">
        What else goes into the pile? Coffee grounds and filters, tea leaves,
        herbs, spices, and nut and egg shells are all acceptable ingredients.
        You can also include cut flowers or plant trimmings, as long as they
        aren't diseased. But there's a long list of things you can't compost —
        and they mostly apply to animal products. No meat, fish, butter, yogurt,
        cheese, milk, or animal fat is allowed. It's also a good rule of thumb
        to keep anything oily or greasy out of the pile, and please, don't
        include your pet's poop. It may be organic, but it introduces disease to
        the compost that make it unusable.
      </p>
    </main>
  );
}

export default HomePage;
