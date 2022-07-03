import {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
<<<<<<< HEAD
import './Scss/main.css'
=======
>>>>>>> 1ae48eb5a0a9c14746034fc87a2e819f4b38bc33

function App() {
  const [markdownText, setMarkdownText] = useState('');

  return (
    <div className="App">
      <div className="editor-container">
        <h1>Editor</h1>
        <textarea name="editor" id="editor" rows='10' cols='50' style={{resize: 'none'}} value={markdownText} onChange={(e)=>setMarkdownText(e.target.value)}/>
      </div>
      <div className="preview-container">
        <h1>Preview</h1>
        <div id="preview">
          <ReactMarkdown remarkPlugins={[gfm]}>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
