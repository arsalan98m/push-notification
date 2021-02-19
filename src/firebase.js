import firebase from "firebase/app";
import "firebase/messaging";

const config = {
    apiKey: "AIzaSyBPSpiKrAkOmRa_L3ogNzkeZf3F2g55my8",
  authDomain: "notification-app-76070.firebaseapp.com",
  projectId: "notification-app-76070",
  storageBucket: "notification-app-76070.appspot.com",
  messagingSenderId: "766452421833",
  appId: "1:766452421833:web:5f5c93006291485109e918",
  measurementId: "G-NEGB1XQFD8"
}

firebase.initializeApp(config);

export default firebase;
