var e = document.getElementById("months");
var value = e.value;

var n = document.getElementById("days");

var icon1 = document.getElementById("close")
var icon2 = document.getElementById("back-step-1")
var icon3 = document.getElementById("back-step-2")


e.addEventListener("change" , () =>{
    if(e.options[e.selectedIndex].text === "January" || e.options[e.selectedIndex].text === "March" ||
        e.options[e.selectedIndex].text === "May" || e.options[e.selectedIndex].text === "July"||
        e.options[e.selectedIndex].text === "August" || e.options[e.selectedIndex].text === "October" ||
        e.options[e.selectedIndex].text === "December"
    ){
        for(let i = 0 ; i < n.childElementCount ; i++) {
            n.removeChild(n.children[i])
        }
        n.innerHTML = `
     <option value="1" selected="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
     <option value="11">11</option>
     <option value="12">12</option>
     <option value="13">13</option>
     <option value="14">14</option>
     <option value="15">15</option>
     <option value="16">16</option>
     <option value="17">17</option>
     <option value="18">18</option>
     <option value="19">19</option>
     <option value="20">20</option>
     <option value="21">21</option>
     <option value="22">22</option>
     <option value="23">23</option>
     <option value="24">24</option>
     <option value="25">25</option>
     <option value="26">26</option>
     <option value="27">27</option>
     <option value="28">28</option>
     <option value="29">29</option>
     <option value="30">30</option>
     <option value="31">31</option>
    `
        console.log( n.childElementCount)
    }
    else if(e.options[e.selectedIndex].text === "February"){
        console.log( n.childElementCount)
        for(let i = 0 ; i < n.childElementCount ; i++) {
            n.removeChild(n.children[i])
        }
        n.innerHTML = `
     <option value="1" selected="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="9">9</option>
     <option value="10">10</option>
     <option value="11">11</option>
     <option value="12">12</option>
     <option value="13">13</option>
     <option value="14">14</option>
     <option value="15">15</option>
     <option value="16">16</option>
     <option value="17">17</option>
     <option value="18">18</option>
     <option value="19">19</option>
     <option value="20">20</option>
     <option value="21">21</option>
     <option value="22">22</option>
     <option value="23">23</option>
     <option value="24">24</option>
     <option value="25">25</option>
     <option value="26">26</option>
     <option value="27">27</option>
     <option value="28">28</option>`
    }
    else{
        for(let i = 0 ; i < n.childElementCount ; i++) {
            n.removeChild(n.children[i])
        }
        n.innerHTML = `
     <option value="jan" selected="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="9">9</option>
     <option value="10">10</option>
     <option value="11">11</option>
     <option value="12">12</option>
     <option value="13">13</option>
     <option value="14">14</option>
     <option value="15">15</option>
     <option value="16">16</option>
     <option value="17">17</option>
     <option value="18">18</option>
     <option value="19">19</option>
     <option value="20">20</option>
     <option value="21">21</option>
     <option value="22">22</option>
     <option value="23">23</option>
     <option value="24">24</option>
     <option value="25">25</option>
     <option value="26">26</option>
     <option value="27">27</option>
     <option value="28">28</option>
     <option value="29">29</option>
     <option value="30">30</option>`
    }
})

var b = document.getElementById("btn-step1")
var user = document.getElementById("user-name")
var email = document.getElementById("user-email")
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
b.addEventListener("click", ()=>{
    if(user.value === ""){
        user.style.borderBottom = "2px solid red"
    }
    if(!email.value.match(validRegex)){
        email.style.borderBottom = " 2px solid red"
        email.value = ""
    }
    if (user.value !== "" && email.value.match(validRegex)){
        document.getElementById("close").style.display = 'none'
        document.getElementById("back-step-1").style.display = 'flex'
        document.getElementById('step1').style.display = "none"
        document.getElementById('step2').style.display = 'block'
    }
})

user.addEventListener("input" , () =>{
    if(user.value !== ""){
        user.style.borderBottom = "2px solid white"
    }
})
email.addEventListener("input" , () =>{
    if(email.value.match(validRegex)){
        email.style.borderBottom = " 2px solid white"
    }
})

var b = document.getElementById("btn-step2")

b.addEventListener("click", ()=>{
    document.getElementById("back-step-1").style.display = 'none'
    document.getElementById("back-step-2").style.display = 'flex'
    document.getElementById('step2').style.display = "none"
    document.getElementById('step3').style.display = 'block'
})

icon1.addEventListener('click' , e =>{
    window.location.href='login.html'
})

icon2.addEventListener('click' , e =>{
    document.getElementById("close").style.display = 'flex'
    document.getElementById("back-step-1").style.display = 'none'
    document.getElementById('step1').style.display = 'block'
    document.getElementById('step2').style.display = "none"
})

icon3.addEventListener('click' , e =>{
    document.getElementById("back-step-1").style.display = 'flex'
    document.getElementById("back-step-2").style.display = 'none'
    document.getElementById('step2').style.display = "block"
    document.getElementById('step3').style.display = 'none'
})

var c = document.getElementById("btn-step3")
var p = document.getElementById('pass')
var cp = document.getElementById("conf_pass")
var validPass =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

c.addEventListener("click" , () =>{
    if(!p.value.match(validPass) || !cp.value.match){
        p.style.borderBottom = "2px solid red"
        cp.style.borderBottom = "2px solid red"
    }
    if(cp.value !== p.value){
        cp.style.borderBottom = "2px solid red"
    }
    if(p.value.match(validPass) && cp.value === p.value){
        window.location.href='index.html'
    }
})

p.addEventListener("input" , () =>{
        if(p.value.match(validRegex)){
            p.style.borderBottom = " 2px solid white"
        }
})

cp.addEventListener("input" , () =>{
    if(cp.value === p.value){
        cp.style.borderBottom = "2px solid white"
    }
})


