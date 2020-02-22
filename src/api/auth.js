import * as firebase from 'firebase';

export default {
  fireBaseUserSignUp(cb, errorCb, email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(resp => cb(resp.uid))
      .catch(error => errorCb(error.message));
  },
};
