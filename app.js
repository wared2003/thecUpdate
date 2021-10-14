let li = document.querySelectorAll('.list-group-item');
let listbtn = document.querySelector('#list-btn');
let active_li = 0;
let back_to_botom = true;
let titles = document.querySelector('#titles');
let titles_position = 0;
let txt = document.querySelectorAll('.txt');
let windowsAlertBox = document.querySelector('#windows-alert');
let fuckUpBtn = document.querySelector('#fucked-up-btn');
let random_win_alert_container = document.querySelector('#random_win_alert_container')

let windows_error_song = new Audio('assets/microsoft-windows-xp-error-sound-effect-hd.mp3');

colors = ['C0C0C0', 'FF0000', '800080', 'FF00FF', '000080', '008080', '00FF00'];

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
            "<h3>Ca c'est un sous-titre</h3>";
        titles_position = 0;
    }

})
txt.forEach((entry) => {
    entry.addEventListener('mouseenter', () => {
        colore = colors[Math.floor(Math.random()*colors.length)];
        entry.style.color = '#' + colore;
    });
});

fuckUpBtn.addEventListener('click', fucked_up)

function fucked_up() {
    windowsAlertBox.style.display = 'inline';
    windows_error_song.play()
    gen_error_box()
    gen_error_box()
    gen_error_box()

}