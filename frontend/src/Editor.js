import React from 'react'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

class Editor extends React.Component {
  render() {
    return (
      <div className="markdown">
        <div className="editor">
          markdown editor
        </div>
        <div className="view">
          markdown view
        </div>
      </div>
    )
  }
}

export default Editor;
