	var kk01=['grade1_1','grade2_1','grade3_1','grade4_1','grade5_1','grade6_1','grade7_1','grade8_1','grade9_1','grade10_1','grade11_1','grade12_1'];
	var kk1=['button_1_1','button_2_1','button_3_1','button_4_1','button_5_1','button_6_1','button_7_1','button_8_1','button_9_1','button_10_1','button_11_1','button_12_1'];
	var kk02=['grade1_2','grade2_2','grade3_2','grade4_2','grade5_2','grade6_2','grade7_2','grade8_2','grade9_2','grade10_2','grade11_2','grade12_2'];
	var kk2=['button_1_2','button_2_2','button_3_2','button_4_2','button_5_2','button_6_2','button_7_2','button_8_2','button_9_2','button_10_2','button_11_2','button_12_2'];
	var kk03=['grade1_3','grade2_3','grade3_3','grade4_3','grade5_3','grade6_3','grade7_3','grade8_3','grade9_3','grade10_3','grade11_3','grade12_3'];
	var kk3=['button_1_3','button_2_3','button_3_3','button_4_3','button_5_3','button_6_3','button_7_3','button_8_3','button_9_3','button_10_3','button_11_3','button_12_3'];
	var kk04=['grade1_4','grade2_4','grade3_4','grade4_4','grade5_4','grade6_4','grade7_4','grade8_4','grade9_4','grade10_4','grade11_4','grade12_4'];
	var kk4=['button_1_4','button_2_4','button_3_4','button_4_4','button_5_4','button_6_4','button_7_4','button_8_4','button_9_4','button_10_4','button_11_4','button_12_4'];
function show(a){
    for (let x = 0; x < kk01.length; x++){
	  var b = document.getElementById(kk01[x]);
	  var c = document.getElementById(kk1[x]);
	  b.style.display = "none";
	  c.style.background = "#0090A4";
	  }
	document.getElementById(a).style.display = "block";
	var d=kk01.indexOf(a);
	document.getElementById(kk1[d]).style.background = "green";
}
function show2(a){
    for (let x = 0; x < kk02.length; x++){
	  var b = document.getElementById(kk02[x]);
	  b.style.display = "none";
	   var c = document.getElementById(kk2[x]);
	   c.style.background = "#1F78C1";
	  }
	document.getElementById(a).style.display = "block";
	var d=kk02.indexOf(a);
	document.getElementById(kk2[d]).style.background = "green";
}

function show3(a){
    for (let x = 0; x < kk03.length; x++){
	  var b = document.getElementById(kk03[x]);
	  b.style.display = "none";
	   var c = document.getElementById(kk3[x]);
	   c.style.background = "#AE71A5";
	  }
	document.getElementById(a).style.display = "block";
	var d=kk03.indexOf(a);
	document.getElementById(kk3[d]).style.background = "green";
}

function show4(a){
    for (let x = 0; x < kk04.length; x++){
	  var b = document.getElementById(kk04[x]);
	  b.style.display = "none";
	   var c = document.getElementById(kk4[x]);
	   c.style.background = "#733A6B";
	  }
	document.getElementById(a).style.display = "block";
	var d=kk04.indexOf(a);
	document.getElementById(kk4[d]).style.background = "green";
}

function result(){
	var res="<b>Працюючи з інформацією, даними, моделями</b> учень/учениця:<br>"
	for (let x = 0; x < kk1.length; x++){
	  var b = document.getElementById(kk1[x]);
	  var c = kk01[x];
		if	  (b.style.background == "green") {res=res+document.getElementById(c).innerHTML;}
	}
	res=res+"<br><b> Створюючи інформаційні продукти</b> учень/учениця:<br>";
	for (let x = 0; x < kk2.length; x++){
	  var b = document.getElementById(kk2[x]);
	  var c = kk02[x];
		if	  (b.style.background == "green") {res=res+document.getElementById(c).innerHTML;}
	}
	res=res+"<br><b> Працюючи в цифровому середовищі </b>учень/учениця:<br>";
	for (let x = 0; x < kk3.length; x++){
	  var b = document.getElementById(kk3[x]);
	  var c = kk03[x];
		if	  (b.style.background == "green") {res=res+document.getElementById(c).innerHTML;}
	}
	res=res+"<br><b> Працюючи з інформаційними технологіями</b> учень/учениця:<br>";
	for (let x = 0; x < kk4.length; x++){
	  var b = document.getElementById(kk4[x]);
	  var c = kk04[x];
		if	  (b.style.background == "green") {res=res+document.getElementById(c).innerHTML;}
	}
	document.getElementById("result").innerHTML=res;
}

