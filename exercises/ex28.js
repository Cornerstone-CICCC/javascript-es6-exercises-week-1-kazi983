/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  name: 'Kazi',
  numberOfFriends: 10,
  messages: ['Hi', 'Good morning', 'Bye'],
  postMessage: function postMessage(message) {
    this.messages.push(message);
  },
  deleteMessage: function deleteMessage(index) {
    this.messages.splice(index, 1);
  },
  addFriend: function addFriend() {
    this.numberOfFriends++;
    console.log(this.messages.numberOfFriends);
  },
  removeFriend: function removeFriend() {
    this.numberOfFriends--;
    console.log(this.messages.numberOfFriends);
  },
};

facebookProfile.postMessage('Ola');
console.log('facebookProfile :>> ', facebookProfile);
facebookProfile.deleteMessage(1);
console.log('facebookProfile :>> ', facebookProfile);
facebookProfile.addFriend();
console.log('facebookProfile :>> ', facebookProfile);
facebookProfile.removeFriend();
console.log('facebookProfile :>> ', facebookProfile);
