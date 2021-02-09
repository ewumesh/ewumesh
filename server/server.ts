const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req, res, next) => { 
  const users = readUsers();

  const user = users.filter(
    u => u.userName === req.body.userName && u.password === req.body.password
  )[0];

  if (user) {
    res.send({
        responsebody: user,
        message: 'User login Successfully'
    });
    // res.send({ ...formatUser(user), token: checkIfAdmin(user) });
  } else {
    // res.send({message: 'Invalid username or password.'})
    res.send({
        responsebody: undefined,
        message: 'Invalid username or password.'
    })
  }
});

server.post('/register', (req, res) => {
  const users = readUsers();
  const user = users.filter(u => u.userName === req.body.userName)[0];
  if (user === undefined || user === null) {
      req.body.id = Math.floor(Math.random()*55);
    db.users.push(req.body);
    res.send({
    //   ...formatUser(req.body),
      responsebody: db.users,
      message: 'User register successfully.'
    //   token: checkIfAdmin(req.body)
    });
    
  } else {
    // res.status(500).send('User already exists');
    res.send({
        responsebody: null,
        message: 'User already exists.'
    })
  }
});


server.get('/get', (res) => {
    const users = readUsers();
    res.send({
        responsebody: users
    })
})

// server.use('/users', (req, res, next) => {
//   if (isAuthorized(req) || req.query.bypassAuth === 'true') {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// });

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

// function formatUser(user) {
//   delete user.password;
//   user.role = user.username === 'admin'
//     ? 'admin'
//     : 'user';
//   return user;
// }

// function checkIfAdmin(user, bypassToken = false) {
//   return user.username === 'admin' || bypassToken === true
//     ? 'admin-token'
//     : 'user-token';
// }

// function isAuthorized(req) {
//   return req.headers.authorization === 'admin-token' ? true : false;
// }

function readUsers() {
  const dbRaw = fs.readFileSync('./server/db.json');  
  const users = JSON.parse(dbRaw).users
  return users;
}