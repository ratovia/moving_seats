var a = new Array(10);
var b = new Array(10);
var flag = new Array(10);
function all_lottery(){
  $.getJSON("http://192.168.11.3/moving_seats/js/names.json" , function(data){
    for(var i = 1;i < 7;i++) {
      for(var j = 1;j < 7;j++){
        var idx = getRandomInt(0,data.length - 1);
        var value = data[idx];
        data.splice( idx, 1);
        var tag = "#td" + i + "-" + j;
        $(tag).text(value.name);
        $(tag).css('background-color','#4cbac9');
      }
    }

    for(var n = 0;n < 10;n++){
      a[n] = getRandomInt(1,6);
      b[n] = getRandomInt(1,6);
      var tag = "#td" + a[n] + "-" + b[n];
      $(tag).text("抽選");
      $(tag).css('background-color', '#ffffff');
    }
  });
};

function create_table(){
  var masume;
  for(var i = 1; i < 7;i++){
    masume += "<tr>";
    for(var j = 1;j < 7;j++){
      masume += "<td class='tables' id='td" + i + "-" + j + "'></td>";
    }
    masume += "</tr>"
  }
  $("#table").append(masume);
}

function personal_lottery(name){
  var num = getRandomInt(0,9);
  if(flag[num]){
    var tag = "#td" + a[num] + "-" + b[num];
    $(tag).text(name);
    $(tag).css('background-color','#509ac9');
    flag[num] = false;
  }else{
    num = getRandomInt(0,9);
    if(flag[num]){
      var tag = "#td" + a[num] + "-" + b[num];
      $(tag).text(name);
      $(tag).css('background-color', '#509ac9');
      flag[num] = false;
    }else{
      num = getRandomInt(0,9);
      if(flag[num]){
        var tag = "#td" + a[num] + "-" + b[num];
        $(tag).text(name);
        $(tag).css('background-color','#509ac9');
        flag[num] = false;
      }
    }
  }
  alert("抽選したよ！");
}

window.addEventListener("load",function(eve){
  create_table();
},false);

$("#all_lottery").click(function(){
  all_lottery();
  for(var i = 0;i < 10;i++){
    flag[i] = true;
  }
});

$("#personal_lottery").click(function(){
  var txt = $('#selection option:selected').text();
  personal_lottery(txt);
});

function getRandomInt(min,max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}

$(".tables").click(function(){
  console.log("click")
  var name = $(".tables").text();
  console.log(name);
  var url = "https://www.google.co.jp/search?q=" + name + "&biw=1061&bih=568&espv=2&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjKgI6T07TMAhUELaYKHY6hAq8Q_AUIBigB"
  window.open(url, '_blank');
});
