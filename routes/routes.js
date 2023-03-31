// Load the MySQL pool connection
const pool = require('../data/config');

// Route the app
const router = app => {
    // Display welcome message on the root
    app.get('/', (request, response) => {
        response.send({
            message: 'El servidor esta funcionando' 
        });
    });

    // Add a new user
    app.post('/users', (request, response) => {

        pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
           
            if (error) throw error;
            response.status(201).send( 'Los datos fueron agregados a la base de datos Mysql de manera exitosa');
            
        });

    });
}   
  
// Export the router
module.exports = router;