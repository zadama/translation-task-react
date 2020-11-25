import React, { useState, useRef, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Input from "../components/Input";
import TranslationResult from "../components/TranslationResult";
import { saveTranslationsToUser, getUser } from "../util/storage";

const TranslationPage = (props) => {
  document.body.style.background =
    "linear-gradient(0deg, rgb(234, 239, 244) 57%, rgb(255, 199, 95) 20%)";

  const [signs, setSigns] = useState([]);
  // Useful because we don't need to re-render everything.
  const sentenceToSave = useRef(null);

  const handleClick = (sentence) => {
    const lowerCaseSentence = sentence.toLowerCase();

    if (/^[a-z][a-z\s]*$/.test(lowerCaseSentence)) {
      const signsImages = [];
      for (let index = 0; index < lowerCaseSentence.length; index++) {
        signsImages.push(lowerCaseSentence[index]);
      }

      sentenceToSave.current = lowerCaseSentence;
      setSigns(signsImages);
    } else {
      alert(
        "You can only use letters a-z. Numbers and special characters not allowed."
      );
    }
  };

  const saveTranslation = () => {
    saveTranslationsToUser(sentenceToSave.current);
    sentenceToSave.current = null;

    props.history.replace("/profile");
  };

  return (
    <div>
      <Input
        isTranslationPage={true}
        inputMaxLength={40}
        handleClick={handleClick}
      />
      <div className="translation-results">
        {signs.map((sign, i) => (
          <TranslationResult sign={sign} key={i} />
        ))}
      </div>

      {sentenceToSave.current !== null && (
        <button id="save-translation" onClick={saveTranslation}>
          Save Translation
        </button>
      )}
    </div>
  );
};

export default TranslationPage;
