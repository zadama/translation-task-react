import React, { useEffect, useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import AlertModal from "../components/AlertModal";
import TranslationResults from "../components/TranslationResult";
import { getUser, logout as logoutUser } from "../util/storage";

// Gör profilepage snyggare med meningarna (typ list såsom tailwind?vueappen?)
// lägg till react spring?

const ProfilePage = (props) => {
  document.body.style.background =
    "linear-gradient(0deg, #eaeff4 72%, #ffc75f 20%)";

  const [state, setState] = useState({
    showModal: false,
    senetenceToTranslate: "",
  });

  console.log(state);

  const logout = () => {
    logoutUser();

    props.history.replace("/");
  };

  const closeModal = () => {
    setState({ ...state, showModal: false });
  };

  return (
    <React.Fragment>
      <button id="btnLogout" onClick={logout}>
        Logout
      </button>

      {state.showModal && (
        <AlertModal closeModal={closeModal}>
          <React.Fragment>
            {state.senetenceToTranslate.split("").map((sign, i) => (
              <TranslationResults key={i} sign={sign} />
            ))}
          </React.Fragment>
        </AlertModal>
      )}

      <ol>
        {getUser().sentences.map((obj, i) => {
          return (
            <li
              onClick={() => {
                setState({
                  ...state,
                  senetenceToTranslate: obj.sentence,
                  showModal: true,
                });
              }}
              key={i}
            >
              {obj.sentence}
            </li>
          );
        })}
      </ol>
    </React.Fragment>
  );
};

export default ProfilePage;
