//in functie de valoarea key-lui salary,array-ul se sorteaza de la mic la mare

(function () {
    var cars = [
        {name: "John", salary: 20000 },
        {name: "Danny", salary: 30500 },
        {name: "Bekker", salary: 15000 }
    ];
    cars.sort((a,b) => a.salary - b.salary)
    console.log(cars)
})();
