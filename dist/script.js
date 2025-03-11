const { useState } = React;

// for the optional bonus part 😎
marked.setOptions({
  breaks: true });


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

  const handleChange = event => {
    setText(event.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { id: "editor-container" }, /*#__PURE__*/
    React.createElement("h1", null, "Markdown Previewer"), /*#__PURE__*/
    React.createElement("textarea", { id: "editor", value: text, onChange: handleChange })), /*#__PURE__*/

    React.createElement("div", {
      id: "preview",
      dangerouslySetInnerHTML: { __html: marked.parse(text) } })));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));