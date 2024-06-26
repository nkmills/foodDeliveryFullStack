import { setDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase.config";

// This is for saving new items
export const saveItem = async (data) => {
    await setDoc(
        doc(firestore, 'foodItems', `${Date.now()}`), data, { 
            merge: true,
    });
};