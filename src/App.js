import projects from './utils/projects';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import 'bulma/css/bulma.min.css'
import './App.css';

function App() {
  return (
    <div>
      <Header />
       <Navigation />
      {/*<Project projects={projects}  />
      <Project projects={projects}/>
      <Project projects={projects}/>
      <Project projects={projects}/>
      <Project projects={projects}/> */}

      <Footer />
    </div>
  );
}

export default App;
