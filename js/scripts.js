// $(document).ready(function(){
//   var blanks = [1];
//   $("form#multiplier").submit(function(event){
//
// var intNumber = parseInt($("input#number").val());
//
// blanks.forEach(function(blank){
//   var total = (intNumber*blank);
//   blanks.pop();
//   blanks.push(total);
//   console.log(total);
//
//   event.preventDefault();
// });
//
//   });
// });

$(document).ready(function(){


  $("form#count").submit(function(event){
    event.preventDefault();

    var countToNumber = parseInt($("input#countTo").val());
    var countByNumber = parseInt($("input#countBy").val());
    var test = (countToNumber/countByNumber);

if (countByNumber&&countToNumber){

  for (var index = 1; index <= test; index += 1){
    var total = countByNumber * index;
    alert(total);
    };
} 


else {
  alert("Please enter a numeric value");
};




});

  });
