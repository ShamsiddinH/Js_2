var number = +prompt('Выбирайте число:' + '1.Задание 1; ' + '2.Задание 2; ' + '3.Задание 3.');

if(number == 1) {
    var num = +prompt('Введите чисы: ');

    switch(num) {
            case 1:
                alert('Час ночи');
                break;
            case 2:
                alert('2 часов ночи');
                break;
            case 3:
                alert('3 часов ночи');
                break;
            case 4:
                alert('4 часов ночи');
                break;
            case 5:
                alert('5 часов утра');
                break;
            case 6:
                alert('6 часов утра');
                break;
            case 7:
                alert('7 часов утра');
                break;
            case 8:
                alert('8 часов утра');
                break;
            case 9:
                alert('9 часов утра');
                break;
            case 10:
                alert('10 часов утра');
                break;
            case 11:
                alert('11 чесов утра');
                break;
            case 12:
                alert('12 часов дня');
                break;
            case 13:
                alert('1 часов дня');
                break;
            case 14:
                alert('2 часов дня');
                break;
            case 15:
                alert('3 часов дня');
                break;
            case 16:
                alert('4 часов дня');
                break;
            case 17:
                alert('5 часов дня');
                break;
            case 18:
                alert('6 часов вечера');
                break;
            case 19:
                alert('7 часов вечера');
                break;
            case 20:
                alert('8 часов вечера');
                break;
            case 21:
                alert('9 часов вечера');
                break;
            case 22:
                alert('10 часов вечера');
                break;
            case 23:
                alert('11 часов вечера');
                break;
            case 24:
                alert('12 часов ночи');
                break;
            default:
                alert('Нет такого времени');
                break;
    }
}else if(number == 2) {
    var vozrast = +prompt('Введите свой возраст: ');

    if(vozrast > 0 && vozrast < 18) {
        alert('Вы еще молоды. Вам нужна учится;');
    }else if(vozrast > 18 && vozrast < 50) {
        alert('Вам нужно работать;');
    }else if(vozrast > 50 && vozrast < 59) {
        alert('Вам скоро на пенсию;');
    }else if(vozrast > 59 && vozrast < 150) {
        alert('Вы пенсионер;');
    }else {
        alert('Что-то пошло не так;');
    }
}else if(number == 3) {
    var a = +prompt('Введите первое число:');
    var b = +prompt('Введите второе число:');
    var c = +prompt('Введите третье число:');

    if((c > b) && (a < c) && (b > a)) {
        alert(b);    
    }else if((c > a) && (b < c) && (b < a)) {
        alert(a);
    }else if((b > a) && (c < b) && (c > a)) {
        alert(c);
    }else if((b < a) && (c < a) && (c > b)) {
        alert(c);
    }else if((b < a) && (c < a) && (c < b)) {
        alert(b);
    }else if((b > a) && (c < b) && (c < a)) {
        alert(a);
    }else if((c > b) && (a < c) && (b == a)) {
        alert(b);    
    }else if((c > a) && (b < c) && (b == a)) {
        alert(a);
    }else if((b > a) && (c < b) && (c == a)) {
        alert(c);
    }else if((b < a) && (c < a) && (c == b)) {
        alert(c);
    }else if((b < a) && (c < a) && (c == b)) {
        alert(b);
    }else if((b > a) && (c < b) && (c == a)) {
        alert(a);
    }
}