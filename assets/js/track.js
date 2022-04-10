//see more.js---------------------------------------------------------
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


//top.js---------------------------------------------------------------
window.onscroll = scrollFunction; //每當畫面捲動觸發一次

function scrollFunction() { 
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    document.getElementById("myBtn","myBtn0").style.display = "block";
  } else {
    document.getElementById("myBtn","myBtn0").style.display = "none";
  }
}//網頁捲動超過200pixel就會跑出來 display設定成block 跑回上面就隱藏。

// 重置scrollTop這個變數的值
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}