import React, { useEffect, useRef } from 'react';

const TextEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey) {
        switch (event.key) {
          case 'b':
            event.preventDefault();
            document.execCommand('bold');
            break;
          case 'i':
            event.preventDefault();
            document.execCommand('italic');
            break;
          case 'u':
            event.preventDefault();
            document.execCommand('underline');
            break;
          default:
            break;
        }
      }
    };

    const editor = editorRef.current;
    editor.addEventListener('keydown', handleKeyDown);

    return () => {
      editor.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Basic Text Editor</h1>
      <div
        ref={editorRef}
        contentEditable
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          minHeight: '200px',
          outline: 'none'
        }}
      >
        Start typing here...
      </div>
    </div>
  );
};

export default TextEditor;
