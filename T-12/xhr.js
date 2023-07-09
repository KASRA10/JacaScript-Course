document.getElementById("action").style.border = "3px solid blue";
document.getElementById("action").style.borderRadius = "8px";
document.getElementById("action").style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
document.getElementById("action").style.fontFamily = "Arial";
document.getElementById("action").style.fontSize1 = "18px";
document.getElementById("action").style.fontWeight = "700";
document.getElementById("action").style.marginTop = "15px";
document.getElementById("action").style.width = "300px";
document.getElementById("action").style.height = "fitContent";
document.getElementById("action").style.padding = "15px";
document.getElementById("action").style.textAlign = "center";
document.getElementById("action").style.textTransform = "capitalize";
document.getElementById("action").style.cursor = "pointer";
document.getElementById("action").style.backgroundColor = "orange";
document.getElementById("action").style.color = "#FFF";
var url = "https://jsonplaceholder.ir/users/1 ";
var placeHolder = document.getElementById("data");
var xhr = new XMLHttpRequest();
function getData(url, method = "GET") {
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
  };
  xhr.open(method, url);
  xhr.send();
  xhr.onload = function () {
    var data = JSON.parse(xhr.response);
    console.log(data);
    placeHolder.textContent = data.name;
    placeHolder.style.border = "3px solid red";
    placeHolder.style.borderRadius = "8px";
    placeHolder.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
    placeHolder.style.fontFamily = "Arial";
    placeHolder.style.fontSize1 = "18px";
    placeHolder.style.fontWeight = "700";
    placeHolder.style.marginTop = "15px";
    placeHolder.style.width = "300px";
    placeHolder.style.height = "fitContent";
    placeHolder.style.padding = "15px";
    placeHolder.style.textAlign = "center";
    placeHolder.style.cursor = "pointer";
    placeHolder.style.backgroundColor = "#000";
    placeHolder.style.color = "orange";
  };
  xhr.onerror = function () {
    console.error("Error");
  };
};
document.getElementById("action").addEventListener("click", function () {
  getData(url);
});