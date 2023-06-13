import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const conection = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
  })
  .promise();

export async function getUsers() {
  const [rows] = await conection.query("SELECT * FROM user");

  return rows;
}

export async function getUser(id) {
  const [row] = await conection.query(`SELECT * FROM user WHERE Id = ?`, [id]);

  return row[0];
}

export async function createUser(
  name,
  Lastname,
  cedula,
  date,
  PhotoDirectory,
  PhoneNumber,
  Mail
) {
  await conection.query(
    `INSERT INTO user (Name,LastName,Cedula,FechaNacimiento,PictureDirectory,Phone,Mail) VALUES(?,?,?,?,?,?,?)`,
    [name, Lastname, cedula, date, PhotoDirectory, PhoneNumber, Mail]
  );
}

export async function updateUser(
  id,
  name,
  Lastname,
  cedula,
  date,
  PhotoDirectory,
  PhoneNumber,
  Mail
) {
  await conection.query(
    `UPDATE  user SET Name = ?, LastName = ?, Cedula = ?, FechaNacimiento = ?, PictureDirectory = ?,  Phone = ?,  Mail = ? WHERE Id = ?`,
    [name, Lastname, cedula, date, PhotoDirectory, PhoneNumber, Mail,id]
  );
}

export async function deleteUser(id){

    await conection.query(`DELETE FROM user WHERE Id = ?`,[id])

}

//localhost:3000/api/users?id=7&name=Mario&lastName=Macero&cedula=7220373&date=2020-10-10&directory=C:/Mario/home&phone=04140417246&mail=mario@gmail.com

//  await updateUser(3,"Pepe","Macero",11147429,"2000-05-13","C:/Jhon/Home","04166448459","Pepe@hotmail.com")

// const persons = await getUsers();

// const person = await getUser(2);

// console.log(persons);

//console.log(persons);


