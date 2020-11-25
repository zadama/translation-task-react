const key = "user";

const addUser = (username) => {
  console.log(username);
  localStorage.setItem(key, JSON.stringify({ username, sentences: [] }));
};

const getUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user;
};

const saveTranslationsToUser = (sentenceToSave) => {
  const user = getUser();

  if (user != null) {
    if (user.sentences.length >= 10) {
      /*
      const oldest = user.sentences.reduce((c, n) =>
        Date.parse(n.date) < Date.parse(c.date) ? n : c
      );*/

      user.sentences.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

      user.sentences.shift();
    }

    user.sentences.push({ sentence: sentenceToSave, date: new Date() });

    localStorage.setItem(key, JSON.stringify(user));
  }
};

const logout = () => {
  localStorage.removeItem(key);
};

export { addUser, getUser, saveTranslationsToUser, logout };
