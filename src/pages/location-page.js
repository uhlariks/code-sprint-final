import React from "react";
import { Helmet } from "react-helmet";
import LocationForm from "../components/location-form";

/** this page will have a drop down menu that has three zip codes and provides information relative to which one was selected */

function LocationPage() {
  return (
    <>
      <Helmet>
        <title>Composting App &ndash; Services</title>
      </Helmet>
      <LocationForm />
    </>
  );
}

export default LocationPage;
