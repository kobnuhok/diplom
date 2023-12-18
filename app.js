// Функция для расчета объема и площади поверхности
function calculate() {
    // Получение значений длины и ширины из полей ввода
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);

    // Проверка на ввод корректных данных
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert("Пожалуйста, введите корректные данные");
        return false;
    }

    // Вычисление площади поверхности
    var surfaceArea = length * width;
    
    // Вывод результата на страницу
    document.getElementById("result").innerHTML = "Площадь поверхности: " + surfaceArea + " м²";
}
