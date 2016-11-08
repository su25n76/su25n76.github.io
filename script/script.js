/* cash */
var doc = document;

/* age */
var year_birth = 1994;

var data_current = new Date();

var year_current = data_current.getFullYear();

var dif = year_current - year_birth;

var age = doc.getElementsByClassName("js-age")[0];

age.innerHTML = dif;

/* increase screenshot */
var body = doc.getElementsByTagName("body")[0];

function increase_photo()
{
    // search need element-img
    var current_item = event.currentTarget;
    var address_img = current_item.getAttribute("src");
    
    // create new block
    var block = doc.createElement("div");
    block.id = "parent-block";
    var cont_img = doc.createElement("div");
    cont_img.className = "container-img";
    var content = "<div class='icon-close'></div>";
    block.innerHTML = content;
    block.appendChild(cont_img);
    cont_img.style.backgroundImage = "url(./" + current_item.getAttribute("src") + ")";
    body.appendChild(block);
    
    var icon_close = doc.getElementsByClassName("icon-close")[0];

    icon_close.addEventListener("click", close_shot);
    
    // black bg
    body.className = "dis";
    
}

function close_shot()
{
    var delete_block = doc.getElementById("parent-block"); delete_block.parentNode.removeChild(delete_block);
    
    body.classList = "";
}

// get all screwnshot
var all_shot = doc.getElementsByClassName('.js-shot');

for(var i = 0, k = all_shot.length; i < k; i++)
{
    all_shot[i].addEventListener("click", increase_photo);
}