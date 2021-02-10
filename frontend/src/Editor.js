import React from 'react'
import ReactCodeMirror from 'react-codemirror';

import 'codemirror/lib/codemirror.css';
import 'hypermd/mode/hypermd.css';
import 'hypermd/theme/hypermd-light.css';
import './hypermd.css'

import 'codemirror/lib/codemirror';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/gfm/gfm';

import 'hypermd/core';
import 'hypermd/mode/hypermd';

import 'hypermd/addon/hide-token';
import 'hypermd/addon/cursor-debounce';
import 'hypermd/addon/fold';
import 'hypermd/addon/read-link';
import 'hypermd/addon/click';
import 'hypermd/addon/hover';
import 'hypermd/addon/paste';
import 'hypermd/addon/insert-file';
import 'hypermd/addon/mode-loader';
import 'hypermd/addon/table-align';

class Editor extends React.Component {
  constructor() {
    super()
    this.state = { text: "# hello world" }
    this.onChange = this.onChange.bind(this)

    this.codeMirrorRef = React.createRef();
  }

  onChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    const options = {
      mode: 'hypermd',
      theme: 'hypermd-light',

      hmdFold: {
        image: true,
        link: true,
        math: true,
      },
      hmdHideToken: true,
      hmdCursorDebounce: true,
      hmdPaste: true,
      hmdClick: true,
      hmdHover: true,
      hmdTableAlign: true,
    }

    const defaultText = "# hello world\n\n This is a test document."


    return (
      <div className="markdown">
        <ReactCodeMirror
          className="editor"
          value={defaultText}
          ref={this.codeMirrorRef}
          options={options} />
      </div>
    )
  }
}

export default Editor
