module.exports = app => {
    const Tasks = app.db.models.Tasks;
    
    <% if (criarGET === true) { %>
    app.route("/tasks")
        .get((req,res) => {
            Tasks.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
    <% } %>

    <% if (criarPOST === true) { %>
    app.route("/tasks")
        .post((req, res) => {
            Tasks.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
    <% } %>

    <% if (criarGET === true) { %>
    app.route("/tasks/:id")
        .get((req,res) => {
            Tasks.findOne({where: req.params})
                .then(result => {
                    if(result){
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
        <% } %>

        <% if (criarPUT === true) { %>
        app.route("/tasks/:id")
        .put((req,res) => {
            Tasks.update(req.body,{where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
        <% } %>

        <% if (criarDELETE === true) { %>
        app.route("/tasks/:id")
        .delete((req,res) => {
            Tasks.destroy({where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});                    
                });
        });
        <% } %>
};