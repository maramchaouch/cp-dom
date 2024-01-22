var chos = document.getElementById('chosen');
var img1 = document.getElementById('i1');
var img2 = document.getElementById('i2');
var img3 = document.getElementById('i3');
var a = document.getElementsByTagName('div')
var p = document.getElementById("plus");
var m = document.getElementById("moin");
var n = document.getElementById("num");

var prod1 = document.getElementById("p1");
var prod2 = document.getElementById("p2");
var prod3 = document.getElementById("p3");
var p = document.getElementById("prix");

var w;


function select() {
  chos.src = img1.src;
  n.innerHTML = 1;
  p.innerHTML = prod1.innerHTML + ("dt");
  w = prod1.innerHTML;
  document.getElementsByClassName('box2')[0].style.display = 'flex';
}
function select2() {
  chos.src = img2.src;
  n.innerHTML = 1
  p.innerHTML = prod2.innerHTML + ("dt");
  w = prod2.innerHTML
  document.getElementsByClassName('box2')[0].style.display = 'flex';
}
function select3() {

  chos.src = img3.src;
  n.innerHTML = 1
  p.innerHTML = prod3.innerHTML + ("dt");
  w = prod3.innerHTML
  document.getElementsByClassName('box2')[0].style.display = 'flex';
}

function plus() {

  n.innerHTML++


  p.innerHTML = n.innerHTML * w + ("dt")
  
}
function moin() {
  if (n.innerHTML > 1) {
    n.innerHTML--

    p.innerHTML = (n.innerHTML * w) + ("dt")
  }
  else { n.innerHTML = 1 }


}
function sup() {
  document.getElementsByClassName('box2')[0].style.display = 'none';

}