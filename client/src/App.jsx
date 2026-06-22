import { useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [code, setCode] = useState("// start typing here...");

  return (
    <div style={{ height: "100vh" }}>
      <h2>Collaborative Code Editor</h2>

      <Editor
        height="90vh"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}

export default App;
