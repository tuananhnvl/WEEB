// -------------- ADD DEFEN
const express = require('express');
const mysql = require('mysql');
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
var corsOptions = {
  origin: "http://localhost:8000",
  exposedHeaders: 'Authorization',
  
};

//------------------CREAT CONNEC MYSQL
const connection = mysql.createConnection({
  multipleStatements: true, // required for multiple statements
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'datacustomer',
  
});
connection.connect(function(err){
  (err) ? console.log(err) : console.log(connection);
});
//-------------- CHECK LOG FUNCT CONNEC

//----- TẠO HÌNH CHO HEADER RES/REQ    INCLU (Genral >> Respon Head >> Request Head   )
server.get("/", function (req,res) {
  //res.status().send(200); 
  res.json({server: 'Running..!'});
});
server.get("/api/insert", function (req,res) {
  res.json({server: 'Chú ý:CỔNG INSERT Running..!'});
});
  server.get("/api/delete", function (req,res) {
    res.json({server: 'Chú ý:CỔNG DELETE Running..!'});
});
  server.get("/api/update", function (req,res) {
  res.json({server: 'Chú ý:CỔNG UPDATE Running..!'});
});
server.get("/api/login", function (req,res) {
  res.json({server: 'Chú ý:CỔNG LOGIN Running..!'});
});
server.get("/api/dataPer", function (req,res) {
  res.json({server: 'Chú ý:CỔNG LOGIN Running..!'});
});
server.get("/api/welcome", function (req,res) {
  res.json({server: 'Chú ý:CỔNG welcome Running..!'});
});

/* server.get('/cors', (req, res) => {
res.set('Access-Control-Allow-Origin', '*');
res.send({ "msg": "This has CORS enabled 🎈" })
})  */
server.use(cors(corsOptions));

// parse requests of content-type - application/json
server.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

// simple route
//server.get("/", (req, res) => {
 // res.json({ message: "CỔNG DATA CỦA CLIENT /NVL/APP." });
//});

// -----------------set port, listen for requests
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`SERVER ĐANG RUN TRÊN ${PORT}.`);
});

//--------------GET DATA TỪ DB, LINK = , XUẤT ĐÚNG FILE CẦN
server.get('/api/listnganh', (req, res) => {
  var sqlGETDATA = "SELECT * FROM listnganh";
  connection.query(sqlGETDATA, function(err, results) {
    if (err) throw err;
    res.json({listnganh: results});
 });
});

server.get('/api/member', (req, res) => {
  var sqlGETDATA = "SELECT * FROM userdata";

  connection.query(sqlGETDATA, function(err, results) {
    if (err) throw err;
    res.json({items: results});
  
 });
});



/* server.post('/api/member', function (req, res) {
  let tittle = req.body.itemTittle;
  if (!tittle) {
      return res.status(400).send({ error:true, message: 'Please provide user' });
  }
  var isdb = "INSERT INTO member (tittle) VALUES ?;";
  connection.query(isdb, { tittle : tittle }, function (error, results) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New tittle has been created successfully.' });
  });
}); */


//SET @num := 0;UPDATE member SET id = @num := (@num+1);ALTER TABLE member AUTO_INCREMENT =1



//--------------- INSERT ITEM ---------------------//
server.post('/api/insert', function(req, res) {
  var id = req.body.id;
  var addFlimdata = req.body.addFlim;
  var addFrienddata = req.body.addFriend;
  var addInfodata = req.body.addInfo;

  connection.query(
    `INSERT INTO userdata (id,flimlist,listfriends,moreinfo) VALUES ("${id}","${addFlimdata}","${addFrienddata}","${addInfodata}");
    SET @num := 0;UPDATE userdata SET id = @num := (@num+1);ALTER TABLE userdata AUTO_INCREMENT =1`,
    [1,2], 
    function (err, results) {
    if(err) throw err;
    res.json({message: "Thông tin từ sever : ĐÃ INSERT"});
  });

 
});

//--------------- DELETE ITEM ---------------------//
server.post('/api/delete', function(req, res) {
  var iddel = req.body.id;
  connection.query(
    `DELETE FROM userdata WHERE id="${iddel}";
    SET @num := 0;UPDATE userdata SET id = @num := (@num+1);ALTER TABLE userdata AUTO_INCREMENT =1`,
    [1,2],
    function(err, results) {
    if (err) throw err;
   
   res.json({message: "Thông tin từ sever : ĐÃ DELETE"});
  });
 
});


//--------------- UPDATE ITEM ---------------------//
server.post('/api/update', function(req, res) {

  var id = req.body.id;
  var changeflimdata = req.body.changeflim;
  var changefrienddata = req.body.changefriend;
  var changeinfodata = req.body.changeinfo;


  connection.query(
    `UPDATE userdata SET flimlist = '${changeflimdata}',listfriends = '${changefrienddata}',moreinfo = '${changeinfodata}' WHERE ID = "${id}"`,
    [1],
    function(err, results) {
    if (err) throw err;
    res.json({message: "Thông tin từ sever : ĐÃ UPDATE"});
  });

});




//--------------- LOG IN ---------------------//
server.post('/api/login', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const tokenlog = 'sd234r2r';
   connection.query(
    `SELECT baseusername,basepassword FROM loginfouser WHERE baseusername = '${username}' AND basepassword = '${password}'`,
    [1],
    function(err, results) {
    if (err) throw err;
    if(results.length > 0) {
      res.json('sd234r2r');
    } else {
      res.json('Thông tin từ sever : SAI PASS OR USER OR CHƯA CÓ TÀI KHOẢN ........');
    }
  
  });
  
  
  
 });
//--------------- SIGN UP  ---------------------//
