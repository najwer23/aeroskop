import './CSS/muliFont.css';
import './CSS/App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home';

function RouteWithSubRoutes(route) {
  return (
    <Route 
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

export default function App() {
  const routes = [
    { path: "/", component: Home, name: 'Home', exact: null },
    // { path: "/test", component: Test, name: 'Test' }
  ];

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

