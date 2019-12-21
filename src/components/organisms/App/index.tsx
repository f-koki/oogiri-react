import React from "react";
import Header from "../../molecules/Header";
import Contents from "../Contents";
import Footer from "../../molecules/Footer";
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAOvxYUIFXeRNdjJt6hL7673z3wXZDgfa4",
  authDomain: "moon-ogiri.firebaseapp.com",
  databaseURL: "https://moon-ogiri.firebaseio.com",
  projectId: "moon-ogiri",
  storageBucket: "moon-ogiri.appspot.com",
  messagingSenderId: "956945824736",
  appId: "1:956945824736:web:ad64ff6a2494167f2d8985",
  measurementId: "G-Q8Q298B81Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
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
