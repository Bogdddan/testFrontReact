import React, { useState } from 'react';
import './Form.css';

var zxcvbn = require("zxcvbn")
function Form() {
  const [type, setType] = useState("input");
  const [score, setScore] = useState("null");

  const showHide = (e) => {
    e.preventDefault()
    e.stopPropagation()
    let currentType = type === "input" ? "password" : "input"
    setType(currentType)
  }

  const testStrengthPassword = (e) => {
    if (e.target.value !== "") {
      let pass = zxcvbn(e.target.value)
      setScore(pass.score)
    }else{
      setScore("null")
    }
  }

  return (
    <form>
      <label className="label-password">
      Password
      <input 
        type={type}
        className="input-password"
        onChange={testStrengthPassword}
      />
      <span className="show-password" onClick={showHide}>
        {type === "input" ? "Hide" : "Show"}
      </span>
      <span
        className="strength-password"
        data-score={score}
      />
    </label>
    </form>
  );
}

export default Form;