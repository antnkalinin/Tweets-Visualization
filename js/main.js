var oll = $(document).ready(function(){
 //   $('.close_img').bind('click', function callback(eventObject) {
 //       var m = this; // dom element
 //       alert(m);
 //       m.className = ('q1112356565656564');
  //  });
    $('#add').bind('click', start);       //РАБОЧИЙ ВАРИАНТ
    $('#get').bind('click', ajax);       //РАБОЧИЙ ВАРИАНТ

    $('.clear_checkbox_list').bind('click', clear_checkbox_list);
});

function clear_checkbox_list() {
    $('#checkbox_list').replaceWith('<form id="checkbox_list" class="form-inline"></form>');
}

function find_close () { // after add new checkbox find them
    $('.close_img').bind('click', function callback(eventObject) {
        var m = this; // dom element
        $(m).closest("div").remove();  //
    });
}

function start() {  // add new element in checkbox_list
    var m = document.getElementById('index').valueOf();
    $(document).ready(function(){
        $('#checkbox_list').append('' +
            '<div class="wq">' +
            '<label class="checkbox">' +
            '   <input type="checkbox" />' + m.value + '' +
            '</label>' +
            '<i class="icon-remove close_img"></i>' +
            '</div>'
        );
        find_close();
    });
}

function ajax() {
    $.ajax({
        type: "GET",
        url: "api.twitter.com/1.1/statuses/show.json?id=210462857140252672",
        dataType: "json"
    });
}