function content59(){
  var x = document.getElementById("content59");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function content1012(){
  var x = document.getElementById("content1012");
    var x1 = document.getElementById("contentname");
  if (x.style.display === "none") {
    x.style.display = "block";x1.style.display = "block";
  } else {
    x.style.display = "none";x1.style.display = "none";
  }  
}

function standard(){
  var x = document.getElementById("standard");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function compot(){
  var x = document.getElementById("compot");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function soft(){
  var x = document.getElementById("soft");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function sopen(a){
  var kk=['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','s11'];
  for (let x = 0; x < kk.length; x++){
	  var b = document.getElementById(kk[x]);
	  b.style.display = "none";
	  }
  var x = document.getElementById(a);
  if (x.style.display === "none") {
    x.style.display = "";
  } else {
    x.style.display = "none";
  }
}

function kopen(a){
  var kk=['k1','k2','k3','k4','k5','k6','k7','k8','k9','k10','k11','k12','k13'];
  for (let x = 0; x < kk.length; x++){
	  var b = document.getElementById(kk[x]);
	  b.style.display = "none";
	  }
  var x = document.getElementById(a);
  if (x.style.display === "none") {
    x.style.display = "";
  } else {
    x.style.display = "none";
  }
}

function orients56(){
  var mas = document.getElementsByClassName("orient56"); 
  for (let x = 0; x < mas.length; x++){
  if (mas[x].style.display === "none") {
    mas[x].style.display = "";
	document.getElementById("button_orients56").style.background = "#7163B4";
  } else {
    mas[x].style.display = "none";
	document.getElementById("button_orients56").style.background = "#ada9bb";
  }
  }
}

function orients79(){
  var mas = document.getElementsByClassName("orient79");
  for (let x = 0; x < mas.length; x++){
  if (mas[x].style.display === "none") {
    mas[x].style.display = "";
	document.getElementById("button_orients79").style.background = "#7163B4";	
  } else {
    mas[x].style.display = "none";
	document.getElementById("button_orients79").style.background = "#ada9bb";
  }
  }
}

function orients1op(){
  var mas = document.getElementsByClassName("orient1o");
  for (let x = 0; x < mas.length; x++){
  if (mas[x].style.display === "none") {
    mas[x].style.display = "";
	document.getElementById("button_orients1op").style.background = "#7163B4";
  } else {
    mas[x].style.display = "none";
	document.getElementById("button_orients1op").style.background = "#ada9bb";
  }
  }
  var mas = document.getElementsByClassName("orient1p");
  for (let x = 0; x < mas.length; x++){
  if (mas[x].style.display === "none") {
    mas[x].style.display = "";
	document.getElementById("button_orients1op").style.background = "#7163B4";
  } else {
    mas[x].style.display = "none";
	document.getElementById("button_orients1op").style.background = "#ada9bb";
  }
  }
}


function kors12(){
  var mas = document.getElementsByClassName("kor12"); 
  for (let x = 0; x < mas.length; x++){
  if (mas[x].style.display === "none") {
    mas[x].style.display = "";
	document.getElementById("button_kors12").style.background = "#AE71A5";
  } else {
    mas[x].style.display = "none";
	document.getElementById("button_kors12").style.background = "#ada9bb";
  }
  }
}

function kors34(){
  var mas = document.getElementsByClassName("kor34"); 
  for (let x = 0; x < mas.length; x++){
  if (mas[x].style.display === "none") {
    mas[x].style.display = "";
	document.getElementById("button_kors34").style.background = "#AE71A5";
  } else {
    mas[x].style.display = "none";
	document.getElementById("button_kors34").style.background = "#ada9bb";
  }
  }
}

function kors56(){
  var mas = document.getElementsByClassName("kor56"); 
  for (let x = 0; x < mas.length; x++){
  if (mas[x].style.display === "none") {
    mas[x].style.display = "";
	document.getElementById("button_kors56").style.background = "#AE71A5";
  } else {
    mas[x].style.display = "none";
	document.getElementById("button_kors56").style.background = "#ada9bb";
  }
  }
}

function kors79(){
  var mas = document.getElementsByClassName("kor79"); 
  for (let x = 0; x < mas.length; x++){
  if (mas[x].style.display === "none") {
    mas[x].style.display = "";
	document.getElementById("button_kors79").style.background = "#AE71A5";
  } else {
    mas[x].style.display = "none";
	document.getElementById("button_kors79").style.background = "#ada9bb";
  }
  }
}

function kors10(){
  var mas = document.getElementsByClassName("kor10"); 
  for (let x = 0; x < mas.length; x++){
  if (mas[x].style.display === "none") {
    mas[x].style.display = "";
	document.getElementById("button_kors10").style.background = "#AE71A5";
  } else {
    mas[x].style.display = "none";
	document.getElementById("button_kors10").style.background = "#ada9bb";
  }
  }
}