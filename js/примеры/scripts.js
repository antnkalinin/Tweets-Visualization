var element = document.getElementsByClassName('add_dop');

function add_dop() {
    var list=this.childNodes;
    for(var i = 0; i < list.length; i++) {
        if (list[i].className != undefined) {
            if (list[i].className.indexOf('dop') > -1) {
                if (list[i].className.indexOf('hide') > -1) {
                    list[i].className = ('dop');
//                    alert("addEventListener yes");
                }
                else {
                    list[i].className = ('dop hide');
//                    alert("addEventListener no");
                }
            }
        }
    }

}

for(var i = 0; i < element.length; i++)
    element[i].addEventListener('click', add_dop, false);

// ======= onclick

function add_dop_onclick(xxx) {
    var list=xxx.childNodes;
    for(var i = 0; i < list.length; i++) {
        if (list[i].className != undefined) {
            if (list[i].className.indexOf('dop') > -1) {
                if (list[i].className.indexOf('hide') > -1) {
                    list[i].className = ('dop');
                    alert("onclick yes");
                }
                else {
                    list[i].className = ('dop hide');
//                    alert("onclick no");
                }
            }
        }
    }
}
