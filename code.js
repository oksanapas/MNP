var ifo11=0;
var ifo12=0;
var ifo13=0;
var ifo14=0;
var ifo1=0;
var ifo2=0;
var ifo3=0;
var ifo4=0;
var b1 = 0;
function myFunction71() {
	let mas=[11,12,14,25,31,32,33,41,42,111,121,123,141,143,251,311,312,321,331,411,421,1111,1211,1213,1234,1413,1431,2512,3111,3113,3121,3211,3212,3311,3317,4111,4112,4113,4213];	
	if (b1 == 0) {
		document.getElementById("button71").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b1 = 1;
		ifo11=ifo11+6;
		ifo12=ifo12+1;
		ifo13=ifo13+7;
		ifo14=ifo14+4;
		document.getElementById("topic71").style.display="";
		document.getElementById("topic71n").style.display="";
	}
 else { 
    document.getElementById("button71").style.background = "#AE71A5";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b1 = 0;
		ifo11=ifo11-6;
		ifo12=ifo12-1;
		ifo13=ifo13-7;
		ifo14=ifo14-4;
		document.getElementById("topic71").style.display="none";
		document.getElementById("topic71n").style.display="none";
  }
  	document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
	
}

var b2 = 0;
function myFunction72() {
	let mas=[11,12,14,24,25,32,33,41,42,112,123,141,143,243,252,253,254,321,331,412,413,421,1121,1123,1231,1233,1235,1411,1412,1432,1434,2439,2521,2522,2531,2542,3214,3313,3314,3315,3316,3317,4121,4131,4132,4212];	
	if (b2 == 0) {
		document.getElementById("button72").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b2 = 1;
		ifo11=ifo11+9;
		ifo12=ifo12+5;
		ifo13=ifo13+6;
		ifo14=ifo14+4;	
		document.getElementById("topic72").style.display="";
		document.getElementById("topic72n").style.display="";		
	}
 else { 
    document.getElementById("button72").style.background = "#AE71A5";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b2 = 0;
		ifo11=ifo11-9;
		ifo12=ifo12-5;
		ifo13=ifo13-6;
		ifo14=ifo14-4;
		document.getElementById("topic72").style.display="none";
		document.getElementById("topic72n").style.display="none";
  }
   	document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
	
}


