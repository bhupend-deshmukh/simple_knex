const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "Bhupendra@123",
        database: "simple_knex_mysql"
    },
});


function createtable(){
    knex.schema.createTable('learn_knex', function (table) {
        table.primary('Id');
        table.increments('Id');
        table.string('Name');
        table.string('Surname');
        table.string('Email');
    })
    .then((data)=>{
        console.log('table created');
    })
    .catch((err)=>{
        console.log(err);
    })
}

// createtable()


function insert_data() {
    knex('learn_knex')
    .insert({"name": "Amol", "Surname": "Mungushmare","Email":"amol23@gmail.com"})
    .then(()=>{
        console.log("Data adedd succesfully !!!....");
    })
    .catch((err)=>{
        console.log(err);
    })
}


// insert_data()

function update_data(){
    knex('learn_knex')
    .update({"Name":"Nikhil"})
    .where("Name","Bhupendra")
    .then(()=>{
        console.log('Data updated !!!.....');
    }).catch((err)=>{
        console.log('err');
    })
}
// update_data()

function drop_table(){
    knex.schema.dropTableIfExists('learn_knex')
    .then(()=>{
        console.log('deleted');
    })
    .catch((err)=>{
        console.log(err);
    })
}

// drop_table()

function delete_by_name(){
    knex
        .select("*")
        .from("learn_knex")
        .where('Name',"Satish")
        .del()
        .then((data)=>{
            console.log("Data Deleted !!!........");
        })
        .catch((err)=>{
            console.log(err);
        })
}

// delete_by_name()    



