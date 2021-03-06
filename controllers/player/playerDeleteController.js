/**
 *@author Pruthvi Naskanti
 */

const express = require('express');
const app = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()

app.delete("/player/delete", jsonParser, (req, res, next) => {
    console.log(req, "------request is here")
    let userId = req.body;

    let error = null;
    sqldb.get('DELETE FROM player WHERE userId = ? ', [userId], (err, response) => {
        if (err) {
            console.error('Unable to delete player', err);
            error = 'Unable to delete player';
        } else if (!err && !response) {
            console.log("Player not found")
        } else {
               res.render('./partials/home');
            console.log("Player Deleted successfully")
        }
        console.log(err, res);

    })
})

async function del(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);

    const success = await employees.delete(id);

    if (success) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } 
    catch (err) {
    next(err);
  }
}

module.exports = app;
