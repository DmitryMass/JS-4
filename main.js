
function answer () {

    let string  = '';
    let question ;
    let end = true;  // нужно тру значение, чтобы вывести конфирм в котором можно сделать фолс отмену.(можно использовать просто строку)
    let i = 0;

    do {
        i+=1;

        if(i % 3 != 0) {
            question = prompt("Введите слова");
            string += question;
            console.log(string);  // можно убрать, тогда покажет результат при отмене. не будет выводить сразу в консоль
        } else {
            end = confirm("The end?");
        } 
      } while (end);
    console.log(string);
    }


answer();




