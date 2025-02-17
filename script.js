function moneyConverter() {

    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;


    const amount = parseFloat(document.getElementById("amount").value) || 0;


    const rates = {
        USD: {
            RUB: 102,
            EUR: 0.92,
            SEK: 10.82,
            AED: 3.67
        },
        EUR: {
            USD: 1.09,
            RUB: 110,
            SEK: 11.75,
            AED: 4.01
        },
        RUB: {
            USD: 0.0098,
            EUR: 0.0091,
            SEK: 0.11,
            AED: 0.036
        },
        SEK: {
            USD: 0.092,
            EUR: 0.085,
            RUB: 9.1,
            AED: 0.34
        },
        AED: {
            USD: 0.27,
            EUR: 0.25,
            RUB: 27.6,
            SEK: 2.93
        }
    };

    // Выполняем конвертацию
    let result = 0;
    if (fromCurrency !== toCurrency) {
        // Получаем курс для конвертации
        result = amount * rates[fromCurrency][toCurrency];
    } else {
        result = amount;
    }

    // Отображаем результат
    document.getElementById("result").innerText = result.toFixed(2);
}
