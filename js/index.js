$(document).ready(function(){
  $('#btnSay').click(function(){
    $('#dvResult').html('My name is: '+ $('#myname').val());
  })
})