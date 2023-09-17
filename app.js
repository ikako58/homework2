// 1. მიიღეთ მომხმარებლების სია https://jsonplaceholder.typicode.com/users-დან
// და ამოიღეთ მხოლოდ მომხმარებლის სახელები მასივში.
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const usernames = data.map(user => user.username);
    console.log(usernames);
  })
  .catch(error => console.error('Error fetching data:', error));


// 2. შექმენით კლასი Car,რომელშიც აღწერილი იქნება:მოდელის, კომპანია,
// და წელი. შექმენით ამ კლასში ფუნქცია getCarDetails, რომელიც აბრუნებს
// მანქანის დეტალების შემაჯამებელ სტრიქონს.
class Car {
    constructor(model, company, year) {
      this.model = model;
      this.company = company;
      this.year = year;
    }
  
    getCarDetails() {
      return `Car Details:\nModel: ${this.model}\nCompany: ${this.company}\nYear: ${this.year}`;
    }
  }
  
  const myCar = new Car('CLS', 'Mercedes', 2021);
  console.log(myCar.getCarDetails());

// 3.ამ პოსტების API-დან https://jsonplaceholder.typicode.com/posts
// შექმენით კლასის პოსტი თვისებების ID,
// სათაური და ტექსტი. შექმენით Post ობიექტების მასივი მოტანილი მონაცემების საფუძველზე.
class Post {
    constructor(id, title, text) {
      this.id = id;
      this.title = title;
      this.text = text;
    }
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const postsArray = data.map(post => new Post(post.id, post.title, post.body));
      console.log(postsArray); 
    })
    .catch(error => console.error('Error fetching data:', error));
// 4. შექმენით ობიექტი,რომელიც შედგება სახელებისა და ასაკს მასივის გათვალისწინებით,
// გაფილტრეთ და დააბრუნეთ ახალი მასივი 18 წელზე უფროსი ასაკის პირების ობიექტებით,
//გამოიყენეთ filter მეთოდი!!
const people = [
    { name: 'John', age: 25 },
    { name: 'Anna', age: 16 },
    { name: 'Mike', age: 18 },
    { name: 'Sara', age: 30 }
  ];
  
  const adults = people.filter(person => person.age >= 18);
  console.log(adults);
  
// 5.ამ Todo API-დან https://jsonplaceholder.typicode.com/todos,
// შექმენით კლასი Todo,რომელშიც აღწერილი მექნება: ID, title და completed. 
// შემდეგ გაფილტრეთ მხოლოდ დასრულებული სამუშაოები Todo ობიექტების მასივში.
class Todo {
    constructor(id, title, completed) {
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
  }
  
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      const completedTasks = data.filter(todo => todo.completed);
      
      const completedTodoObjects = completedTasks.map(todo => new Todo(todo.id, todo.title, todo.completed));
      console.log(completedTodoObjects); 
    })
    .catch(error => console.error('Error fetching data:', error));
  

