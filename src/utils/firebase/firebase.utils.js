import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, writeBatch, doc, getDoc, setDoc, query, getDocs } from "firebase/firestore";

//firebase setup config from console web
const firebaseConfig = {
  apiKey: "AIzaSyDnWHUzD-keCjkr0GROJ9hfT9clCQ0UKZY",
  authDomain: "crownshoes-faa6a.firebaseapp.com",
  projectId: "crownshoes-faa6a",
  storageBucket: "crownshoes-faa6a.appspot.com",
  messagingSenderId: "662412037294",
  appId: "1:662412037294:web:d3cc604b85b6fa40f6b13f",
  measurementId: "G-RMVYK17YXC",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
})
// facebookProvider.setCustomParameters({
//   prompt: "select_account"
// })

//Signin with google and facebook and twitter
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithFacebookPopup = () =>
  signInWithPopup(auth, facebookProvider);

//lưu dữ liệu user vào firebase database
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  if(!userDocRef) return;
 
  const userSnapShot = await getDoc(userDocRef);
  
  // Nếu có dữ liệu người dùng rồi thì trả về userDocRef
  //Nếu dữ liệu người dùng chưa tồn tại thì tạo 1 user từ data của userAuth
  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }
  return userDocRef;
}
// Tạo new user với email and pass word
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}
//Signin with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}
//listener for current user
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
//Signout
export const signOutUser = async () => {
  await signOut(auth);
}

//firebase: lưu trữ dữ liệu shoe lên firebasedatabase
export const addProductsCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd,
    field
  ) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });
    await batch.commit();
    console.log("done");
  };
// lấy data từ firebase
export const getShoesDocument = async () => {
  const collectionRef = collection(db, 'shoes');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
  return categoryMap;
}