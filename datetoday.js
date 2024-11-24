function showClock2() {
   var fulldata = new Date();
   var year = fulldata.getFullYear();
  var month=fulldata.getMonth()+1;
  var day=fulldata.getDate();
  var dayvalue=fulldata.getDay();
  var temp=new Array("日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日");
document.getElementById("datevalue").innerHTML=("今日は"+year+"年"+month+"月"+day+"日"+temp[dayvalue]+"です")
}
setInterval('showClock2()',1000);
