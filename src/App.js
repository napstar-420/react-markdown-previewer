import {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import './Scss/main.css';

function App() {
  const [markdownText, setMarkdownText] = useState('');

  return (
    <div className="App">
      <div className="editor-container container">
        <h1 className='header'>Editor</h1>
        <textarea name="editor" id="editor" className='style_edit-prev' rows='10' cols='50' style={{resize: 'none'}} value={markdownText} onChange={(e)=>setMarkdownText(e.target.value)}/>
      </div>
      <div className="preview-container container">
        <h1 className='header'>Preview</h1>
        <div id="preview" className='style_edit-prev'>
          <ReactMarkdown remarkPlugins={[gfm]}>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
