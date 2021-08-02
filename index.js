var x=  document.getElementById("input")//获取输入框元素
const data = [
    {
        id: 1,
        text: "这是一个实验",
        selected: false
    }
];

var listWarper = document.getElementById("listWarper");
var item = document.createElement("div");
item.className = "item";
var itemleft = document.createElement("div");
itemleft.className = "itemleft";
var click = document.createElement("div");
click.className = "click";
var text = document.createElement("div");
text.className = "text";
var delet = document.createElement("div");
delet.className = "delete";
delet.innerHTML = "删除";
delet.onclick = function() {
    console.log(1);
}

item.appendChild(itemleft);
item.appendChild(delet);
itemleft.appendChild(click);
itemleft.appendChild(text);
console.log('item', item);

data.forEach(function(item, index) {
    text.index = item.text;
    click.value = item.selected;
})

//提交
function submit() {
    click.value = false;
    text.innerText = x.value;
    listWarper.appendChild(item);
    console.log(listWarper)
}
