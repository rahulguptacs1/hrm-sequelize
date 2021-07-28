const createHttpError = require("http-errors");
function commonController(Entity) {
  return {
    getAll: (req, res, next) => {
      Entity.findAll()
        .then((entries) => {
          res.json({
            message: "fetched successfully",
            count: entries.length,
            entries,
          });
        })
        .catch((err) => {
          next(err);
        });
    },
    getOne: (req, res, next) => {
      Entity.findByPk(req.params.id)
        .then((entry) => {
          if (entry) {
            res.json({
              message: "fetched successfully",
              entry,
            });
          } else {
            throw createHttpError.NotFound(
              "no entry with id: " + req.params.id
            );
          }
        })
        .catch((err) => {
          next(err);
        });
    },
    create: (req, res, next) => {
      Entity.create(req.body)
        .then((entry) => {
          res.json({
            message: "created successfully",
            entry,
          });
        })
        .catch((err) => {
          next(err);
        });
    },
    update: (req, res, next) => {
      Entity.findByPk(req.params.id)
        .then((entry) => {
          if (entry) {
            return entry.update(req.body);
          } else {
            throw createHttpError.NotFound(
              "no entry with id: " + req.params.id
            );
          }
        })
        .then((entry) => {
          res.json({
            message: "updated successfully",
            entry,
          });
        })
        .catch((err) => {
          next(err);
        });
    },
    delete: (req, res, next) => {
      Entity.findByPk(req.params.id)
        .then((entry) => {
          if (entry) {
            return entry.destroy();
          } else {
            throw createHttpError.NotFound(
              "no entry with id: " + req.params.id
            );
          }
        })
        .then(() => {
          res.json({
            message: "deleted successfully",
          });
        })
        .catch((err) => {
          next(err);
        });
    },
  };
}

module.exports = commonController;
