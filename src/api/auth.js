import { auth } from 'firebase';

export default {
  fireBaseUserSignUp(cb, errorCb, email, password) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(resp => cb(resp.uid))
      .catch(error => errorCb(error.message));
  },
};
