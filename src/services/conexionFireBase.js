
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC346iakeEROSaYCTRxaXuKLwDV8yzSuxs",
    authDomain: "tiendasurajfv.firebaseapp.com",
    projectId: "tiendasurajfv",
    storageBucket: "tiendasurajfv.appspot.com",
    messagingSenderId: "109431624251",
    appId: "1:109431624251:web:71303b5cda5ea68453c21e",
    measurementId: "G-FE7P2PTBSH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
