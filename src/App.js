import projects from './utils/projects';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      {/* <Project projects={projects}/>
      <Project projects={projects}/>
      <Project projects={projects}/>
      <Project projects={projects}/>
      <Project projects={projects}/> */}

      <Footer />
    </div>
  );
}

export default App;
