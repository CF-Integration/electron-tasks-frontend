module.exports = ['$scope', 'modal', function footerController($scope, modal) {
  $scope.form = {};
  modal.setTemplate();
  
  
  $scope.$on('submit', function(){
    modal.show();
  });
  
  // $scope.$on('micro::start', function microStart() {
  //   stt.setDebug(true).start();
  // });
  // $scope.$observe('micro', function(){
  //   console.log('load');
  // });
  // stt.setDebug(true).start();
}];