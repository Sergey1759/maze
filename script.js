var div = document.getElementsByTagName('div');
var row_start = 0;
var row_finish = div.length - 1;
//console.log(div[0].getElementsByTagName('span').length);

var arr = [];

function ArrayArrays(arr,length){
    for(var i = 0; i < length; i++){
        arr[i] = [];
    }
    return arr;
}
console.log(ArrayArrays(arr,div.length));

var start = {
  x : 0,
  y : 0
}
var finish = {
  x : 0,
  y : 0
}
var now = {
    x : 0,
    y : 0
  }

function find(row,value,obj){
  for(var i = 0; i < div[row].getElementsByTagName('span').length; i++){
    if(div[row].getElementsByTagName('span')[i].className == value){
      obj.x = row;
      obj.y = i;
    }
  }
  //console.log('obj.x =' + obj.x);
  //console.log('obj.y =' + obj.y);
}

find(row_start,'enter',start);
find(row_finish,'exit',finish);

for(var i = row_start+1; i < row_finish; i++){
  for(var j = 0; j < div[i].getElementsByTagName('span').length; j++){
    div[i].getElementsByTagName('span')[j].id = i +"."+ j;
    if(div[i].getElementsByTagName('span')[j].className == "wall"){
      //div[i].getElementsByTagName('span')[j].style.background = "red";
      arr[i][j] = 1;
    } else {
        arr[i][j] = 0;
    }
  }
}
console.log(arr);

function verify(arr,obj){
    var bufObj = {
        left   : false,
        right  : false,
        top    : false,
        bottom : false
    };
    if(arr[obj.x - 1][obj.y    ]  == 0 && obj.x != start.x && obj.x != start.x) { // x-
        bufObj.left = true;
    } 
    if(arr[obj.x    ][obj.y + 1]  == 0) {
        bufObj.top = true;
    } // y+
    if(arr[obj.x + 1][obj.y    ]  == 0) {
        bufObj.right = true;
    } // x+
    if(arr[obj.x    ][obj.y - 1]  == 0) {
        bufObj.bottom = true;
    } // y-

}

// while(now != finish){
//     if(now.x == 0 && now.y == 0) {now.x = start.x; now.y = start.y + 1}

// }

  
