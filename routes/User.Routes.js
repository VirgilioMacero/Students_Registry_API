import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../services/databaseServices.js";

export function Routes(app) {
  app.get("/api/users", async (req, res) => {
    const users = await getUsers();

    res.send(users);
  });

  app.get("/api/users/:id", async (req, res) => {
    const user = await getUser(req.params.id);
    res.json(user);
    console.log(user);
  });

  app.post("/api/users", async (req, res) => {
    try {
      const UserName = req.query.name;
      const UserLastName = req.query.lastName;
      const UserCedula = req.query.cedula;
      const UserDate = req.query.date;
      const UserDirectory = req.query.directory;
      const UserPhone = req.query.phone;
      const UserMail = req.query.mail;

      await createUser(
        UserName,
        UserLastName,
        UserCedula,
        UserDate,
        UserDirectory,
        UserPhone,
        UserMail
      );

      res.send("Usuario Guardado");
      console.log("Usuario Guardado")
    } catch {
      (e) => res.send(e);
    }
  });
  app.put("/api/users", async (req, res) => {
    
    try{
      const id = req.query.id;
      const UserName = req.query.name;
      const UserLastName = req.query.lastName;
      const UserCedula = req.query.cedula;
      const UserDate = req.query.date;
      const UserDirectory = req.query.directory;
      const UserPhone = req.query.phone;
      const UserMail = req.query.mail;
  
      await updateUser(
        id,
        UserName,
        UserLastName,
        UserCedula,
        UserDate,
        UserDirectory,
        UserPhone,
        UserMail
      );
  
      res.send("Usuario Actualizado");
      console.log("Usuario Actualizado")

    }catch{

      (e)=>{res.send(e)}

    }

  });
  app.delete("/api/users/:id", async (req, res) => {
    await deleteUser(req.params.id);

    await res.send("Usuario Borrado")
    await console.log("Usuario Borrado");
  });
}
