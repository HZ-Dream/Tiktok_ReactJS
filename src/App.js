import { useState } from "react";
import Content from './Content.js';

function App() {
  const [status, setStatus] = useState(false);
  return (
    <div style={{padding: 20}}>
        <button onClick={() => setStatus(!status)}>Toggle</button>
        {status && <Content />}
    </div>
  );
}

export default App;
