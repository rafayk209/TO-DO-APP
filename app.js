var list = document.getElementById('list')

function add() {
    var input = document.getElementById("input");
    var litext = document.createTextNode(input.value);
    var li = document.createElement("li");
    li.appendChild(litext);

    var dltbtn = document.createElement("button");
    var dltTXt = document.createTextNode(" Remove");
    dltbtn.appendChild(dltTXt);
    li.appendChild(dltbtn);
    dltbtn.setAttribute('onClick', 'removeitem(this)')

    var edt = document.createElement('button');
    var edttxt = document.createTextNode("Edit");
    edt.appendChild(edttxt);
    li.appendChild(edt);
    edt.setAttribute("onclick","edt(this)")


    list.appendChild(li);
    console.log(li);
    console.log(dltbtn);

    input.value = ''
}

function removeitem(a) {
    a.parentNode.remove()
}

function deleteAll() {
    list.innerHTML = ''

}
function edt(e){
    var edit=e.parentNode.firstChild.nodeValue
    var editValue = prompt("What to do?",edit)
    e.parentNode.firstChild.nodeValue = editValue
 } 