# ELECTROM

## _Fullstack application_

This project consists in a fullstack application made it with React, Node.js and MySQL.

- React for the front-end
- Node.js for the back-end
- MySQL for the database

## Requirements

- Command Console Program (Git Bash or CMD)
- Node installed
- Npm(server) and Yarn(react-app)
- Database Management System (Xampp)
- Code Editor (Visual Studio Code or Sublime Text)

## Technologies Used

- [React] - A JavaScript library for building user interfaces
- [Express.js cli] - Command line tool that generates an express project structure preconfigured with most commonly used packages
- [Tailwind] - A utility-first CSS framework
- [Redux] - A Predictable State Container for JS Apps
- [React Router Dom] - Allows your application to navigate between different components
- [Redux Saga] - An intuitive Redux side effect manager
- [React Icons] - Include popular icons in your React projects easily with react-icons
- [Node] - A JavaScript runtime built on Chrome's V8 JavaScript engine
- [NPM] - Node package manager
- [Yarn] - Package manager that doubles down as project manager.

## How to Run the Application

- Download the file from github:

```sh
git clone https://github.com/VictorRamirez18/fullstack-app.git
```

- Create a dabatabase named Electrom, using a Database Management System (Xampp)

- Import the files users, products and buys, inside of the database Electrom
  (If you don´t know who to do it, here is a [Youtube Video] that explains it)

- Open the console in server folder

```sh
cd server/
```

- In the console run npm install to install all the dependencies of server app

```sh
npm install
```

- In the console run npm start

```sh
npm start
```

- Open another window console in the react-app folder

```sh
cd react-app/
```

- Run yarn install to install all the dependencies from react-app

```sh
yarn install
```

- Run yarn start to run the react application

```sh
yarn start
```

## HOW TO USE THE APPLICATION

#### Roles

|                    | Normal User | Logged in User |
| ------------------ | ----------- | -------------- |
| See products       | X           | X              |
| Buy products       |             | X              |
| Create products    |             | X              |
| Update products    |             | X              |
| Delete products    |             | X              |
| See historial buys |             | X              |

#### Buy products

- You need to signin to buy products
- In the _Home Page_, click the product that you want to buy (this will redirect you to a view of the individual product)
- Select the amount of products that you want
- Click the button _Buy_

#### Login

- If you are logged in, you can buy products
- If you are logged in, you can see the admin and buys options in the navbar
- If you want to logged in, in the _login_ component write...
  JohnDoe@gmail.com in the _user input_
  ckz in the _password input_

#### Create a product

- Go to _admin_ option in the navbar
- Fill the formulary and click the button _Create_

#### Update a product

- Go to _admin_ option in the navbar
- Click the product that you want to update of the table
- Modify the formulary and click the button _Update_

#### Delete a product

- Go to _admin_ option in the navbar
- Click the product that you want to delete of the table
- Click _Yes_ or _No_ button of the modal according to your intention

#### See history of buys

- Go to _buys_ option in the navbar

#### SignOut

- Click the _login_ component
- Click the button _Close Session_
- Click the button _Yes_ or _No_ of the modal according to your intention

  [react]: https://reactjs.org
  [express.js cli]: https://github.com/tolustar/express-api-cli
  [tailwind]: https://tailwindcss.com
  [redux]: https://es.redux.js.org
  [react router dom]: https://reactrouter.com/web/guides/quick-start
  [redux saga]: https://redux-saga.js.org
  [react icons]: https://react-icons.github.io/react-icons/
  [node.js]: http://nodejs.org
  [youtube video]: https://www.youtube.com/watch?v=J_ow7VIQhxw
  [node]: https://nodejs.org/en/
  [npm]: https://www.npmjs.com
  [yarn]: https://yarnpkg.com
