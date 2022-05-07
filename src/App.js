import './App.css';
import { useEffect } from 'react';
import mermaid from 'mermaid';

const tdGraph = `
  graph TD
    A-->B
    B-->C
    B-->D
`

const commits = `
  gitGraph
    commit id: "C1"
    commit id: "C2"
    commit id: "C3"
    commit id: "C4"
`

const branch = `
  gitGraph
    commit id: "C1"
    commit id: "C2"
    branch feature-branch
    commit id: "F1"
    commit id: "F2"
    checkout main
    commit id: "C3"
    commit id: "C4"
    merge feature-branch

`


function App() {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true, theme: 'base' })
  }, [])

  return (
    <>
      <div className="mermaid">{commits}</div>
      <div className="mermaid">{branch}</div>
    </>
  );
}

export default App;
