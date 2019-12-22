import React from "react";
import Header from "../../molecules/Header";
import Contents from "../Contents";
import Footer from "../../molecules/Footer";
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCxe9KJsLa6szLG6dYtWS0m0UKAO9FZEs0",
  authDomain: "moon-ogiri-9cb45.firebaseapp.com",
  databaseURL: "https://moon-ogiri-9cb45.firebaseio.com",
  projectId: "moon-ogiri-9cb45",
  storageBucket: "moon-ogiri-9cb45.appspot.com",
  messagingSenderId: "179545196501",
  appId: "1:179545196501:web:6356332520f82a0130df5c",
  measurementId: "G-6N2KQD6S2G"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.analytics();

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Contents />
        <Footer />
      </div>
    );
  }
}

export default App;
