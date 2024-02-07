function menushow(){
    let menumobile = document.getElementsByClassName('.mobile-menu')
    if(menumobile.classList.contains('open')){
        menumobile.classList.remove('open')
    }else{
        menumobile.classList.add('open')
    }
}