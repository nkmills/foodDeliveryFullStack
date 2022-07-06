import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBq8NlHzlxG1WmTsOxeUgrx7WdEUPHqlvc",
  authDomain: "fooddeliveryapp-5a65a.firebaseapp.com",
  databaseURL: "https://fooddeliveryapp-5a65a-default-rtdb.firebaseio.com",
  projectId: "fooddeliveryapp-5a65a",
  storageBucket: "fooddeliveryapp-5a65a.appspot.com",
  messagingSenderId: "991876410542",
  appId: "1:991876410542:web:997a12560b98d45779d13f",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
