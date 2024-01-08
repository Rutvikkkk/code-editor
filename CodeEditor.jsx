import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import '../Feedback.css';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState(localStorage.getItem('html_code') || '');
  const [cssCode, setCssCode] = useState(localStorage.getItem('css_code') || '');
  const [jsCode, setJsCode] = useState(localStorage.getItem('js_code') || '');
  const [result, setResult] = useState('');
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const runCode = () => {
    localStorage.setItem('html_code', htmlCode);
    localStorage.setItem('css_code', cssCode);
    localStorage.setItem('js_code', jsCode);

    setResult(`<style>${cssCode}</style>` + htmlCode);
    //? Run the JavaScript code in the iframe
    const iframe = document.getElementById('result');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = jsCode;

    try {
      iframe.contentDocument.head.appendChild(script);
    } catch (error) {
      console.error(error);
    }
  };


  const openFeedbackModal = () => {
    setIsFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
  };

  const handleFeedbackChange = (value) => {
    setFeedback(value);
  };

  const handleFeedbackSubmit = () => {
    toast.success('Feedback submitted successfully!', { position: 'bottom-right' });
    setFeedback('');
    closeFeedbackModal();
  };

  // Run the function whenever there is a change in the code
  useEffect(() => {
    runCode();
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="code-editor flex flex-col h-screen">
      <div className="code flex-grow flex p-4">
        <Editor language="html" value={htmlCode} onChange={setHtmlCode} />
        <Editor language="css" value={cssCode} onChange={setCssCode} />
        <Editor language="javascript" value={jsCode} onChange={setJsCode} />
      </div>
      <iframe id="result" title="Result" srcDoc={result} className="w-full h-80"></iframe>
      <button
        onClick={openFeedbackModal}
        className="feedback-btn"
      >
        Give Feedback
      </button>
      <Modal isOpen={isFeedbackModalOpen} onRequestClose={closeFeedbackModal} className="modal">
        <h2 className="text">Feedback</h2>
        <textarea
          className="w-full"
          rows="4"
          placeholder="Enter your feedback..."
          value={feedback}
          onChange={(e) => handleFeedbackChange(e.target.value)}
        />
        <button
          onClick={handleFeedbackSubmit}
          className="feedback-submit-btn mt-2 mx-auto block"
        >
          Submit Feedback
        </button>
        <button
          onClick={closeFeedbackModal}
          className="bg-red-500 text-white px-4 py-2 rounded mt-2 mx-auto block"
        >
          Close
        </button>
      </Modal>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default CodeEditor;
