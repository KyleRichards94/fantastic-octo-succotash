// These values need to match your SQL database

module.exports = {
    HOST: "%",   // default
    USER: "asduser",   // default
    PASSWORD: "Asdproject3d",  // your sql password
    DB: "testdb",  // Has to match the Schema in mysql
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
