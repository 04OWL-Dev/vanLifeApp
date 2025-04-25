import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getFirestore,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA7U9PAPsbyAGkG_6yQzwsml40MzyQtVMI",
  authDomain: "vanlife-ba4f9.firebaseapp.com",
  projectId: "vanlife-ba4f9",
  storageBucket: "vanlife-ba4f9.firebasestorage.app",
  messagingSenderId: "725077931510",
  appId: "1:725077931510:web:becc520b0c7c07949583d7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Refactoring
const vansCollection = collection(db, "vans");

export async function getVans() {
  const vansSnapshot = await getDocs(vansCollection);
  const vansList = vansSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vansList;
}

/* export async function getVans() {
  const response = await fetch("/api/vans");
  if (!response.ok) {
    throw (
      (new Error("Failed to fetch vans"),
      {
        status: response.status,
        statusText: response.statusText,
      })
    );
  } else {
    const data = await response.json();
    return data.vans;
  }
}
 */

export async function getVanDetails(id) {
  const docRef = await doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  const van = vanSnapshot.data();
  van.id = vanSnapshot.id;
  return van;
}

/* export async function getVanDetails(id) {
  const response = await fetch(`/api/vans/${id}`);
  if (!response.ok) {
    throw (
      (new Error("Failed to fetch van details"),
      {
        status: response.status,
        statusText: response.statusText,
      })
    );
  } else {
    const data = await response.json();
    return data.vans;
  }
} */

export async function getHostVans() {
  // TODO: Replace "123" with the actual host ID once authentication is implemented
  const condition = query(vansCollection, where("hostId", "==", "123"));
  const vansSnapshot = await getDocs(condition);
  const vansList = vansSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vansList;
}

/* export async function getHostVans() {
  const response = await fetch("/api/host/vans");
  if (!response.ok) {
    throw (
      (new Error("Failed to fetch host's vans"),
      {
        status: response.status,
        statusText: response.statusText,
      })
    );
  } else {
    const data = await response.json();
    return data.vans;
  }
} */

/* export async function getHostVanDetails(id) {
  const response = await fetch(`/api/host/vans/${id}`);
  if (!response.ok) {
    throw (
      (new Error("Failed to fetch host's van details"),
      {
        status: response.status,
        statusText: response.statusText,
      })
    );
  } else {
    const data = await response.json();
    return data.vans;
  }
} */

export async function loginUser(creds) {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(creds),
  });
  const data = await response.json();
  if (!response.ok) {
    throw {
      message: data.message,
      statusText: response.statusText,
      status: response.status,
    };
  }
  return data;
}
