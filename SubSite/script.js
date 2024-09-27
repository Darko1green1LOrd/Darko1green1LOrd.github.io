function disableSpellcheck(){
    var elements = document.getElementsByTagName("textarea");
    var ElemArrayLength = elements.length;
    for (var Elemi = 0; Elemi < ElemArrayLength; Elemi++) {
        elements[Elemi].spellcheck=false
    }
}

function hidemsg(){
    const trigger = document.querySelector('#infobox-t');
    trigger.checked = false;
}

function showmsg(titlevar,text1var,text2var="",duration=6000){
    const trigger = document.querySelector('#infobox-t');
    const title = document.querySelector('#infobox-title');
    const text_1 = document.querySelector('#infobox-first');
    const text_2 = document.querySelector('#infobox-second');
    const ib_button = document.querySelector('#infobox-btn');

    title.innerHTML = titlevar;
    text_1.innerHTML = text1var;
    text_2.innerHTML = text2var;
    trigger.checked = true;

    if(duration == 0){ib_button.style.display = "block";}
    else{
        ib_button.style.display = "none";
        setTimeout(hidemsg, duration);
    }
}

function runonload(){
    disableSpellcheck();
}

function vist_page(link){
    window.location.href = link;
}
