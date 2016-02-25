module.exports = [function () {
  console.log(3);
  return {
    setTemplate: function(){
      console.log('setTemplate');
    },
    
    show: function(){
      console.log('show');
    }
  };
}];