module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"),() => {
            console.log(`Ntask API - porta ${app.get("port")}`)
        });
    });
};