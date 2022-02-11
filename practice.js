function celsiusToFahrenheit(celsius)
{
    const far = ((celsius * 9 / 5) + 32);
    return far;
}

console.log(celsiusToFahrenheit(26));


function FahrenheitToCelsius(fahrenheit)
{
    const cel = ((fahrenheit - 32) * 5 / 9);
    return cel;
}

console.log(FahrenheitToCelsius(78.8));


function getGrade(percent)
{
    if (percent > 100)
    {
        return "Please Give me under 100"
    }

    if (percent < 0)
    {
        return "Please Give Positive value"
    }
    if (percent >= 80 && percent <= 100)
    {
        return 'A+';
    }
    if (percent >= 70 && percent <= 79)
    {
        return 'A';
    }
    if (percent >= 60 && percent <= 69)
    {
        return 'A-';
    }
    if (percent >= 50 && percent <= 59)
    {
        return 'B';
    }
    if (percent >= 40 && percent <= 49)
    {
        return 'C';
    }
    if (percent >= 33 && percent <= 39)
    {
        return 'D';
    }
    return 'F';
}

console.log(getGrade(33));

/* 
    Simple Interest Calculation
*/

function getInterest(amount, year, rate)
{
    const si = (amount * year * rate) / 100;
    return si;
}

console.log(getInterest(40000, 10, 20));