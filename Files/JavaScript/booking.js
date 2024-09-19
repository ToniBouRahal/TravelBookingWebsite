var add = document.getElementById("add")

const map = new Map()
map.set('Berlin', 'Berlin.jpg');
map.set('StockHolm', 'destination-8.jpg');
map.set('Milan', 'milan.jpg');

var close = document.getElementById("close")

close.addEventListener('click' , () =>{
        document.getElementById('pop').style.display = 'none'
})

function add_fn(){
    document.getElementById('pop').style.display = "block"
}

var adder = document.getElementById("packageAdder")

 adder.addEventListener('click' , e =>{
     var price = document.getElementById('price').value
     var description = document.getElementById('description').value
     var nbook = document.querySelectorAll('.book').length
     var current = document.getElementById(nbook.toString())
     var nplaces = current.childElementCount
     var city = document.getElementById('city')
     var selected_city = city.options[city.selectedIndex].text
     console.log(selected_city)
     console.log(map.get(selected_city))

     if(isNaN(price) || description === ""){

     }
     else {
         if (nplaces === 1) {
             current.removeChild(current.lastChild)
             current.innerHTML = `
            <div class="place">
                 <img src=${map.get(selected_city)} alt="Place 6" class="place-img">
                 <h2 class="place-title">${selected_city}</h2>
                 <p class="place-price">$ ${price}</p>
                <div class="rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div> 
                <p class="place-description">${description}</p>
                <a href="#" class="book-btn">Book Now</a>
                </div>
               
                    <div class="place" id ="adder">
                    <i id ="add" onclick="add_fn()" class="fa fa-plus fa-6x"></i>
                    </div>

            `

             document.getElementById("price").value = ""
             document.getElementById('description').value = ""
             document.getElementById('pop').style.display = 'none'
         } else if (nplaces === 2) {
             console.log(current.removeChild(document.getElementById("adder")))
             console.log(current)
             current.innerHTML += `
            <div class="place">
                 <img src=${map.get(selected_city)} alt="Place 6" class="place-img">
                 <h2 class="place-title">${selected_city}</h2>
                 <p class="place-price">$ ${price}</p>
                <div class="rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div> 
                <p class="place-description">${description}</p>
                <a href="#" class="book-btn">Book Now</a>
                </div>
               
                    <div class="place" id ="adder">
                    <i id ="add" onclick="add_fn()" class="fa fa-plus fa-6x"></i>
                    </div>
            `
             document.getElementById('pop').style.display = 'none'
             document.getElementById("price").value = ""
             document.getElementById('description').value = ""
         } else {
             console.log(current.removeChild(document.getElementById("adder")))
             console.log(current)
             current.innerHTML += `
            <div class="place">
                 <img src=${map.get(selected_city)} alt="Place 6" class="place-img">
                 <h2 class="place-title">${selected_city}</h2>
                 <p class="place-price">$ ${price}</p>
                <div class="rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div> 
                <p class="place-description">${description}</p>
                <a href="#" class="book-btn" onclick="booked(this)">Book Now</a>
                </div>
            `
             document.getElementById('bc').innerHTML += `
             <div class="book" id = ${nbook+1}>
                    <div class="place" id ="adder">
                    <i id ="add" onclick="add_fn()" class="fa fa-plus fa-6x"></i>
                    </div>
               </div>
            
            `
             document.getElementById("price").value = ""
             document.getElementById('description').value = ""
             document.getElementById('pop').style.display = 'none'
         }
     }
 })

function reshape(){
    var input , filter , cards , name
    input = document.getElementById('search')
    filter = input.value.toUpperCase()
    cards = document.querySelectorAll('.place')
    console.log(cards.length)
    for(var i = 0  ; i < cards.length ; i++){
        name = cards[i].getAttribute('name')
        if(name.toUpperCase().indexOf(filter) > -1){
            cards[i].style.display = 'block'
        }
        else{
            cards[i].style.display = 'none'
        }
    }
}

function redirect(){
    var email = document.getElementById("log_email").value
    var pass = document.getElementById("log_pass").value
    var validPass =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
   
    if(email === '')
    {
        document.getElementById("log_email").style.borderBottom = "2px solid red";

    }
    if(!pass.match(validPass))
    {
        document.getElementById("log_pass").style.borderBottom = "2px solid red";
    }
if(email !=='' && pass.match(validPass))
    {
        console.log("entered")
        window.location.href='booking.html';

    }
}

function booked(e){
    var cities = document.querySelectorAll(".place")
    var parent = e.parentNode
    var name = parent.getAttribute('name')
    for(var i = 0; i < cities.length; i++){

        if(cities[i].getAttribute("name") === name){
            cities[i].innerHTML = `<div class="newpop">
            <h2><i id = "closer" class="fa fa-window-close" aria-hidden="true"></i></h2>
            <h2>Successfully booked trip to ${cities[i].getAttribute("name")}</h2>
            </div>`
            break 
        }
    }
}

