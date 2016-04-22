import React, {Component} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Projects from './components/Projects';


class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        {/*
        <Stats/>
        <div className="container">
          <About/>
        </div>  */}
        <Projects/>
        <Contact/>
      </div>
    );
  }
}

export default App;