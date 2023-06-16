const firebaseConfig = {
    apiKey: "AIzaSyAg9cdvn-QMtyv7ulMNVkctcIyzFJV2A80",
    authDomain: "dentlab-d53d4.firebaseapp.com",
    projectId: "dentlab-d53d4",
    storageBucket: "dentlab-d53d4.appspot.com",
    messagingSenderId: "27060207158",
    appId: "1:27060207158:web:9539976e318f228c0e6297",
    measurementId: "G-WMZK9HN28Q"
  };

  //inicializa meu site com o firebase
firebase.initializeApp(firebaseConfig);

//cria um objeto da authenticação para que eu possa usar seus métodos
const auth = firebase.auth();
//cria um objeto do BD Firestore para que eu possa usar seus métodos
const db = firebase.firestore();