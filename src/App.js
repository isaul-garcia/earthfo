import React from 'react';
import GlobalStyle from './globalStyles';
import "inter-ui/inter.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Footer} from './components';
import Home from './pages/HomePage/Home';
import Registro from './pages/Registro/Registro'
import Inmobiliaria from './pages/Inmobiliaria/Inmobiliaria'
import Particular from './pages/Particular/Particular'
import PersonalInfo from './pages/PersonalInfo/PersonalInfo'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/Registro" exact component={Registro} /> 
        <Route path="/Inmobiliaria" exact component={Inmobiliaria} /> 
        <Route path="/Particular" eaxct component={Particular} />   
        <Route path="/Personal-Info" exact component={PersonalInfo} />   
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
