import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Yangesh from './Yangesh';
import Danish from './Danish';
import Abishek from './Abishek';
import Aryanna from './Aryanna';
import Pramod from './Pramod';
import Zaid from './Zaid';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="app">
      <NavigationBar className="nav"/>
      <Router>
        <Switch>
          <Route exact path="/" component={Yangesh} />
          <Route path="/danish" component={Danish} />
          <Route path="/abishek" component={Abishek} />
          <Route path="/aryanna" component={Aryanna} />
          <Route path="/zaid" component   = {Zaid} />
          <Route path="/pramod" component={Pramod} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
