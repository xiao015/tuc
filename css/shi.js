/*诗*/
if ($("div").hasClass("poem-wrap")) {
get_poem('#poem', '#info')
}
function get_poem(poem_ele, info_ele) {
var poem = document.querySelector(poem_ele);
var info = document.querySelector(info_ele);
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://v2.jinrishici.com/one.json');
xhr.withCredentials = true;
xhr.onreadystatechange = function() {
if (xhr.readyState === 4) {
var data = JSON.parse(xhr.responseText);
poem.innerHTML = data.data.content;
info.innerHTML = '【' + data.data.origin.dynasty + '】' + data.data.origin.author + '《' + data.data.origin.title + '》';
}
};
xhr.send();
}
