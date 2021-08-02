var x=  document.getElementById("input")//获取输入框元素
const data = [
    {
        id: 1,
        text: "这是一个实验",
        selected: false
    }
];

var listWarper = document.getElementById("listWarper");

data.forEach(function(item, index) {
    text.index = item.text;
    click.value = item.selected;
})

//提交
function submit() {
    if(x.value) {
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
            document.getElementById("listWarper").removeChild(item);
        }
        item.appendChild(itemleft);
        item.appendChild(delet);
        itemleft.appendChild(click);
        itemleft.appendChild(text);
    
        click.value = false;
        text.innerText = x.value;
        document.getElementById("listWarper").appendChild(item);
        console.log(listWarper)
    } else {
        alert('请输入内容')
    }
}
