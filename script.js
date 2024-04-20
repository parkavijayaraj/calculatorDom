const div=document.createElement("div");
const h1=document.createElement("h1");
const p=document.createElement("p");
const input=document.createElement("input");
const button1=document.createElement("button");
const button2= document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const button5 = document.createElement("button");
const button6 = document.createElement("button");
const button7 = document.createElement("button");
const button8 = document.createElement("button");
const button9 = document.createElement("button");
const button10 = document.createElement("button");
const button11 = document.createElement("button");
const button12 = document.createElement("button"); //classlist.add("btn","btn-primary")
const button13 = document.createElement("button");
const button14 = document.createElement("button");
const button15 = document.createElement("button");
const button16 = document.createElement("button");
const button17 = document.createElement("button");
const button18 = document.createElement("button");
const button19 = document.createElement("button");


div.setAttribute("class"," cord col-lg-6 col-md-12")
div.setAttribute("id","calcu");
h1.setAttribute("id","title");
h1.innerText=("calculator");
p.setAttribute("id","description");
p.innerText=("This is the calculator task. You can evaluate all the mathematic function.");

input.setAttribute("id","result");
input.setAttribute("readonly","");
input.setAttribute("value","0")


button1.setAttribute("id","clear");
button1.setAttribute("onclick","clr()")
button1.setAttribute("value","c")
button1.innerText=("c");

button2.setAttribute("id","_");
button2.setAttribute("onclick","dis('_')");
button2.setAttribute("value","_")
button2.setAttribute("onkeydown","myFunction(event)")
button2.innerText=("_");

button3.setAttribute("id",".");
button3.setAttribute("onclick","dis('.')");
button3.setAttribute("value",".")
button3.setAttribute("onkeydown","myFunction(event)")
button3.innerText=(".");

button4.setAttribute("id","*");
button4.setAttribute("onclick","dis('*')");
button4.setAttribute("value","*")
button4.setAttribute("onkeydown","myFunction(event)")
button4.innerText=(" *");
button4.setAttribute("class","clur");

button5.setAttribute("id","7");
button5.setAttribute("onclick","dis('7')");
button5.setAttribute("value","5")
button5.setAttribute("onkeydown","myFunction(event)")
button5.innerText=("7");

button6.setAttribute("id","8");
button6.setAttribute("onclick","dis('8')");
button6.setAttribute("value","8")
button6.setAttribute("onkeydown","myFunction(event)")
button6.innerText=("8");

button7.setAttribute("id","9");
button7.setAttribute("onclick","dis('9')");
button7.setAttribute("value","9")
button7.setAttribute("onkeydown","myFunction(event)")
button7.innerText=("9");

button8.setAttribute("id","/");
button8.setAttribute("onclick","dis('/')");
button8.setAttribute("value","/")
button8.setAttribute("onkeydown","myFunction(event)")
button8.innerText=("/");
button8.setAttribute("class","clur");

button9.setAttribute("id","4");
button9.setAttribute("onclick","dis('4')");
button9.setAttribute("value","4")
button9.setAttribute("onkeydown","myFunction(event)")
button9.innerText=("4");

button10.setAttribute("id","5");
button10.setAttribute("onclick","dis('5')");
button10.setAttribute("value","5")
button10.setAttribute("onkeydown","myFunction(event)")
button10.innerText=("5");

button11.setAttribute("id","6");
button11.setAttribute("onclick","dis('6')");
button11.setAttribute("value","6")
button11.setAttribute("onkeydown","myFunction(event)")
button11.innerText=("6");

button12.setAttribute("id","subtract");
button12.setAttribute("onclick","dis('-')");
button12.setAttribute("value","-")
button12.setAttribute("onkeydown","myFunction(event)")
button12.innerText=("-");
button12.setAttribute("class","clur");

button13.setAttribute("id","1");
button13.setAttribute("onclick","dis('1')");
button13.setAttribute("value","1")
button13.setAttribute("onkeydown","myFunction(event)")
button13.innerText=("1");

button14.setAttribute("id","2");
button14.setAttribute("onclick","dis('2')");
button14.setAttribute("value","2")
button14.setAttribute("onkeydown","myFunction(event)")
button14.innerText=("2");

button15.setAttribute("id","3");
button15.setAttribute("onclick","dis('3')");
button15.setAttribute("value","3")
button15.setAttribute("onkeydown","myFunction(event)")
button15.innerText=("3");

button16.setAttribute("id","add");
button16.setAttribute("onclick","dis('+')");
button16.setAttribute("value","+")
button16.setAttribute("onkeydown","myFunction(event)")
button16.innerText=("+");
button16.setAttribute("class","clur");

button17.setAttribute("id","0");
button17.setAttribute("onclick","dis('0')");
button17.setAttribute("value","0")
button17.setAttribute("onkeydown","myFunction(event)")
button17.innerText=("0");

button18.setAttribute("id","00");
button18.setAttribute("onclick","dis('00')");
button18.setAttribute("value","00")
button18.setAttribute("onkeydown","myFunction(event)")
button18.innerText=("00");

button19.setAttribute("id","equal");
button19.setAttribute("value","=")
button19.setAttribute("onclick","solve()");
button19.innerText=("=");

div.append(input);
input.setAttribute("class","grid1")

div.append(button1);
div.append(button2);
div.append(button3);
div.append(button4);
div.append(button5);
div.append(button6);
div.append(button7);
div.append(button8);
div.append(button9);
div.append(button10);
div.append(button11);
div.append(button12);
div.append(button13);
div.append(button14);
div.append(button15);
div.append(button16);
div.append(button17);
div.append(button18);
div.append(button19);
button19.setAttribute("class","grid2")

document.body.append(h1);
document.body.append(p);
document.body.append(div);

function dis(val) { 
    document.getElementById("result").value += val 
} 

function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("result").value 
        console.log(x); 
        solve(); 
    } 
} 
 
function solve() { 
    let x = document.getElementById("result").value 
    let y = math.evaluate(x); 
    document.getElementById("result").value = y 
} 
 
function clr() { 
    document.getElementById("result").value = " " 
}