"use strict";

var a = +prompt('Введите переменную а');
var b = +prompt('Введите переменную b');
var c = +prompt('Введите переменную c');
sum = a + b + c;
document.write(a, ' ' + b, ' ' + c);
document.write('<br><br> Сумма a+b+c =' + sum);

if (a % 2 == 0) {
  alert('Ваше число "a" четное');
} else {
  alert('Вы ввели нечетное число "a"');
}

;

if (b % 2 == 0) {
  alert('Ваше число "b" четное');
} else {
  alert('Вы ввели нечетное число "b"');
}

;

if (c % 2 == 0) {
  alert('Ваше число "c" четное');
} else {
  alert('Вы ввели нечетное число "c"');
}

;
var is_a = a % 2 == 0;
var is_b = b % 2 == 0;
var is_c = c % 2 == 0;
document.write('<br><br> число "a" четное = ' + is_a, '<br><br> число "b" четное =  ' + is_b, '<br><br> число "c" четное =  ' + is_c);