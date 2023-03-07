
let yourAge = +prompt('Введите свой возраст')
if(yourAge > 0 && yourAge < 18){
    alert('вы еще молоды');
}else if(yourAge > 19 && yourAge < 55){
 alert('вам скоро на пенсию')
}else if(yourAge > 55 && yourAge < 65){
    alert('Вы на пенсии')
}else if(yourAge > 65 && yourAge < 75){
    alert('Отдыхайте )')
}else{
    alert('Ччччто-тто ппошло нене так ')
}