const { Note } = require("../models");
const commonController = require("./common");
const createHttpError = require("http-errors");
const notesController = {
  search: (req, res) => {
    //   console.log(req.query);
    // req.query = { note: 'pick up some bread after work', tag: 'shopping' }
    Note.findAll({ where: { note: req.query.note, tag: req.query.tag } }).then(
      (notes) => res.json(notes)
    );
  },
  searchor: (req, res) => {
    //   console.log(req.query);
    // { tag: [ 'shopping', 'work' ] }
    Note.findAll({
      where: {
        tag: {
          [Sequelize.Op.or]: [].concat(req.query.tag),
        },
      },
    }).then((notes) => res.json(notes));
  },
  searchlimit: (req, res) => {
    Note.findAll({
      limit: 2,
      where: {
        tag: {
          [Sequelize.Op.or]: [].concat(req.query.tag),
        },
      },
    }).then((notes) => res.json(notes));
  },
  ...commonController(Note),
};
module.exports = notesController;
