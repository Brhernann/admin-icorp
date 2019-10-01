import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Empresa from '../../containers/reports/empresa';
import inscritos from '../../containers/reports/inscritos';

import Authentication from '../../containers/authentication';
import Person from '../../containers/reports/persona';

export default () => (
  <Switch>
    <Route path="/encuesta/empresa" exact component={Empresa} />
    <Route path="/inscritos" exact component={inscritos} />
    <Route path="/encuesta/persona" exact component={Person} />
    <Route path="/Authentication" exact component={Authentication} />
    {/* <Route component={NotFound} /> */}
  </Switch>
);
