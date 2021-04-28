import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import seedDatabase from '../seed'

const config = {
  apiKey: 'AIzaSyDsGNQvYZfY_VeE5k0CkX1OAuu88BQB4fs',
  authDomain: 'instagram-clone-7dcb0.firebaseapp.com',
  projectId: 'instagram-clone-7dcb0',
  storageBucket: 'instagram-clone-7dcb0.appspot.com',
  messagingSenderId: '314115796127',
  appId: '1:314115796127:web:f3b2c1c53830e1396b46aa'
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore

// console.log('firebase', firebase)
// seedDatabase(firebase)
// debugger
export { firebase, FieldValue }
