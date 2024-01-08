import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import Modal from 'react-modal';
import '../App.css';

Modal.setAppElement('#root');
const Editor = ({ language, value, onChange }) => {
  return (
    <div className={`${language}-code flex-grow`}>
      <h1 className="text-xl font-semibold mb-2">{language.toUpperCase()}</h1>
      <AceEditor
        mode={language}
        theme="monokai"
        value={value}
        onChange={onChange}
        editorProps={{ $blockScrolling: true }}
        fontSize={16}
        className="w-full h-full bg-gray-900 text-white p-2"
      />
    </div>
  );
};

export default Editor;
