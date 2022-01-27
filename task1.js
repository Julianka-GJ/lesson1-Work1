let square = prompt('Введите площадь основы цилиндра S');
let radius = prompt('Введите радиус цилиндра R');
let height = prompt('Введите высоту цилиндра H');
let line = '--------------------';
let star ='**************';
let br = '<br><br>';

volume = Math.PI*(radius**2)* height;

document.write((br), (star), (br),'Обьем цилиндра с площадью основы *S* = ' + (square),', радиусом *R* = '+ (radius),', и высотой *H* = ' + (height),', равен:' + (br), (line), (br), 'V = ' + (volume), (br), (line), (br),'end.');
                                           

                                  