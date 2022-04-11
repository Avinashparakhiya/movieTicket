const router=require('express').Router();
const { response } = require('express');
const Users = require ('../model/user')


router.post("/add", async (request, response) => {
    const user = new Users(
        {
            name:request.body.name,
            description:request.body.description
        }
    );
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
  });


router.get("/show", async (request, response) => {
    const show = await Users.find({});
  
    try {
      response.send(show);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  router.delete("/delete/:id", async (request, response) => {
    try {
      const user = await Users.findByIdAndDelete(request.params.id);
        console.log("user",user);
      if (!user) response.status(404).send("No item found");
      response.status(200).send("User Is Delete");
    } catch (error) {
      response.status(500).send(error);
    }
  });


  router.post("/update/:id", async (request, response) => {
    try {
      await Users.findByIdAndUpdate(request.params.id, request.body);
      await Users.save();
      response.status(200).send("User Is Saved");
    } catch (error) {
      response.status(500).send(error);
    }
  });


module.exports = router
