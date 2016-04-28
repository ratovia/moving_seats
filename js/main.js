function all_lottery(){
  $.getJSON("http://192.168.11.3/moving_seats/js/names.json" , function(data){
    for(var i = 1;i < 7;i++) {
      for(var j = 1;j < 7;j++){
        var idx = getRandomInt(0,data.length);
        var value = data[idx];
        data.splice( idx, idx);
        var tag = "#td" + i + "-" + j;
        $(tag).text(value.name);
      }
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
  all_lottery();
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
