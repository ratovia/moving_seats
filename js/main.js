var a = new Array(10);
var b = new Array(10);


function all_lottery(){
  $.getJSON("http://192.168.11.3/moving_seats/js/names.json" , function(data){
    for(var i = 1;i < 7;i++) {
      for(var j = 1;j < 7;j++){
        var idx = getRandomInt(0,data.length - 1);
        var value = data[idx];
        data.splice( idx, 1);
        var tag = "#td" + i + "-" + j;
        $(tag).text(value.name);
      }
    }

    for(var n = 0;n < 10;n++){
      a[n] = getRandomInt(1,7);
      b[n] = getRandomInt(1,7);
      var tag = "#td" + a[n] + "-" + b[n];
      $(tag).text(抽選);
    }
  });
};

function create_table(){
  var masume;
  for(var i = 1; i < 7;i++){
    masume += "<tr>";
    for(var j = 1;j < 7;j++){
      masume += "<td id='td" + i + "-" + j + "'></td>";
    }
    masume += "</tr>"
  }
  $("#table").append(masume);
}

function personal_lottery(){

}

window.addEventListener("load",function(eve){
  create_table();
},false);

$("#all_lottery").click(function(){
  all_lottery();
});

$("#personal_lottery").click(function(){
  personal_lottery();
});

function getRandomInt(min,max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}
