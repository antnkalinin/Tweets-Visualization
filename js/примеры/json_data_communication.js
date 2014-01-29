// ********************************************************************************************************************************************************
// ************* CONTENT *************
// ********************************************************************************************************************************************************


// создания элементов
// (id элемента куда, какого типа новый элемент, какой будет id у нового элемента, какой будет class у нового элемента)
function create_elements(id_used_block, new_element, id_new_element, class_new_element){
    var in_block = document.getElementById(id_used_block);                                  // заносим в переменную id элемента в который будем добавлять новый элементы
    var new_el = document.createElement(new_element);                                       // создаем элемент и заносим в переменную
    new_el.id = (id_new_element);                                                           // добавляем id новому элементу
    in_block.appendChild(new_el);                                                           // добавляем элемент в нужное место
    if (class_new_element != undefined) {                                                   // если параметр не пуст
        document.getElementById(id_new_element).setAttribute('class', class_new_element);   // присваеваем добавляем class новому элементу
    }
}

// удаление элементов (что, где)
function delitDiv(iddiv,bb){
    var del = document.getElementById(iddiv);
//    if ( !document.createRange ) {
//        del.innerHTML = "";
//    }
//    else
//    {
//        var tmpRange = document.createRange();
//
//        tmpRange.selectNodeContents(del);
//        tmpRange.deleteContents();
//
//        tmpRange.detach();
//    }
    var parent = document.getElementById(bb);
    if (del != undefined) {
        parent.removeChild(del);
    }
}

// функция добавление контента из json
function info_output(){
    delitDiv('wrap', 'content');                                                     // удаляем блоки которые были выведены до этого
    var xhttp=new XMLHttpRequest();                                     // странная херь (без нее не работает)
    xhttp.open('GET','sitebase.json',true);                         // вроде как подключаем файл json
    xhttp.send();                                                   // хер его знает (без нее не работает)
    xhttp.onreadystatechange=function(){                            // хер его знает (без нее не работает)
        if (xhttp.readyState==4){
            //Принятое содержимое json файла должно быть вначале обработано функцией eval
            var json=eval( '('+xhttp.responseText+')' );
            //Далее мы можем спокойно использовать данные

            create_elements('content', 'ul', 'wrap');          //создаем элемент ul
//
            var n = 0;        // значение переменной показывает какие данные брать из файла json
//            var json_name = ('bookbase');
            while (json.bookbase[n] != undefined) {
                var x = ('id_href') + n;
                var y = ('id_logo') + n;
                var z = ('id_link') + n;
                var new_li = ('new_li') + n;
                var new_div = ('new_div') + n;
                // (id_used_block, new_element, id_new_element, class_new_element)
                create_elements('wrap', 'li', [new_li]);
                create_elements([new_li], 'a', [x], 'contLink');
                create_elements([x], 'div', [new_div]);
                create_elements([new_div], 'img', [y]);
                create_elements([x], 'span', [z]);
                document.getElementById(x).setAttribute('href', json.bookbase[n].href);
                document.getElementById(y).setAttribute('src', json.bookbase[n].link);
                document.getElementById(z).innerHTML=json.bookbase[n].name;
                n++;
            }
        }
    }
}

// функция добавление контента из json по рубрикам
function info_output_heading(n1, n2, n3){
    delitDiv('wrap', 'content');                                                     // удаляем блоки которые были выведены до этого
    xhttp=new XMLHttpRequest();                                     // странная херь (без нее не работает)
    xhttp.open('GET','jsonsitebase.json',true);                         // вроде как подключаем файл json
    xhttp.send();                                                   // хер его знает (без нее не работает)
    xhttp.onreadystatechange=function(){                            // хер его знает (без нее не работает)
        if (xhttp.readyState==4){
            //Принятое содержимое json файла должно быть вначале обработано функцией eval
            var json=eval( '('+xhttp.responseText+')' );
            //Далее мы можем спокойно использовать данные

            create_elements('content', 'ul', 'wrap');          //создаем элемент ul
//
//            var n3 = 0;
//            var n1 = 0;
//            var n2 = 0;
            var n = 0;                          // значение переменной показывает какие данные брать из файла json
//            var json_name = ('bookbase');
            while (json.desk[n1] != undefined) {
//                alert('n1 равен ' + n1)
                while (json.desk[n1].heading[n2] != undefined) {
//                    alert('n2 равен ' + n2)
                    while (json.desk[n1].heading[n2].category[n3] != undefined){
//                        alert('n3 равен ' + n3 + ' вывод')
                        n = (n1 + '' + n2 + '' + n3 + '');
                        var x = ('id_href') + n;
                        var y = ('id_logo') + n;
                        var z = ('id_link') + n;
                        var new_li = ('new_li') + n;
                        var new_div = ('new_div') + n;
                        // (id_used_block, new_element, id_new_element, class_new_element)
                        create_elements('wrap', 'li', [new_li]);
                        create_elements([new_li], 'a', [x], 'contLink');
                        create_elements([x], 'div', [new_div]);
                        create_elements([new_div], 'img', [y]);
                        create_elements([x], 'span', [z]);
                        document.getElementById(x).setAttribute('href', json.desk[n1].heading[n2].category[n3].href);
                        document.getElementById(y).setAttribute('src', json.desk[n1].heading[n2].category[n3].link);
                        document.getElementById(z).innerHTML=json.desk[n1].heading[n2].category[n3].name;
                        n3++;
                    }
                    n2++;
                    n3 = 0;
                }
                n1++;
                n2 = 0;
            }
        }
    }
}
// ********************************************************************************************************************************************************
// ************* MENU *************
// ********************************************************************************************************************************************************


