function hero() {
    // Получение значений данных из полей ввода
    var firstName = document.getElementById("firstName").value;
    var surName = document.getElementById("surName").value;

    // Проверка на ввод корректных данных
    if ((firstName==0) || (surName==0) ) {
        alert("Пожалуйста, введите корректные данные");
        return false;
    }

    var endHero = firstName + " " + surName;
    
    // Вывод результата на страницу
    document.getElementById("result").innerHTML = "Ваш герой " + endHero ;
}
