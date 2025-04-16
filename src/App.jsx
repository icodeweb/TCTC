import './App.css';
import { useState } from 'react';
import SidePanel from './components/SidePanel';
import Display from './components/Display';
import { projects } from './data/projects';

function App() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  return (
    <>
      <SidePanel
        projects={projects}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <Display selectedProject={selectedProject} />
    </>
  );
}

export default App;