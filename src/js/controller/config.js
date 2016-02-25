export default [
  {
    name: 'headerController',
    controller: require('./header/headerController.js'),
  },
  {
    name: 'sshController',
    controller: require('./ssh/sshController.js'),
  },
  {
    name: 'installLocalController',
    controller: require('./install/installLocalController.js'),
  }
];