const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firestore);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello Firebase!!");
});
const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notification")
    .add(notification)
    .then((doc) => console.log("notification", doc));
};
exports.itemCreated = functions.firestore
  .document("items/{item}")
  .onCreate((doc) => {
    const item = doc.data();
    const notification = {
      content: "Added a new item",
      state: `${item.pickupState} to ${item.deliveryState}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotification(notification);
  });

exports.userCreated = functions.firestore
  .document("users/{user}")
  .onCreate((doc) => {
    const user = doc.data();
    const notification = {
      content: "Joined the party",
      state: `${user.firstName}  ${user.lastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotification(notification);
  });
