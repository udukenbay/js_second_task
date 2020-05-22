alert("JS file was added");
let money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

//var appData = new Object();//https://habr.com/ru/post/17613/

appData = {
    budget : money,
    date : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
}

/*for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(a)) != null
            && a != '' && b != '' && a.length < 50 ) {
                console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log('try again');
        i--;
    }
};*/

/*let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(a)) != null
            && a != '' && b != '' && a.length < 50 ) {
                console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log('try again');
        i--;
    }

    i++;
} while (i < 2)*/

let i = 0;
while (i<2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(a)) != null
            && a != '' && b != '' && a.length < 50 ) {
                console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log('try again');
        i--;
    }

    i++;
}

appData.moneyPerDay = appData.budget / 30;

//console.log("expenses: " + appData.expenses.a1);

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}