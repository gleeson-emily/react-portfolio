import projects from './utils/projects';
import Project from './components/Project';
import './App.css';

function App() {
  return (
    <div>
      <Project projects={projects}/>
    </div>
  );
}

export default App;
