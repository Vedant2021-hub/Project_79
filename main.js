menu_list_array = ["Veg Margherita Pizza","Cheese Burst Pizza","Chicken Tandoori Pizza","Paneer Tikka Pizza","Veg Supreme Pizza"
                    ];

function getmenu(){
var htmldata;
htmldata="Deluxe Veggie Pizza"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="Deluxe Veggie Pizza"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + menu_list_array[i] +  '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata
}

function add_top(){
//Complete the code
}