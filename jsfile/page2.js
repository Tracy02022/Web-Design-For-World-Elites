/**
 * Created by Dongyu on 10/27/2015.
 */

document.write('<ul><a href ="http://www.worldelites.com/" target ="_blank">World Elites Official WebSites</a></ul>');

function change()
{
    var x = document.getElementById("name").value;
    if (x == "") {
        alert("Please enter your name into the text box ");
    } else {

        document.getElementById("para").innerHTML = "Hello " + x + " and welcome to my website";
        document.getElementById("name").disabled=true;
        document.getElementById("button").disabled =true;
    }
}
var myArray =[
    {
        "name": "The Pavilion on Berry",
        "image": "coding-excercise/images/image-1.jpg",
        "price": 512,
        "popularity": 7,
        "description": "University of Minnesota, Twin Cities Minneapolis, MN",
        "direction": "coding-excercise/detailedFile/Pavillion.html"
    },
    {
        "name": "Radius @15th",
        "image": "coding-excercise/images/image-3.jpg",
        "price": 492,
        "popularity": 5,
        "description": "University of Minnesota, Twin Cities Minneapolis, MN",
        "direction": "coding-excercise/detailedFile/Radius.html"
    },
    {

        "name": "416 Lofts",
        "image": "coding-excercise/images/image-2.jpg",
        "price": 460,
        "popularity": 3,
        "description": "University of Minnesota, Twin Cities Minneapolis, MN",
        "direction": "coding-excercise/detailedFile/416Lofts.html"
    },
    {

        "name": "Edge on Oak",
        "image": "coding-excercise/images/image-4.jpg",
        "price": 532,
        "popularity": 6,
        "description": "University of Minnesota, Twin Cities Minneapolis, MN",
        "direction": "coding-excercise/detailedFile/EdgeonOak.html"
    },
    {
        "name": "Feel Like the Home",
        "image": "coding-excercise/images/image-5.jpg",
        "price": 832,
        "popularity": 10,
        "description": "University of California, Santa Monica, CA",
        "direction": "coding-excercise/detailedFile/UC.html"
    }

];

myFunction(myArray);

function myPopular(arr) {
    var i;
    var out="";
    for(i=0;i<arr.length;i++){
        for(j =0;j<arr.length-1;j++){
            if(arr[j].popularity<arr[j+1].popularity)
            {
                temp = arr[j];
                arr[j] =arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    for(i=0;i<arr.length;i++){
        out += '<div class ="row">' + '<div class ="col-4">'+'<img src ="'+arr[i].image+'"/>'+'</div>'+
            '<ul class="col-5 menu">'+'<ul><a href="'+arr[i].direction+'">'+arr[i].name+'</a>'+
            '<p>'+arr[i].description+'</p>'+'<div style="position: relative; bottom: 0; right: 0;  text-align:right;"><p style="color:orange">from'+
            '<b> $'+arr[i].price+'</b></p>'+'<p style="color:orange">USD/Month</p></div>'+'</ul></div></div>';

    }
    document.getElementById("id01").innerHTML =out;
}
function myPrice(arr) {
    var i;
    var j;
    var temp;
    var out="";
    for(i=0;i<arr.length;i++){
        for(j =0;j<arr.length-1;j++){
            if(arr[j].price<arr[j+1].price)
            {
                temp = arr[j];
                arr[j] =arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    for(i=0;i<arr.length;i++){
        out += '<div class ="row">' + '<div class ="col-4">'+'<img src ="'+arr[i].image+'"/>'+'</div>'+
            '<ul class="col-5 menu">'+'<ul><a href="'+arr[i].direction+'">'+arr[i].name+'</a>'+
            '<p>'+arr[i].description+'</p>'+'<div  style="position: relative; bottom: 0; right: 0;  text-align:right;"><p style="color:orange">from'+
            '<b> $'+arr[i].price+'</b></p>'+'<p style="color:orange">USD/Month</p></div>'+'</ul></div></div>';

    }
    document.getElementById("id01").innerHTML =out;
}
function show(arr)
{
    var i;
    var out="";
    for(i=0;i<arr.length;i++){
        out += '<div class ="row">' + '<div class ="col-4">'+'<img src ="'+arr[i].image+'"/>'+'</div>'+
            '<ul class="col-5 menu">'+'<ul><a href="'+arr[i].direction+'">'+arr[i].name+'</a>'+
            '<p>'+arr[i].description+'</p>'+'<div  style="position: relative; bottom: 0; right: 0;  text-align:right;"><p style="color:orange">from'+
            '<b> $'+arr[i].price+'</b></p>'+'<p style="color:orange">USD/Month</p></div>'+'</ul></div></div>';

    }
    document.getElementById("id01").innerHTML =out;
}

function greetingMessage()
{
    var d = new Date();
    var day = new Array();
    day[0] ="Sunday";
    day[1] ="Monday";
    day[2]="Tuesday";
    day[3]="Wednesday";
    day[4]="Thursday";
    day[5]="Friday";
    day[6]="Saturday";
    var date = day[d.getDate()];
    var time = d.getHours();
    if(time<12)
    {
        document.getElementById("greeting").innerHTML =" Good Morning Today is "+date+" ! ";

    }
    else if(time <18)
    {
        document.getElementById("greeting").innerHTML =" Good Afternoon Today is "+date+" ! ";
    }
    else
    {
        document.getElementById("greeting").innerHTML =" Have a nice day ! ";
    }
}
