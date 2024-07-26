const express = require('express');
const mysql = require('mysql');
const app = express();
const os = require('os');
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'Habib',
    password: 'passwd',
    database: 'pilote'
  });
  
  db.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err.stack);
      return;
    }
    console.log('Connected to MySQL as id ' + db.threadId);
  });
  
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`Server running at ${getLocalIP()}:${port}/`);
  });

  // Get local IP address
const getLocalIP = () => {
    const networkInterfaces = os.networkInterfaces();
    let localIP = 'Not Found';
    
    for (const interfaceName in networkInterfaces) {
      const iface = networkInterfaces[interfaceName];
      for (const address of iface) {
        if (address.family === 'IPv4' && !address.internal) {
          localIP = address.address;
          break;
        }
      }
    }
    
    return localIP;
  };
  // Print the local IP address
console.log('Local IP Address:', getLocalIP());