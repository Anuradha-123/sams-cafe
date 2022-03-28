
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/HomeBanner';
import About from './components/About';
import Footer from './components/Footer';
import Home from './Home'
import Menu from './Menu'
import Contact from './Contact'


import { Switch,Route,Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <>
        <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
      
      </Switch>
      
        
        <Header />
        <Banner />
        <About />
        <Footer/>
       
      </>
    </div>
  );
}

export default App;
