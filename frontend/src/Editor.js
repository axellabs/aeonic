import React from 'react'

import './hypermd-dark.css'

const CodeMirror = require("codemirror")
const HyperMD = require("hypermd")

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.editorAreaRef = React.createRef()
  }

  setOptions() {
    const defaultText = "# Aeonic Notes \n\nA smart web-based markdown editor"
    const options = {
      mode: 'hypermd',
      theme: 'hypermd-dark',
      lineNumbers: false,
      lineWrapping: true,
      value: defaultText
    }
    return options
  }

  componentDidMount() {
    let options = this.setOptions()
    let cm = CodeMirror(this.editorAreaRef.current)
    HyperMD.switchToHyperMD(cm, options)
  }

  render() {


    return (
      <div className="app-editor">
        <div className="app-editor--cover-image" />
        <div className="app-editor--area" ref={this.editorAreaRef} />
      </div>
    )
  }
}

export default Editor
