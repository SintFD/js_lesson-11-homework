// Задача 1: Преобразование списка товаров
// У вас есть массив товаров, где каждый товар представлен объектом с полями name,
// price, и discount. Необходимо создать новый массив, где для каждого товара будет
// добавлена новая переменная finalPrice, которая рассчитывается как price -
// discount. Результат должен быть массивом, который включает name и finalPrice
// для каждого товара.

const goods = [
  {
    name: "book",
    price: 20,
    discount: 5,
  },
  {
    name: "PC",
    price: 200,
    discount: 45,
  },
  {
    name: "pencil",
    price: 10,
    discount: 2,
  },
];

const newGoods = goods.map(({ name, price, discount }, index) => {
  //   return name + " " + (price - discount);
  return {
    ...goods[index],
    finalPrice: price - discount,
  };
});

// console.log(newGoods);

// Задача 2: Преобразование оценок студентов
// У вас есть массив объектов студентов, где каждый объект включает поля name и
// grades (массив оценок). Нужно создать новый массив, который будет содержать
// только имя студента и среднюю оценку по всем предметам

const students = [
  {
    name: "Федя",
    grades: [40, 90, 60],
  },
  {
    name: "Петя",
    grades: [70, 50, 30],
  },
  {
    name: "Саша",
    grades: [78, 45, 90, 13],
  },
];

const avgRating = students.map(({ name, grades }) => {
  let sum = 0;
  grades.forEach((el) => {
    sum = sum + el;
  });
  return name + " " + (sum / grades.length).toFixed(1);
});

// console.log(avgRating);

// Задача 3: Пересчет цен в другую валюту
// У тебя есть массив товаров с ценами в долларах. Нужно преобразовать массив,
// пересчитав цены в евро (1 USD = 0.93 EUR).

const eurPrice = goods.map(({ price, name }) => {
  return { name, price: price * 0.93 };
});

// console.log(eurPrice);

// Задача 4:
// Напиши стрелочную функцию getUserNames(users), которая будет принимать один
// параметр users — массив объектов пользователей. Функция должна возвращать
// массив имен всех пользователей (свойство name) из массива users.

const getUserNames = (users) => {
  return users.map(({ name }) => name);
};

console.log(getUserNames(students));
