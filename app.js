let li = document.querySelectorAll('.list-group-item');
let listbtn = document.querySelector('#list-btn');
let active_li = 0;
let back_to_botom = true;
let titles = document.querySelector('#titles');
let titles_position = 0;

listbtn.addEventListener('click', () => {
    if (active_li < 4 && back_to_botom == true) {
        li[active_li].className = 'list-group-item';
        li[active_li + 1].className = 'list-group-item active';
        active_li++;
    } else {
        li[active_li].className = 'list-group-item';
        li[active_li - 1].className = 'list-group-item active';
        active_li--;
        if (active_li != 0) {
            back_to_botom = false;
        } else {
            back_to_botom = true;
        }
    }
})

titles.addEventListener('click', () => {
    let old_html = titles.innerHTML;
    if (titles_position == 0 ){
        titles.innerHTML = "<h3>Ca c'est un sous-titre</h3>" +
            "<h1>Ca c'est un titre</h1>";
        titles_position = 1;
    }else{
        titles.innerHTML = "<h1>Ca c'est un titre</h1>" +
            "<h3>Ca c'est un sous-titre</h3>"
        titles_position = 0;
    }

})