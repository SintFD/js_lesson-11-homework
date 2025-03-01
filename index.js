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
    inStock: false,
  },
  {
    name: "PC",
    price: 200,
    discount: 45,
    inStock: true,
  },
  {
    name: "pencil",
    price: 15,
    discount: 2,
    inStock: true,
  },
  {
    name: "notebook",
    price: 100,
    discount: 2,
    inStock: true,
  },
  {
    name: "mouse",
    price: 30,
    discount: 2,
    inStock: false,
  },
  {
    name: "keyboard",
    price: 40,
    discount: 2,
    inStock: true,
  },
];

const newGoods = goods.map((product) => {
  const { price, discount } = product;
  //   return name + " " + (price - discount);

  return {
    ...product,
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

// console.log(getUserNames(students));

// Задача 5:
// Напиши стрелочную функцию getUsersWithFriend(users, friendName), которая
// будет принимать два параметра:
// 1. Первый параметр users — массив объектов пользователей.
// 2. Второй параметр friendName — имя друга для поиска.
// Функция должна возвращать массив всех пользователей из массива users, у которых
// есть друг с именем friendName. Друзья каждого пользователя хранятся в свойстве
// friends. Если пользователей с таким другом нет, то функция должна вернуть пустой
// массив.
// Советы:
// ● Метод filter() можно использовать для создания нового массива с
// элементами, которые удовлетворяют определенному условию.
// ● Используй метод includes() для проверки, содержит ли массив friends имя
// друга friendName

const users = [
  {
    id: 1,
    name: "Иван Петров",
    age: 25,
    email: "ivan.petrov@example.com",
    isActive: true,
    friends: ["Анна", "Максим", "Дмитрий"],
  },
  {
    id: 2,
    name: "Анна Смирнова",
    age: 30,
    email: "anna.smirnova@example.com",
    isActive: false,
    friends: ["Иван", "Ольга"],
  },
  {
    id: 3,
    name: "Максим Иванов",
    age: 22,
    email: "max.ivanov@example.com",
    isActive: true,
    friends: ["Иван", "Дмитрий"],
  },
  {
    id: 4,
    name: "Ольга Сидорова",
    age: 28,
    email: "olga.sidorova@example.com",
    isActive: false,
    friends: ["Анна", "Дмитрий"],
  },
  {
    id: 5,
    name: "Дмитрий Козлов",
    age: 35,
    email: "dmitry.kozlov@example.com",
    isActive: true,
    friends: ["Иван", "Максим", "Ольга"],
  },
];

const getUsersWithFriend = (users, friendName) => {
  return users.filter(({ friends }) => friends.includes(friendName));
};

// console.log(getUsersWithFriend(users, "Иван"));

// Задача 6: Фильтрация доступных товаров
// У вас есть массив товаров, каждый из которых имеет свойства: name, price, inStock
// (наличие на складе). Напишите функцию, которая возвращает все товары, которые
// есть в наличии и стоят меньше 50

const inStockGoods = goods.filter(
  ({ inStock, price }) => inStock && price < 50
);

// console.log(inStockGoods);
