import * as firebase from 'firebase';
import moment from 'moment';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
// database.ref('notes/-M8SHuCDDzOeDJdfI_hX').update({
//   title: 'Love Story',
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on(
//   'value',
//   (snapshot) => {
//     // console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   },
//   (e) => {
//     console.log('error fetching data', e);
//   }
// );
// database.ref('expenses').push({
//   description: 'Coffee',
//   note: 'Drink',
//   amount: 10000,
//   createdAt: '10',
// });

// const onValueChange = database.ref().on(
//   'value',
//   (snapshot) => {
//     const data = snapshot.val();
//     const { name, job } = data;
//     console.log(`${name} is a  ${job.title} at ${job.company}`);
//   },
//   (e) => {
//     console.log('error fetching data', e);
//   }
// );

// setTimeout(() => {
//   database.ref('name').set('Ronaldo Delogo');
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log('Err: ', e);
//   });
// // Insert data in FireBase
// database
//   .ref()
//   .set({
//     name: 'Reda Elamri',
//     age: 39,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Fox Web Creations',
//     },
//     location: {
//       city: 'Kansas City',
//       country: 'USA',
//     },
//   })
//   .then(() => {
//     console.log('Data saved!');
//   })
//   .catch((err) => {
//     console.log('Err:', err);
//   });

// /// update can add remove and update fileds
// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//   })
//   .then(() => {
//     console.log('Data Changed');
//   })
//   .catch((e) => {
//     console.log('Err : ', e);
//   });

// Remove data can also be accomplished with set(null)
// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('isSingle Removed');
//   })
//   .catch((err) => {
//     console.log('Error:', err);
//   });
