function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `
This is a paragraph
**This is bolded text**
> Block Quotes!

# Heading
## Heading 2

- list item 1
- list item 2
- list item 3

[Visit my Website](https://placeholer.com)
              
this is a inline \`<div></div>\`
this is a block of code:

\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
\`\`\`

![Markdown](data:image/png;base64,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)

`;

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", { className: "text-center m-4", id: "text-coloring" }, "Convert your Markdown"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center", id: "text-coloring" }, "Enter Markdown:"), /*#__PURE__*/
      React.createElement("textarea", { className: "p-2", id: "editor", value: text, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center", id: "text-coloring" }, "Result:"), /*#__PURE__*/
      React.createElement("div", { className: "preview rounded", dangerouslySetInnerHTML: { __html: markdown }, id: "preview" })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));