var b3 = 0;
function myFunction73() {
	let mas=[11,12,14,24,25,33,41,43,111,123,124,125,142,241,242,243,251,331,413,432,1111,1231,1241,1242,1243,1251,1421,2411,2421,2422,2431,2433,24310,24311,2511,3316,4131,4322,4324,4326];	
	if (b3 == 0) {
		document.getElementById("button73").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b3 = 1;
		ifo11=ifo11+7;
		ifo12=ifo12+8;
		ifo13=ifo13+1;
		ifo14=ifo14+4;	
		document.getElementById("topic73").style.display="";
		document.getElementById("topic73n").style.display="";
	}
 else { 
    document.getElementById("button73").style.background = "#AE71A5";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b3 = 0;		
		ifo11=ifo11-7;
		ifo12=ifo12-8;
		ifo13=ifo13-1;
		ifo14=ifo14-4;
		document.getElementById("topic73").style.display="none";
		document.getElementById("topic73n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
	
}

var b4 = 0;
function myFunction74() {
	let mas=[11,12,14,24,25,33,42,43,112,123,125,143,242,243,251,331,421,422,432,1123,1234,1252,1434,2421,2422,2431,2432,2437,2438,24310,24311,2511,3317,4211,4213,4224,4323,4324];	
	if (b4 == 0) {
		document.getElementById("button74").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b4 = 1;
		ifo11=ifo11+4;
		ifo12=ifo12+9;
		ifo13=ifo13+1;
		ifo14=ifo14+5;	
		document.getElementById("topic74").style.display="";
		document.getElementById("topic74n").style.display="";
	}
 else { 
    document.getElementById("button74").style.background = "#AE71A5";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b4 = 0;
		ifo11=ifo11-4;
		ifo12=ifo12-9;
		ifo13=ifo13-1;
		ifo14=ifo14-5;
		document.getElementById("topic74").style.display="none";
		document.getElementById("topic74n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
	
}

var b5 = 0;
function myFunction75() {
	let mas=[11,12,13,21,22,24,31,32,43,113,125,131,211,212,221,222,243,311,321,432,1132,1251,1317,2111,2113,2121,2212,2222,2224,24311,3112,3213,4326];	
	if (b5 == 0) {
		document.getElementById("button75").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b5 = 1;
		ifo11=ifo11+3;
		ifo12=ifo12+7;
		ifo13=ifo13+2;
		ifo14=ifo14+1;
		document.getElementById("topic75").style.display="";
		document.getElementById("topic75n").style.display="";
	}
 else { 
    document.getElementById("button75").style.background = "#AE71A5";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b5 = 0;
		ifo11=ifo11-3;
		ifo12=ifo12-7;
		ifo13=ifo13-2;
		ifo14=ifo14-1;
		document.getElementById("topic75").style.display="none";
		document.getElementById("topic75n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
	
}

var b6 = 0;
function myFunction76() {
	let mas=[11,12,14,24,25,32,41,42,111,112,113,121,124,141,142,241,242,243,251,253,321,413,421,1112,1121,1133,1211,1244,1412,1413,1414,1421,2411,2421,2422,2431,2436,24310,24311,2511,2531,2533,3211,4131,4132,4212];	
	if (b6 == 0) {
		document.getElementById("button76").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b6 = 1;
		ifo11=ifo11+9;
		ifo12=ifo12+10;
		ifo13=ifo13+1;
		ifo14=ifo14+3;
		document.getElementById("topic76").style.display="";
		document.getElementById("topic76n").style.display="";
	}
 else { 
    document.getElementById("button76").style.background = "#AE71A5";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b6 = 0;
		ifo11=ifo11-9;
		ifo12=ifo12-10;
		ifo13=ifo13-1;
		ifo14=ifo14-3;
		document.getElementById("topic76").style.display="none";
		document.getElementById("topic76n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
	
}

var b7 = 0;
function myFunction81() {
	let mas=[11,12,14,24,31,32,33,41,42,43,112,113,122,124,143,242,311,312,321,322,331,411,422,431,432,1122,1131,1221,1244,1433,2422,3111,3121,3212,3213,3221,3312,4111,4222,4311,4325,4326];	
	if (b7 == 0) {
		document.getElementById("button81").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b7 = 1;
		ifo11=ifo11+5;
		ifo12=ifo12+1;
		ifo13=ifo13+6;
		ifo14=ifo14+5;	
		document.getElementById("topic81").style.display="";
		document.getElementById("topic81n").style.display="";		
	}
 else { 
    document.getElementById("button81").style.background = "#733A6B";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b7 = 0;
		ifo11=ifo11-5;
		ifo12=ifo12-1;
		ifo13=ifo13-6;
		ifo14=ifo14-5;
		document.getElementById("topic81").style.display="none";
		document.getElementById("topic81n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
}

var b8 = 0;
function myFunction82() {
	let mas=[11,12,13,24,32,43,113,123,124,125,131,242,243,321,432,1131,1232,1241,1242,1251,1313,1315,2422,2431,2434,2435,3214,4321];	
	if (b8 == 0) {
		document.getElementById("button82").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b8 = 1;
		ifo11=ifo11+7;
		ifo12=ifo12+4;
		ifo13=ifo13+1;
		ifo14=ifo14+1;
		document.getElementById("topic82").style.display="";
		document.getElementById("topic82n").style.display="";
	}
 else { 
    document.getElementById("button82").style.background = "#733A6B";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b8 = 0;
		ifo11=ifo11-7;
		ifo12=ifo12-4;
		ifo13=ifo13-1;
		ifo14=ifo14-1;
		document.getElementById("topic82").style.display="none";
		document.getElementById("topic82n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
}

var b9 = 0;
function myFunction83() {
	let mas=[12,21,22,23,25,31,32,43,122,211,212,221,222,231,251,311,312,321,432,1221,2111,2112,2113,2122,2213,2222,2312,2511,3112,3121,3213,4326];	
	if (b9 == 0) {
		document.getElementById("button83").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b9 = 1;
		ifo11=ifo11+1;
		ifo12=ifo12+8;
		ifo13=ifo13+3;
		ifo14=ifo14+1;
		document.getElementById("topic83").style.display="";
		document.getElementById("topic83n").style.display="";
	}
 else { 
    document.getElementById("button83").style.background = "#733A6B";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b9 = 0;
		ifo11=ifo11-1;
		ifo12=ifo12-8;
		ifo13=ifo13-3;
		ifo14=ifo14-1;
		document.getElementById("topic83").style.display="none";
		document.getElementById("topic83n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
}

var b10 = 0;
function myFunction84() {
	let mas=[11,12,22,24,25,31,42,43,113,124,221,222,242,243,253,254,311,422,431,432,1133,1241,1242,1243,2215,2223,2421,2431,2433,2534,2541,3112,4221,4222,4223,4311,4321,4325];	
	if (b10 == 0) {
		document.getElementById("button84").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b10 = 1;
		ifo11=ifo11+4;
		ifo12=ifo12+7;
		ifo13=ifo13+1;
		ifo14=ifo14+6;
		document.getElementById("topic84").style.display="";
		document.getElementById("topic84n").style.display="";
	}
 else { 
    document.getElementById("button84").style.background = "#733A6B";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b10 = 0;
		ifo11=ifo11-4;
		ifo12=ifo12-7;
		ifo13=ifo13-1;
		ifo14=ifo14-6;
		document.getElementById("topic84").style.display="none";
		document.getElementById("topic84n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
}

var b11 = 0;
function myFunction85() {
	let mas=[11,12,22,23,24,25,33,42,43,112,123,221,222,231,241,243,251,254,331,422,432,1121,1123,1231,1233,2214,2215,2223,2224,2312,2411,2437,2438,2431,24310,2511,2543,3313,3314,3315,4221,4223,4224,4326];	
	if (b11 == 0) {
		document.getElementById("button85").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b11 = 1;
		ifo11=ifo11+4;
		ifo12=ifo12+12;
		ifo13=ifo13+3;
		ifo14=ifo14+4;
		document.getElementById("topic85").style.display="";
		document.getElementById("topic85n").style.display="";
	}
 else { 
    document.getElementById("button85").style.background = "#733A6B";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b11 = 0;
		ifo11=ifo11-4;
		ifo12=ifo12-12;
		ifo13=ifo13-3;
		ifo14=ifo14-4;
		document.getElementById("topic85").style.display="none";
		document.getElementById("topic85n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
}

var b12 = 0;
function myFunction86() {
	let mas=[11,12,14,24,25,33,42,43,111,121,141,241,242,243,251,253,254,331,422,432,1113,1213,1411,2411,2421,2422,2431,2433,2439,24310,24311,2511,2532,2534,2541,3313,3314,3315,4224,4324];	
	if (b12 == 0) {
		document.getElementById("button86").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b12 = 1;
		ifo11=ifo11+3;
		ifo12=ifo12+12;
		ifo13=ifo13+3;
		ifo14=ifo14+2;
		document.getElementById("topic86").style.display="";
		document.getElementById("topic86n").style.display="";
	}
 else { 
    document.getElementById("button86").style.background = "#733A6B";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b12 = 0;
		ifo11=ifo11-3;
		ifo12=ifo12-12;
		ifo13=ifo13-3;
		ifo14=ifo14-2;
		document.getElementById("topic86").style.display="none";
		document.getElementById("topic86n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
}

var b13 = 0;
function myFunction91() {
	let mas=[11,12,13,22,25,31,32,41,43,111,113,121,123,131,132,222,251,311,312,321,412,432,1113,1132,1133,1212,1235,1312,1315,1316,1321,2224,2512,3111,3121,3213,4122,4324];	
	if (b13 == 0) {
		document.getElementById("button91").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b13 = 1;
		ifo11=ifo11+9;
		ifo12=ifo12+2;
		ifo13=ifo13+3;
		ifo14=ifo14+2;
		document.getElementById("topic91").style.display="";
		document.getElementById("topic91n").style.display="";
	}
 else { 
    document.getElementById("button91").style.background = "#7163B4";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b13 = 0;
		ifo11=ifo11-9;
		ifo12=ifo12-2;
		ifo13=ifo13-3;
		ifo14=ifo14-2;
		document.getElementById("topic91").style.display="none";
		document.getElementById("topic91n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
}

var b14 = 0;
function myFunction92() {
	let mas=[11,12,14,21,22,24,32,33,112,113,122,123,124,143,211,212,222,242,243,321,331,412,1122,1131,1221,1231,1235,1244,1432,1433,2112,2114,2122,2222,2421,2434,2435,3211,3312,4123];	
	if (b14 == 0) {
		document.getElementById("button92").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b14 = 1;
		ifo11=ifo11+8;
		ifo12=ifo12+7;
		ifo13=ifo13+2;
		ifo14=ifo14+1;
		document.getElementById("topic92").style.display="";
		document.getElementById("topic92n").style.display="";
	}
 else { 
    document.getElementById("button92").style.background = "#7163B4";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b14 = 0;
		ifo11=ifo11-8;
		ifo12=ifo12-7;
		ifo13=ifo13-2;
		ifo14=ifo14-1;
		document.getElementById("topic92").style.display="none";
		document.getElementById("topic92n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
}

var b15 = 0;
function myFunction93() {
	let mas=[11,12,13,24,25,31,43,112,113,121,131,132,242,243,251,311,432,1122,1132,1212,1311,1312,1314,1315,1316,1322,1323,2421,2422,2431,2433,24310,24311,2511,3112,4325];	
	if (b15 == 0) {
		document.getElementById("button93").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b15 = 1;
		ifo11=ifo11+10;
		ifo12=ifo12+7;
		ifo13=ifo13+1;
		ifo14=ifo14+1;
		document.getElementById("topic93").style.display="";
		document.getElementById("topic93n").style.display="";
	}
 else { 
    document.getElementById("button93").style.background = "#7163B4";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b15 = 0;
		ifo11=ifo11-10;
		ifo12=ifo12-7;
		ifo13=ifo13-1;
		ifo14=ifo14-1;
		document.getElementById("topic93").style.display="none";
		document.getElementById("topic93n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
}

var b16 = 0;
function myFunction94() {
	let mas=[11,12,13,21,22,23,25,31,32,42,43,111,121,131,211,212,221,222,231,232,233,251,254,311,322,422,432,1113,1211,1314,1317,2112,2114,2123,2211,2212,2214,2215,2221,2223,2311,2321,2331,2512,2543,3113,3221,4223,4224,4324];	
	if (b16 == 0) {
		document.getElementById("button94").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b16 = 1;
		ifo11=ifo11+4;
		ifo12=ifo12+14;
		ifo13=ifo13+2;
		ifo14=ifo14+3;
		document.getElementById("topic94").style.display="";
		document.getElementById("topic94n").style.display="";
	}
 else { 
    document.getElementById("button94").style.background = "#7163B4";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b16 = 0;
		ifo11=ifo11-4;
		ifo12=ifo12-14;
		ifo13=ifo13-2;
		ifo14=ifo14-3;
		document.getElementById("topic94").style.display="none";
		document.getElementById("topic94n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
}

var b17 = 0;
function myFunction95() {
	let mas=[11,12,13,25,31,32,33,41,42,43,111,113,121,123,131,132,253,311,321,331,412,421,422,431,432,1112,1113,1131,1132,1133,1212,1232,1312,1323,2533,3111,3212,3317,4122,4123,4211,4213,4221,4311,4322];	
	if (b17 == 0) {
		document.getElementById("button95").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b17 = 1;
		ifo11=ifo11+9;
		ifo12=ifo12+1;
		ifo13=ifo13+3;
		ifo14=ifo14+7;
		document.getElementById("topic95").style.display="";
		document.getElementById("topic95n").style.display="";
	}
 else { 
    document.getElementById("button95").style.background = "#7163B4";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b17 = 0;
		ifo11=ifo11-9;
		ifo12=ifo12-1;
		ifo13=ifo13-3;
		ifo14=ifo14-7;
		document.getElementById("topic95").style.display="none";
		document.getElementById("topic95n").style.display="none";
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
}

var b18 = 0;
function myFunction96() {
	let mas=[];	
	if (b18 == 0) {
		document.getElementById("button96").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b18 = 1;
	}
 else { 
    document.getElementById("button96").style.background = "#7163B4";
	for (let x = 0; x < mas.length; x++){
			let n="display79"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b18 = 0;
  }
    document.getElementById("ifo11").innerHTML=ifo11.toString();
	document.getElementById("ifo12").innerHTML=ifo12.toString();
	document.getElementById("ifo13").innerHTML=ifo13.toString();
	document.getElementById("ifo14").innerHTML=ifo14.toString();
}
var b01 = 0;
function myFunction1() {
	let mas=[11,12,25,31,32,41,111,112,121,253,311,312,322,411,1112,1121,1214,2531,3111,3112,3122,3221,4111,3311,331,33];	
	if (b01 == 0) {
		document.getElementById("button1").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b01 = 1;
		ifo1=ifo1+3;
		ifo2=ifo2+1;
		ifo3=ifo3+5;
		ifo4=ifo4+1;
		document.getElementById("topic51").style.display="";
		document.getElementById("topic51n").style.display="";
	}
 else { 
    document.getElementById("button1").style.background = "#0090A4";
	for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b01 = 0;
		ifo1=ifo1-3;
		ifo2=ifo2-1;
		ifo3=ifo3-5;
		ifo4=ifo4-1;
		document.getElementById("topic51").style.display="none";
		document.getElementById("topic51n").style.display="none";
  }
    document.getElementById("ifo1").innerHTML=ifo1.toString();
	document.getElementById("ifo2").innerHTML=ifo2.toString();
	document.getElementById("ifo3").innerHTML=ifo3.toString();
	document.getElementById("ifo4").innerHTML=ifo4.toString();

}

var b02 = 0;
function myFunction2() {
	let mas=[1221,1223,1411,1412,1421,1422,2542,4312,4313,122,141,142,254,431,12,14,25,43];	
	if (b02 == 0) {
		document.getElementById("button2").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b02 = 1;
		ifo1=ifo1+6;
		ifo2=ifo2+1;
		ifo3=ifo3+0;
		ifo4=ifo4+2;
		document.getElementById("topic52").style.display="";
		document.getElementById("topic52n").style.display="";
	}
 else { 
    document.getElementById("button2").style.background = "#0090A4";
	for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b02 = 0;
		ifo1=ifo1-6;
		ifo2=ifo2-1;
		ifo3=ifo3-0;
		ifo4=ifo4-2;
		document.getElementById("topic52").style.display="none";
		document.getElementById("topic52n").style.display="none";
  }
    document.getElementById("ifo1").innerHTML=ifo1.toString();
	document.getElementById("ifo2").innerHTML=ifo2.toString();
	document.getElementById("ifo3").innerHTML=ifo3.toString();
	document.getElementById("ifo4").innerHTML=ifo4.toString();
	
}


var b03 = 0;
function myFunction3() {
	let mas=[1222,1313,1321,2122,2211,2212,2221,2121,2213,2111,2112,2113,2512,122,131,132,212,221,212,211,251,12,13,21,22,25];	
	if (b03 == 0) {
		document.getElementById("button3").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b03 = 1;
		ifo1=ifo1+3;
		ifo2=ifo2+10;
		ifo3=ifo3+0;
		ifo4=ifo4+0;
		document.getElementById("topic54").style.display="";
		document.getElementById("topic54n").style.display="";
	}
 else { 
    document.getElementById("button3").style.background = "#0090A4";
	for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b03 = 0;
		ifo1=ifo1-3;
		ifo2=ifo2-10;
		ifo3=ifo3-0;
		ifo4=ifo4-0;
		document.getElementById("topic54").style.display="none";
		document.getElementById("topic54n").style.display="none";
  }
    document.getElementById("ifo1").innerHTML=ifo1.toString();
	document.getElementById("ifo2").innerHTML=ifo2.toString();
	document.getElementById("ifo3").innerHTML=ifo3.toString();
	document.getElementById("ifo4").innerHTML=ifo4.toString();
	
}

var b04 = 0;
function myFunction4() {
	let mas=[1122,1231,2411,2431,2435,2521,3113,3212,112,123,241,243,252,311,321,11,12,24,25,31,32];	
	if (b04 == 0) {
		document.getElementById("button4").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b04 = 1;
		ifo1=ifo1+2;
		ifo2=ifo2+4;
		ifo3=ifo3+2;
		ifo4=ifo4+0;
		document.getElementById("topic53").style.display="";
		document.getElementById("topic53n").style.display="";
	}
 else { 
    document.getElementById("button4").style.background = "#0090A4";
	for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b04 = 0;
		ifo1=ifo1-2;
		ifo2=ifo2-4;
		ifo3=ifo3-2;
		ifo4=ifo4-0;
		document.getElementById("topic53").style.display="none";
		document.getElementById("topic53n").style.display="none";
  }
    document.getElementById("ifo1").innerHTML=ifo1.toString();
	document.getElementById("ifo2").innerHTML=ifo2.toString();
	document.getElementById("ifo3").innerHTML=ifo3.toString();
	document.getElementById("ifo4").innerHTML=ifo4.toString();
	
}

var b05 = 0;
function myFunction5() {
	let mas=[2421,2432,2533,3213,242,243,243,321,24,25,32];	
	if (b05 == 0) {
		document.getElementById("button5").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b05 = 1;
		ifo1=ifo1+0;
		ifo2=ifo2+3;
		ifo3=ifo3+1;
		ifo4=ifo4+0;
		document.getElementById("topic55").style.display="";
		document.getElementById("topic55n").style.display="";
	}
 else { 
    document.getElementById("button5").style.background = "#0090A4";
	for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b05 = 0;
		ifo1=ifo1-0;
		ifo2=ifo2-3;
		ifo3=ifo3-1;
		ifo4=ifo4-0;
		document.getElementById("topic55").style.display="none";
		document.getElementById("topic55n").style.display="none";
  }
    document.getElementById("ifo1").innerHTML=ifo1.toString();
	document.getElementById("ifo2").innerHTML=ifo2.toString();
	document.getElementById("ifo3").innerHTML=ifo3.toString();
	document.getElementById("ifo4").innerHTML=ifo4.toString();
	
}

var b06 = 0;
function myFunction6() {
	let mas=[1112,1211,2434,2532,2433,4313,111,121,243,253,431,11,12,24,25,43];	
	if (b06 == 0) {
		document.getElementById("button6").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b06 = 1;
		ifo1=ifo1+2;
		ifo2=ifo2+3;
		ifo3=ifo3+0;
		ifo4=ifo4+1;
		document.getElementById("topic61").style.display="";
		document.getElementById("topic61n").style.display="";
	}
 else { 
    document.getElementById("button6").style.background = "#1F78C1";
	for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b06 = 0;
		ifo1=ifo1-2;
		ifo2=ifo2-3;
		ifo3=ifo3-0;
		ifo4=ifo4-1;
		document.getElementById("topic61").style.display="none";
		document.getElementById("topic61n").style.display="none";
  }
    document.getElementById("ifo1").innerHTML=ifo1.toString();
	document.getElementById("ifo2").innerHTML=ifo2.toString();
	document.getElementById("ifo3").innerHTML=ifo3.toString();
	document.getElementById("ifo4").innerHTML=ifo4.toString();
}

var b07 = 0;
function myFunction7() {
	let mas=[1131,1132,2523,3121,3123,3214,3312,3314,4222,4113,113,252,312,321,331,422,411,11,25,31,32,33,42,41];	
	if (b07 == 0) {
		document.getElementById("button7").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b07 = 1;
		ifo1=ifo1+2;
		ifo2=ifo2+1;
		ifo3=ifo3+5;
		ifo4=ifo4+2;
		document.getElementById("topic62").style.display="";
		document.getElementById("topic62n").style.display="";
	}
 else { 
    document.getElementById("button7").style.background = "#1F78C1";
	for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b07 = 0;
		ifo1=ifo1-2;
		ifo2=ifo2-1;
		ifo3=ifo3-5;
		ifo4=ifo4-2;
		document.getElementById("topic62").style.display="none";
		document.getElementById("topic62n").style.display="none";
  }
    document.getElementById("ifo1").innerHTML=ifo1.toString();
	document.getElementById("ifo2").innerHTML=ifo2.toString();
	document.getElementById("ifo3").innerHTML=ifo3.toString();
	document.getElementById("ifo4").innerHTML=ifo4.toString();
}

var b08 = 0;
function myFunction8() {
	let mas=[1111,1312,1322,1212,2114,2214,2222,2223,2311,2312,2313,2314,2541,111,131,132,121,211,221,222,231,254,11,13,12,21,22,23,25];	
	if (b08 == 0) {
		document.getElementById("button8").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b08 = 1;
		ifo1=ifo1+4;
		ifo2=ifo2+9;
		ifo3=ifo3+0;
		ifo4=ifo4+0;
		document.getElementById("topic63").style.display="";
		document.getElementById("topic63n").style.display="";
	}
 else { 
    document.getElementById("button8").style.background = "#1F78C1";
	for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b08 = 0;
		ifo1=ifo1-4;
		ifo2=ifo2-9;
		ifo3=ifo3-0;
		ifo4=ifo4-0;
		document.getElementById("topic63").style.display="none";
		document.getElementById("topic63n").style.display="none";
  }
    document.getElementById("ifo1").innerHTML=ifo1.toString();
	document.getElementById("ifo2").innerHTML=ifo2.toString();
	document.getElementById("ifo3").innerHTML=ifo3.toString();
	document.getElementById("ifo4").innerHTML=ifo4.toString();
}

var b09 = 0;
function myFunction9() {
	let mas=[2522,3313,3315,4112,4121,4122,4123,4131,4211,4212,4213,4221,4223,252,331,411,412,413,421,422,25,33,41,42];	
	if (b09 == 0) {
		document.getElementById("button9").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b09 = 1;
		ifo1=ifo1+0;
		ifo2=ifo2+1;
		ifo3=ifo3+2;
		ifo4=ifo4+10;
		document.getElementById("topic64").style.display="";
		document.getElementById("topic64n").style.display="";
	}
 else { 
    document.getElementById("button9").style.background = "#1F78C1";
	for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b09 = 0;
		ifo1=ifo1-0;
		ifo2=ifo2-1;
		ifo3=ifo3-2;
		ifo4=ifo4-10;
		document.getElementById("topic64").style.display="none";
		document.getElementById("topic64n").style.display="none";
  }
    document.getElementById("ifo1").innerHTML=ifo1.toString();
	document.getElementById("ifo2").innerHTML=ifo2.toString();
	document.getElementById("ifo3").innerHTML=ifo3.toString();
	document.getElementById("ifo4").innerHTML=ifo4.toString();
}

var b010 = 0;
function myFunction10() {
	let mas=[1213,1311,1232,2511,2436,2422,3211,4311,121,131,123,251,243,242,321,431,12,13,25,24,32,43];	
	if (b010 == 0) {
		document.getElementById("button10").style.background = "navy";
		for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			document.getElementById(n).style.background = "#FFC0CB";
		}
		b010 = 1;
		ifo1=ifo1+3;
		ifo2=ifo2+3;
		ifo3=ifo3+1;
		ifo4=ifo4+1;
		document.getElementById("topic65").style.display="";
		document.getElementById("topic65n").style.display="";
	}
 else { 
    document.getElementById("button10").style.background = "#1F78C1";
	for (let x = 0; x < mas.length; x++){
			let n="display"+mas[x].toString();
			if (document.getElementById(n).classList.contains("group1")){document.getElementById(n).style.background = "#F5EEF8";}
			if (document.getElementById(n).classList.contains("group2")){document.getElementById(n).style.background = "#DBF9D8";}
			if (document.getElementById(n).classList.contains("group3")){document.getElementById(n).style.background = "#DCF2FF";}
			if (document.getElementById(n).classList.contains("group4")){document.getElementById(n).style.background = "#FFEFCA";}
		}
    b010 = 0;
		ifo1=ifo1-3;
		ifo2=ifo2-3;
		ifo3=ifo3-1;
		ifo4=ifo4-1;
		document.getElementById("topic65").style.display="none";
		document.getElementById("topic65n").style.display="none";
  }
    document.getElementById("ifo1").innerHTML=ifo1.toString();
	document.getElementById("ifo2").innerHTML=ifo2.toString();
	document.getElementById("ifo3").innerHTML=ifo3.toString();
	document.getElementById("ifo4").innerHTML=ifo4.toString();
}

function tema(a){
	a = a.replace(/\D/g,'');
	let n="display"+a.toString();
	document.getElementById(n).style.background = "#FF8366";
	if (a<7900){
	
		var dict = {};
		dict["button1"] = [11,12,25,31,32,41,111,112,121,253,311,312,322,411,1112,1121,1214,2531,3111,3112,3122,3221,4111,3311,331,33];
		dict["button2"] = [1221,1223,1411,1412,1421,1422,2542,4312,4313,122,141,142,254,431,12,14,25,43];
		dict["button3"] = [1222,1313,1321,2122,2211,2212,2221,2121,2213,2111,2112,2113,2512,122,131,132,212,221,212,211,251,12,13,21,22,25];
		dict["button4"] = [1122,1231,2411,2431,2435,2521,3113,3212,112,123,241,243,252,311,321,11,12,24,25,31,32];
		dict["button5"] = [2421,2432,2533,3213,242,243,243,321,24,25,32];
		dict["button6"] = [1112,1211,2434,2532,2433,4313,111,121,243,253,431,11,12,24,25,43];
		dict["button7"] = [1131,1132,2523,3121,3123,3214,3312,3314,4222,4113,113,252,312,321,331,422,411,11,25,31,32,33,42,41];
		dict["button8"] = [1111,1312,1322,1212,2114,2214,2222,2223,2311,2312,2313,2314,2541,111,131,132,121,211,221,222,231,254,11,13,12,21,22,23,25];
		dict["button9"] = [2522,3313,3315,4112,4121,4122,4123,4131,4211,4212,4213,4221,4223,252,331,411,412,413,421,422,25,33,41,42];
		dict["button10"] = [1213,1311,1232,2511,2436,2422,3211,4311,121,131,123,251,243,242,321,431,12,13,25,24,32,43];
		for(var key in dict) {
			var value = dict[key]; 
			for (let x = 0; x < value.length; x++){
				if (a==value[x]){
					document.getElementById(key).style.background = "#E65480";
					}
				}
			}
	}
	else {
		var b=a.toString().slice(2);
		a=parseInt(b);
		var dict = {};
		dict["button71"] = [11,12,14,25,31,32,33,41,42,111,121,123,141,143,251,311,312,321,331,411,421,1111,1211,1213,1234,1413,1431,2512,3111,3121,3211,3212,3311,3317,4111,4112,4113,4213];
		dict["button72"] =[11,12,14,24,25,32,33,41,42,112,123,141,143,243,252,253,254,321,331,412,413,421,1121,1123,1231,1233,1235,1411,1412,1432,1434,2439,2521,2522,2531,2542,3214,3313,3314,3315,3316,3317,4121,4131,4132,4212];
		dict["button73"] = [11,12,14,24,25,33,41,43,111,123,124,125,142,241,242,243,251,331,413,432,1111,1231,1241,1242,1243,1251,1421,2411,2421,2422,2431,2433,24310,24311,2511,3316,4131,4322,4324,4326];
		dict["button74"] = [11,12,14,24,25,33,42,43,112,123,125,143,242,243,251,331,421,422,432,1123,1234,1252,1434,2421,2422,2431,2432,2437,2438,24310,24311,2511,3317,4211,4213,4224,4323,4324];
		dict["button75"] = [11,12,13,21,22,24,31,32,43,113,125,131,211,212,221,222,243,311,321,432,1132,1251,1317,2111,2113,2121,2212,2222,2224,24311,3112,3213,4326];
		dict["button76"] =[11,12,14,24,25,32,41,42,111,112,113,121,124,141,142,241,242,243,251,253,321,413,421,1112,1121,1133,1211,1244,1412,1413,1414,1421,2411,2421,2422,2431,2436,24310,24311,2511,2531,2533,3211,4131,4132,4212];
		dict["button81"] = [11,12,14,24,31,32,33,41,42,43,112,113,122,124,143,242,311,312,321,322,331,411,422,431,432,1122,1131,1221,1244,1433,2422,3111,3121,3212,3213,3221,3312,4111,4222,4311,4325,4326];
		dict["button82"] = [11,12,13,24,32,43,113,123,124,125,131,242,243,321,432,1131,1232,1241,1242,1251,1313,1315,2422,2431,2434,2435,3214,4321];
		dict["button83"] =[12,21,22,23,25,31,32,43,122,211,212,221,222,231,251,311,312,321,432,1221,2111,2112,2113,2122,2213,2222,2312,2511,3112,3121,3213,4326];
		dict["button84"] =[11,12,22,24,25,31,42,43,113,124,221,222,242,243,253,254,311,422,431,432,1133,1241,1242,1243,2215,2223,2421,2431,2433,2534,2541,3112,4221,4222,4223,4311,4321,4325];
		dict["button85"] =[11,12,22,23,24,25,33,42,43,112,123,221,222,231,241,243,251,254,331,422,432,1121,1123,1231,1233,2214,2215,2223,2224,2312,2411,2437,2438,2431,24310,2511,2543,3313,3314,3315,4221,4223,4224,4326];
		dict["button86"] =[11,12,14,24,25,33,42,43,111,121,141,241,242,243,251,253,254,331,422,432,1113,1213,1411,2411,2421,2422,2431,2433,2439,24310,24311,2511,2532,2534,2541,3313,3314,3315,4224,4324];
		dict["button91"] =[11,12,13,22,25,31,32,41,43,111,113,121,123,131,132,222,251,311,312,321,412,432,1113,1132,1133,1212,1235,1312,1315,1316,1321,2224,2512,3111,3121,3213,4122,4324];
		dict["button92"] =[11,12,14,21,22,24,32,33,112,113,122,123,124,143,211,212,222,242,243,321,331,412,1122,1131,1221,1231,1235,1244,1432,1433,2112,2114,2122,2222,2421,2434,2435,3211,3312,4123];
		dict["button93"] =[11,12,13,24,25,31,43,112,113,121,131,132,242,243,251,311,432,1122,1132,1212,1311,1312,1314,1315,1316,1322,1323,2421,2422,2431,2433,24310,24311,2511,3112,4325];	
		dict["button94"] =[11,12,13,21,22,23,25,31,32,42,43,111,121,131,211,212,221,222,231,232,233,251,254,311,322,422,432,1113,1211,1314,1317,2112,2114,2123,2211,2212,2214,2215,2221,2223,2311,2321,2331,2512,2543,3113,3221,4223,4224,4324];	
		dict["button95"] =[11,12,13,25,31,32,33,41,42,43,111,113,121,123,131,132,253,311,321,331,412,421,422,431,432,1112,1113,1131,1132,1133,1212,1232,1312,1323,2533,3111,3212,3317,4122,4123,4211,4213,4221,4311,4322];	
		for(var key in dict) {
			var value = dict[key]; 
			for (let x = 0; x < value.length; x++){
				if (a==value[x]){
					document.getElementById(key).style.background = "#E65480";
					}
				}
		}		
	}
}

function skills(){
  var x = document.getElementById("skills");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function content(){
  var x = document.getElementById("content");
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