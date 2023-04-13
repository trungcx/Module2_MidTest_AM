import React, { useState } from "react";

function Bai1(props) {
  const [word, setWord] = useState(0);
  const [letter, setLetter] = useState(0);
  const [para, setPara] = useState(0);
  const [myTextArr, setMyTextArr] = useState([]);
  const [inputText, setInputText] = useState([]);
  //
  const handleTextChange = (event) => {
    let text = event.target.value;
    let inputTextArr = text.split(" ");
    if (inputTextArr[inputTextArr.length - 1] == "") {
      inputTextArr.splice(inputTextArr.length - 1, 1);
    }

    setInputText(text);
    setMyTextArr(() => [...inputTextArr]);
    setWord(inputTextArr.length);
    setLetter(text.length);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setPara(para + 1);
    }
  };
  const handleUppercase = () => {
    setInputText(inputText.toUpperCase());
  };
  const handleLowercase = () => {
    setInputText(inputText.toLowerCase());
  };
  //Main return
  return (
    <div>
      {console.log(myTextArr)}
      <h2>Word Counter</h2>
      <div className="count-wrapper">
        <div className="count-item">
          <i className="ti-pencil-alt"></i>
          Word
          <p>{word}</p>
        </div>
        <div className="count-item">
          <i className="ti-pencil-alt"></i>
          Letter
          <p>{letter}</p>
        </div>
        <div className="count-item">
          <i className="ti-pencil-alt"></i>
          Paragraph
          <p>{para}</p>
        </div>
      </div>
      <div className="text-area">
        <textarea
          onChange={handleTextChange}
          placeholder="Enter/Paste Your text here"
          onKeyDown={handleKeyDown}
        ></textarea>
      </div>
      <div className="button-wrapper">
        <button onClick={handleUppercase}> Click to Uppercase </button>
        <button onClick={handleLowercase}> Click to Lowercase</button>
      </div>
    </div>
  );
}

export default Bai1;
