import {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {FaGithubSquare} from 'react-icons/fa'
import gfm from 'remark-gfm';
import './Scss/main.css';

function App() {
  const [markdownText, setMarkdownText] = useState('');

  const setInitialMarkup =() =>{
    setMarkdownText(
      `# Welcome to my React Markdown
## This is a sub-heading...
### And here's some other cool stuff:`
.concat('\r\n Heres some code, `<div></div>`, between 2 backticks.\r\n')
.concat(`\r\n You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~. 
There's also [links](https://www.freecodecamp.org), and
> Block Quotes! \r\n
And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
        
        1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`)
    )
  }

  useEffect(()=>{
    setInitialMarkup();
  },[])

  return (
    <div className="App">
      <a href='https://github.com/napstar-420/react-markdown-previewer' className='github_link' rel='noreferrer' target='_blank' >Github<FaGithubSquare className='github_icon' fontSize='1.3rem'/></a>
      <div className="editor-container">
        <h1 className='header'>Editor</h1>
        <textarea name="editor" id="editor" placeholder='Write Markdown here' className='style_edit-prev' rows='10' cols='50' style={{resize: 'none'}} value={markdownText} onChange={(e)=>setMarkdownText(e.target.value)}/>
      </div>
      <div className="preview-container">
        <h1 className='header'>Preview</h1>
        <div id="preview" className='style_edit-prev'>
          <ReactMarkdown remarkPlugins={[gfm]}>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
