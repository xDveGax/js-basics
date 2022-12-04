import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
console.log(1 == '1'); // true | Coercion |convert both values to string
console.log(1 === '1'); // false

// truthy values
console.log(!!true);
console.log(Boolean(true));
console.log(!!{});
console.log(!![]);
console.log(!!new Date());
console.log(!!'0');
console.log(!!42);
console.log(!!-42);
console.log(!!3.14);
console.log(!!-3.14);

// falsy values
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!!0);
console.log(!!NaN);
console.log(!!'');
