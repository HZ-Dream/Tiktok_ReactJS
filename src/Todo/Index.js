import { useReducer, useRef } from "react";
import reducer, { initState } from './reducer'
import { addJob, setJob, deleteJob } from './actions.js'

function App() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state;
    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }
  return (
      <div style={{padding: '0 20px'}}>
        <h3>Todo</h3>
        <input
            ref={inputRef}
            value={job}
            placeholder="Enter todo..."
            onChange={e => {
                dispatch(setJob(e.target.value))
            }}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
            {jobs.map( (job, index) => (
                <li key={index}>{job} 
                    <span onClick={() => dispatch(deleteJob(index))}
                        >&times;</span>
                </li>
            ))}
        </ul>
      </div>
  )
}

export default App