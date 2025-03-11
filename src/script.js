const { useState } = React;

// for the optional bonus part 😎
marked.setOptions({
  breaks: true
});

const App = () => {
  const defMarkdown = `# Welcome to My Markdown Previewer
  ## This is a subheading...
  
  ### Made by jinvkyen
  [Visit My GitHub](https://github.com/jinvkyen)
  
  This \`<div></div>\` is an Inline code
  
  You can also add a code block, see!
  \`\`\`javascript
    function helloWorld() {
      console.log("Hello, World!");
    }
  \`\`\`
  - List Item 1
  - List Item 2
  
  > And... this is a Blockquote! wowzers...
  
  and **bold** a text! amazing!
  
 ![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)`;

  const [text, setText] = useState(defMarkdown);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <div id="editor-container">
        <h1>Markdown Previewer</h1>
        <textarea id="editor" value={text} onChange={handleChange}></textarea>
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      ></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
