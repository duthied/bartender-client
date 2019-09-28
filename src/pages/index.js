import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import { Header, PageContainer } from '../components';
import Listings from './listings';

export default function Pages() {
  return (
    <Fragment>
      <Header />
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Listings path="/" />
        </Router>
      </PageContainer>
    </Fragment>
  );
}