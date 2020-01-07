import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exo-library';

  constructor() {
    const config = {
      apiKey: 'AIzaSyC2h5oOl9ph_e3oFL9--aT31VnKqs6YYTk',
      authDomain: 'exercice-library-openclassroom.firebaseapp.com',
      databaseURL: 'https://exercice-library-openclassroom.firebaseio.com',
      projectId: 'exercice-library-openclassroom',
      storageBucket: 'exercice-library-openclassroom.appspot.com',
      messagingSenderId: '252229163737',
      appId: '1:252229163737:web:bd6b2d765e2bb6bf703cc8'
    };
    firebase.initializeApp(config);
  }
}
