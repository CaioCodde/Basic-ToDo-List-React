import { useState } from "react";
import * as React from "react";
import Footer from "./footer";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);

  const updatedInput = (event) => {
    setInputText(event.target.value);
  };

  const transfer = (p) => {
    p.preventDefault();
    if (inputText) {
      setComments([...comments, inputText]);
      setInputText("");
      return;
    } else {
      window.alert("Please type something");
    }
  };

  return (
    <div>
      <form>
        <input
          value={inputText}
          placeholder="Type something"
          onChange={updatedInput}
        />
        <button type="submit" onClick={transfer}>
          Add
        </button>
      </form>

      <footer>
        <ul>
          {comments.map((c) => (
            <Footer text={c} />
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Todo;
