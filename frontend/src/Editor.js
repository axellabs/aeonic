import React from 'react'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

class Editor extends React.Component {
  constructor() {
    super()
    this.state = { text: "# hello world" }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div className="markdown">
        <div className="editor">
          <textarea className="editor-form" value={this.state.text} onChange={this.onChange} />
        </div>
        <div className="view">
          markdown view
        </div>
      </div>
    )
  }
}

export default Editor
