function show_this() {
  b = document.getElementById("put_in");
  a = document.getElementById("show");
  if (b.innerHTML == '') {
    b.innerHTML = `
    <h3>Держите красивую анимашку:<div class="child"><h2>червячок</h2></div></h3>

  `;
    a.innerHTML = `<div class="button_text">ТЫКНИ</div>`;
  }
  else if (b.innerHTML != '') {
    b.innerHTML = '';
    a.innerHTML = ' <div class="button_text">ТЫКНИ</div> ';
  }
}