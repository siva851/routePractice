import {Route, Switch} from 'react-route-dom'

import Header from './component/Header'
import About from './component/About'
import Home from './component/Home'
import Contact from './component/Contact'
import NotFound from './component/NotFound'

import './App.css'

const App = () => {
  ;<div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
}

export default App
