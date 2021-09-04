import React from 'react';
import GlobalStyle from './globalStyles';
import "inter-ui/inter.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Footer} from './components';
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />  
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
