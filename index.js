var x=  document.getElementById("input")//获取输入框元素
const data = [
    {
        text: "这是一个实验1",
        selected: false
    },
    {
        text: "这是一个实验2",
        selected: false
    },
    {
        text: "这是一个实验3",
        selected: false
    },
];
const finishData = [
    {
        text: "完成1",
        selected: false
    },
    {
        text: "完成2",
        selected: false
    },
    {
        text: "完成3",
        selected: false
    },
];

var listWarper = document.getElementById("listWarper");


data.forEach(function(innerItem) {
    var item = document.createElement("div");
        item.className = "item";
        var itemleft = document.createElement("div");
        itemleft.className = "itemleft";
        var click = document.createElement("div");
        click.className = "click";
        var text = document.createElement("div");
        text.className = "text";
        var opreat = document.createElement("div");
        opreat.className = "opreat";
        var finish = document.createElement("div");
        finish.className = "finish";
        finish.innerHTML = "完成";
        finish.onclick = function() {
            delet.onclick = function() {
                document.getElementById("finish").removeChild(item);
            }
            opreat.removeChild(finish);
            document.getElementById("finish").appendChild(item)
        } 
        var delet = document.createElement("div");
        delet.className = "delete";
        delet.innerHTML = "删除";
        delet.onclick = function() {
            document.getElementById("listWarper").removeChild(item);
        }

        item.appendChild(itemleft);
        item.appendChild(opreat);
        opreat.appendChild(finish);
        opreat.appendChild(delet);
        itemleft.appendChild(click);
        itemleft.appendChild(text);
        click.value = false;
        text.innerText = innerItem.text;
        document.getElementById("listWarper").appendChild(item);
});
finishData.forEach(innerItem => {
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
            document.getElementById("finish").removeChild(item);
        }
       
        item.appendChild(itemleft);
        item.appendChild(delet);
        itemleft.appendChild(click);
        itemleft.appendChild(text);
        click.value = false;
        text.innerText = innerItem.text;
        document.getElementById("finish").appendChild(item);
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
        var opreat = document.createElement("div");
        opreat.className = "opreat";
        var finish = document.createElement("div");
        finish.className = "finish";
        finish.innerHTML = "完成";
        finish.onclick = function() {
            opreat.removeChild(finish);
            delet.onclick = function() {
                document.getElementById("finish").removeChild(item);
            }
            document.getElementById("finish").appendChild(item);
        }
        item.appendChild(itemleft);
        item.appendChild(opreat);
        opreat.appendChild(finish);
        opreat.appendChild(delet);
        itemleft.appendChild(click);
        itemleft.appendChild(text);
    
        click.value = false;
        text.innerText = x.value;
        document.getElementById("listWarper").appendChild(item);
    } else {
        alert('请输入内容')
    }
}