// создания элементов меню
function create_elements_menu(id_used_block, new_element, id_new_element, class_new_element, content_new_element){    // (id элемента куда, какого типа новый элемент, какой будет id у нового элемента, какой будет class у нового элемента, какой текст будет в элементе, категория взятая из json, номер категории из json)
    var in_block = document.getElementById(id_used_block);                                  // заносим в переменную id элемента в который будем добавлять новый элементы
    var new_el = document.createElement(new_element);                                       // создаем элемент и заносим в переменную
    new_el.id = (id_new_element);                                                           // добавляем id новому элементу
    in_block.appendChild(new_el);                                                           // добавляем элемент в нужное место
    if (class_new_element != undefined) {                                                   // если параметр не пуст
        document.getElementById(id_new_element).setAttribute('class', class_new_element);   // присваеваем добавляем class новому элементу
    }
    if (content_new_element != undefined) {                                                   // если параметр не пуст
        document.getElementById(id_new_element).innerHTML=json.bookbase[n].name;
    }
}

// добавления меню из json
function menu_output(){
    delitDiv('topnavid', 'categoryContent');
    xhttp=new XMLHttpRequest();                                     // странная херь (без нее не работает)
    xhttp.open('GET','jsonsitebase.json',true);                         // вроде как подключаем файл json
    xhttp.send();                                                   // хер его знает (без нее не работает)
    xhttp.onreadystatechange=function(){                            // хер его знает (без нее не работает)
        if (xhttp.readyState==4){
            //Принятое содержимое json файла должно быть вначале обработано функцией eval
            var json=eval( '('+xhttp.responseText+')' );
            //Далее мы можем спокойно использовать данные
            create_elements('categoryContent', 'ul', 'topnavid', 'topnav');          //создаем элемент ul
            var n = 0;        // значение переменной показывает какие данные брать из файла json
            while (json.desk[0].heading[n] != undefined) {
                var new_cat_li = ('new_cat_li_') + n;
                create_elements('topnavid', 'li', [new_cat_li]);
                var new_cat_input = ('new_cat_input_') + n;
                create_elements([new_cat_li], 'input', [new_cat_input]);

//                document.getElementById(new_cat_input).innerHTML =json.desk[n].name;
                document.getElementById(new_cat_input).setAttribute('type', 'bottom');
                document.getElementById(new_cat_input).setAttribute('value', json.desk[n].name);
                document.getElementById(new_cat_input).setAttribute('onclick', 'test(value); return false;');

//                var new_cat_ul = ('new_cat_ul_') + n;
//                create_elements([new_cat_li], 'ul', [new_cat_ul]);
//                var m = 0;
//                while (json.desk[n].heading[m] != undefined) {
//                    var dop_cat_li = ('dop_cat_li_') + n + '_' + m;
//                    create_elements(new_cat_ul, 'li', [dop_cat_li]);
//
//                    var dop_cat_a = ('dop_cat_a_') + n + '_' + m;
//                    create_elements([dop_cat_li], 'a', [dop_cat_a]);
//
//                    document.getElementById(dop_cat_a).innerHTML =json.desk[n].heading[m].name;
////                    document.getElementById(dop_cat_a).setAttribute('href', '#');
//
////                    document.getElementById(dop_cat_a).setAttribute('onclick', 'info_output();');
//
//                    m++;
//                }

                                                //                var x = ('id_href') + n;
                                                //                var y = ('id_logo') + n;
                                                //                var z = ('id_link') + n;
                                                //                var new_cat_div = ('new_cat_div') + n;

                // (id_used_block, new_element, id_new_element, class_new_element)

//                create_elements([new_cat_li], 'a', [x], 'contLink');
//                create_elements([x], 'div', [new_cat_div]);
//                create_elements([new_cat_div], 'img', [y]);
//                create_elements([x], 'span', [z]);
//                document.getElementById(x).setAttribute('href', json.bookbase[n].href);
//                document.getElementById(y).setAttribute('src', json.bookbase[n].link);
//                document.getElementById(z).innerHTML=json.bookbase[n].name;
                n++;
            }
        }
    }
}
// вывод определенного контента по нажатию на кнопку рубрики
function test(pheading) {
    delitDiv('wrap', 'content');                                                     // удаляем блоки которые были выведены до этого
    xhttp=new XMLHttpRequest();                                     // странная херь (без нее не работает)
    xhttp.open('GET','jsonsitebase.json',true);                         // вроде как подключаем файл json
    xhttp.send();                                                   // хер его знает (без нее не работает)
    xhttp.onreadystatechange=function(){                            // хер его знает (без нее не работает)
        if (xhttp.readyState==4){
            //Принятое содержимое json файла должно быть вначале обработано функцией eval
            var json=eval( '('+xhttp.responseText+')' );
            //Далее мы можем спокойно использовать данные

            create_elements('content', 'ul', 'wrap');          //создаем элемент ul
//
            var n3 = 0;
            var n1 = 0;
            var n2 = 0;
            var n = 0;                          // значение переменной показывает какие данные брать из файла json
            while (json.desk[n1] != undefined) {
//                alert('n1 равен ' + n1);
                while (json.desk[n1].name == pheading && json.desk[n1].heading[n2] != undefined) {
//                    alert('n2 равен ' + n2);
                    while (json.desk[n1].heading[n2].category[n3] != undefined){
//                        alert('n3 равен ' + n3 + ' вывод');
                        n = (n1 + '' + n2 + '' + n3 + '');
                        var x = ('id_href') + n;
                        var y = ('id_logo') + n;
                        var z = ('id_link') + n;
                        var new_li = ('new_li') + n;
                        var new_div = ('new_div') + n;
                        // (id_used_block, new_element, id_new_element, class_new_element)
                        create_elements('wrap', 'li', [new_li]);
                        create_elements([new_li], 'a', [x], 'contLink');
                        create_elements([x], 'div', [new_div]);
                        create_elements([new_div], 'img', [y]);
                        create_elements([x], 'span', [z]);
                        document.getElementById(x).setAttribute('href', json.desk[n1].heading[n2].category[n3].href);
                        document.getElementById(y).setAttribute('src', json.desk[n1].heading[n2].category[n3].link);
                        document.getElementById(z).innerHTML=json.desk[n1].heading[n2].category[n3].name;
                        n3++;
                    }
                    n2++;
                    n3 = 0;
                }
                n1++;
                n2 = 0;
            }
        }
    }
}

