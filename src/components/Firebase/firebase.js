import app from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAZw-alD1oDFDYyEir6z5MaveIRetOa24",
  authDomain: "la-hop.firebaseapp.com",
  databaseURL: "https://la-hop.firebaseio.com",
  projectId: "la-hop",
  storageBucket: "la-hop.appspot.com",
  messagingSenderId: "301126645467",
  appId: "1:301126645467:web:19aa1fd9a85e7f72"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }
}

export default Firebase;
