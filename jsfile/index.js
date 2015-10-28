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
    },

    {
        "name": "Hello World Home",
        "image": "coding-excercise/images/image-6.jpg",
        "price": 712,
        "popularity": 1,
        "description": "UCLA, Twin Cities Minneapolis, CA",
        "direction": "coding-excercise/detailedFile/UCLA.html"
    },
    {
        "name": "OSU Home",
        "image": "coding-excercise/images/image-7.jpg",
        "price": 692,
        "popularity": 2,
        "description": "OSU, Twin Cities Minneapolis, OH",
        "direction": "coding-excercise/detailedFile/OSU.html"
    },
    {

        "name": "UC-B Home",
        "image": "coding-excercise/images/image-8.jpg",
        "price": 960,
        "popularity": 4,
        "description": "UC-B, Twin Cities Minneapolis, CA",
        "direction": "coding-excercise/detailedFile/UC-B.html"
    },
    {

        "name": "SF Home",
        "image": "coding-excercise/images/image-9.jpg",
        "price": 831,
        "popularity": 9,
        "description": "SF, Twin Cities Minneapolis, CA",
        "direction": "coding-excercise/detailedFile/SF.html"
    },
    {
        "name": "CMU Home",
        "image": "coding-excercise/images/image-10.jpg",
        "price": 532,
        "popularity": 8,
        "description": "CMU, Santa Monica, PL",
        "direction": "coding-excercise/detailedFile/CMU.html"
    },
    {
        "name": "UF home",
        "image": "coding-excercise/images/image-11.jpg",
        "price": 772,
        "popularity": 12,
        "description": "UF, Twin Cities Minneapolis, FL",
        "direction": "coding-excercise/detailedFile/UF.html"
    },
    {
        "name": "USC home",
        "image": "coding-excercise/images/image-12.jpg",
        "price": 899,
        "popularity": 11,
        "description": "USC, Santa Monica, CA",
        "direction": "coding-excercise/detailedFile/USC.html"
    }

];

function myPopular() {
    var i;
    var j;
    var temp;

    for(i=0;i<myArray.length;i++){
        for(j =0;j<myArray.length-1;j++){
            if(myArray[j].popularity < myArray[j+1].popularity)
            {
                temp = myArray[j];
                myArray[j] =myArray[j+1];
                myArray[j+1] = temp;
            }
        }
    }
}

function myPrice() {
    var i;
    var j;
    var temp;

    for(i=0;i<myArray.length;i++){
        for(j =0;j<myArray.length-1;j++){
            if(myArray[j].price<myArray[j+1].price)
            {
                temp = myArray[j];
                myArray[j] =myArray[j+1];
                myArray[j+1] = temp;
            }
        }
    }
}
function show(arr,ind,end)
{
    var i;
    var out="";
    for(i=ind;i<end;i++){
        out += '<div class ="row">' + '<div class ="col-4">'+'<img src ="'+arr[i].image+'"/>'+'</div>'+
            '<ul class="col-5 menu">'+'<ul><a href="'+arr[i].direction+'">'+arr[i].name+'</a>'+
            '<p>'+arr[i].description+'</p>'+'<div  style="position: relative; bottom: 0; right: 0;  text-align:right;"><p style="color:orange">from'+
            '<b> $'+arr[i].price+'</b></p>'+'<p style="color:orange">USD/Month</p></div>'+'</ul></div></div>';

    }
    document.getElementById("id01").innerHTML =out;
}

