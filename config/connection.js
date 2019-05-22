const mysql2 = require ('mysql')

var connection = mysql.createConnection({
    host     : localhost,
    user     : root,
    password : 'Phil!1993',
  });
   
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });