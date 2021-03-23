import './CSS/muliFont.css';
import './CSS/App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {routes} from './Components/RoutPath';

function RouteWithSubRoutes(route) {
  return (
    <Route 
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

export default function App() {
  return (
    <div>
      <Router>
        {routes.map((v, i) => (
          <Switch><RouteWithSubRoutes key={i} {...v} /></Switch>
        ))}     
      </Router>
    </div>
  );
}

