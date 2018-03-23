import React from 'react';
import * as firebase from 'firebase';


try {
    var firebaseConfig = require("../../.firebase.json");
  } catch (e) {
    var firebaseConfig = {
      production: {
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        apiKey: process.env.FIREBASE_API_KEY,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID
      }
    };
  }
  
var app = firebase.initializeApp(firebaseConfig);
app.database()
class Cappy3DViewer extends React.Component {
  render () {
    console.log(app)
    return (
      <div>
hello



          </div>

    );
  }
}

export default Cappy3DViewer;