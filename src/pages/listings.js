import React, { Fragment } from 'react';
import { SpiritListing, RecipeListing } from '../components';

export default function Listings() {
  return (
    <Fragment>
      <SpiritListing />
      <RecipeListing />
    </Fragment>
  );
}