import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDYcDl71vljggJQy4x6mCxp8F4QGkqA5v8",
      authDomain: "masuperagencejm.firebaseapp.com",
      databaseURL: "https://masuperagencejm.firebaseio.com",
      projectId: "masuperagencejm",
      storageBucket: "masuperagencejm.appspot.com",
      messagingSenderId: "63940882454"
    };
    firebase.initializeApp(config);

  }
}
