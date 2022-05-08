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
    branch feature
    commit id: "F1"
    commit id: "F2"
    checkout main
    commit id: "C3"
    commit id: "C4"
`

const merge = `
  gitGraph
    commit id: "C1"
    commit id: "C2"
    branch feature
    commit id: "F1"
    commit id: "F2"
    checkout main
    commit id: "C3"
    commit id: "C4"
    merge feature
`

const squash = `
  gitGraph
    commit id: "C1"
    commit id: "C2"
    branch feature
    commit id: "F1"
    commit id: "F2"
    checkout main
    commit id: "C3"
    commit id: "C4"
    commit id: "Squash Commit" type: HIGHLIGHT
`

const rebase = `
  gitGraph
    commit id: "C1"
    commit id: "C2"
    commit id: "C3"
    commit id: "C4"
    branch feature
    commit id: "F1*"
    commit id: "F2*"
`


function App() {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true, theme: 'base' })
  }, [])

  return (
    <>
      <div className="mermaid">{commits}</div>
      <div className="mermaid">{branch}</div>
      <div className="mermaid">{merge}</div>
      <div className="mermaid">{squash}</div>
      <div className="mermaid">{rebase}</div>
    </>
  );
}

export default App;
