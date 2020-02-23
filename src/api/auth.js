import { auth, firestore } from 'firebase';

export default {
  async fireBaseUserSignUp(cb, errorCb, userDetail) {
    const signupResp = await auth()
      .createUserWithEmailAndPassword(userDetail.email, userDetail.password)
      .catch(error => errorCb(error.message));

    delete userDetail.retypePassword;
    firestore()
      .collection('users')
      .add({ ...userDetail, uid: signupResp.user.uid })
      .then(() => cb(signupResp.user.uid))
      .catch(error => errorCb(error.message));
  },
};
