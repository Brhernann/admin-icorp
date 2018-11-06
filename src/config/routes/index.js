import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Report from '../../containers/report';
import Audience from '../../containers/scraping/audience';
import Basic from '../../containers/scraping/basic';
import Post from '../../containers/scraping/post';
import Stories from '../../containers/scraping/stories';
import Authentication from '../../containers/authentication';

export default () => (
  <Switch>
    <Route path="/Report" exact component={Report} />
    <Route path="/Audience" exact component={Audience} />
    <Route path="/Basic" exact component={Basic} />
    <Route path="/Post" exact component={Post} />
    <Route path="/Stories" exact component={Stories} />
    <Route path="/Authentication" exact component={Authentication} />
    {/* <Route component={NotFound} /> */}
  </Switch>
);
