import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Report from '../../containers/report';
import Graphics from '../../containers/reports/graphics';
import Encuestado from '../../containers/reports/encuestado';
import Informe from '../../containers/reports/informe';
import Stories from '../../containers/reports/stories';
import Authentication from '../../containers/authentication';
import Person from '../../containers/reports/persona'
import F2Empresa from '../../containers/reports/f2Empresas';
import F2Persona from '../../containers/reports/f2Persona';

export default () => (
  <Switch>
    <Route path="/Report" exact component={Report} />
    <Route path="/Graphics" exact component={Graphics} />
    <Route path="/Encuestado" exact component={Encuestado} />
    <Route path="/Informe" exact component={Informe} />
    <Route path="/Stories" exact component={Stories} />
    <Route path="/Person" exact component={Person} />
    <Route path="/F2Empresa" exact component={F2Empresa} />
    <Route path="/F2Persona" exact component={F2Persona} />
    <Route path="/Authentication" exact component={Authentication} />
    {/* <Route component={NotFound} /> */}
  </Switch>
);
