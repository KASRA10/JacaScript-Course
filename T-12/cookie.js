document.cookie = 'name= "Kasra"; expires= Mon, 10 Jul 2024 11:00; path=/';
document.cookie = 'family= "Hosseini"; expires= Mon, 10 Jul 2024 11:00; path=/';
document.cookie = 'nickname= "K10"; expires= Mon, 10 Jul 2024 11:00; path=/';
function setCookie(name, value, time) {
  var date = new Date();
  date.setSeconds(date.getSeconds() + time);
  document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
};
setCookie("NEW", "COOKIENAME", 1000);
function deleteCookie(name) {
  setCookie(name, "", 0);
};
deleteCookie("nikename");
function getCookie(name) {
  return Object.fromEntries(
    document.cookie.split("; ").map(function (el) {
      return el.split("=");
    })
  )[name];
};
setCookie("FirstName", "Kasra", 1000);
setCookie("LastName", "Hosseini", 1000);
setCookie("age", 28, 1000);
console.log(getCookie("age"));
deleteCookie("age");