// вывод определенного контента по нажатию на кнопку категории
function test2(pheading) {
    delitDiv('wrap', 'content');                                                     // удаляем блоки которые были выведены до этого
    xhttp=new XMLHttpRequest();                                     // странная херь (без нее не работает)
    xhttp.open('GET','jsonsitebase.json',true);                         // вроде как подключаем файл json
    xhttp.send();                                                   // хер его знает (без нее не работает)
    xhttp.onreadystatechange=function(){                            // хер его знает (без нее не работает)
        if (xhttp.readyState==4){
            //Принятое содержимое json файла должно быть вначале обработано функцией eval
            var json=eval( '('+xhttp.responseText+')' );
            //Далее мы можем спокойно использовать данные

            create_elements('content', 'ul', 'wrap');          //создаем элемент ul
//
            var n3 = 0;
            var n1 = 0;
            var n2 = 0;
            var n = 0;                          // значение переменной показывает какие данные брать из файла json
            while (json.desk[n1] != undefined) {
//                alert('n1 равен ' + n1);
                while (json.desk[n1].heading[n2] != undefined) {
//                    alert('n2 равен ' + n2);
                    while (json.desk[n1].heading[n2].name == pheading && json.desk[n1].heading[n2].category[n3] != undefined){
//                        alert('n3 равен ' + n3 + ' вывод');
                        n = (n1 + '' + n2 + '' + n3 + '');
                        var x = ('id_href') + n;
                        var y = ('id_logo') + n;
                        var z = ('id_link') + n;
                        var new_li = ('new_li') + n;
                        var new_div = ('new_div') + n;
                        // (id_used_block, new_element, id_new_element, class_new_element)
                        create_elements('wrap', 'li', [new_li]);
                        create_elements([new_li], 'a', [x], 'contLink');
                        create_elements([x], 'div', [new_div]);
                        create_elements([new_div], 'img', [y]);
                        create_elements([x], 'span', [z]);
                        document.getElementById(x).setAttribute('href', json.desk[n1].heading[n2].category[n3].href);
                        document.getElementById(y).setAttribute('src', json.desk[n1].heading[n2].category[n3].link);
                        document.getElementById(z).innerHTML=json.desk[n1].heading[n2].category[n3].name;
                        n3++;
                    }
                    n2++;
                    n3 = 0;
                }
                n1++;
                n2 = 0;
            }
        }
    }
}

function starts(){                                                      //тестовая функция
    $(document).ready(function() {
        $("#topnavid").accordion({
            accordion:true,
            speed: 250,
            closedSign: '',
            openedSign: ''
        });
    });
}