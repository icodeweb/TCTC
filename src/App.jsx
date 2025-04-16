import './App.css';
import { useState } from 'react';
import SidePanel from './components/SidePanel';
import Display from './components/Display';
import { projects } from './data/projects';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

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