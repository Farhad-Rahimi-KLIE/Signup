let Karo = document.getElementById("karo");

Karo.addEventListener("click", () => {
  //   console.log("hello World");
  User = document.getElementById("usr").value;
  Password = document.getElementById("pwd").value;
  if (localStorage.getItem("itemjson") == null) {
    let itemArr = [];
    itemArr.push([User, Password]);
    localStorage.setItem("itemjson", JSON.stringify(itemArr));
  } else {
    let itemArryStr = localStorage.getItem("itemjson");
    itemArr = JSON.parse(itemArryStr);
    itemArr.push([User, Password]);
    localStorage.setItem("itemjson", JSON.stringify(itemArr));
  }
});
