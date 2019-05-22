module.exports = app => {
    app.post('/burgers', (req, res) => {
        db.query('INSERT INTO burgers SET ?', req.body, e => {
            if (e) throw e
            res.send ('okay')
        })
    })
    app.get('/burgers', (req, res) => {
        db.query('SELECT * FROM burgers', (e, burgers) => {
            if (e) throw e
            res.json(burgers)
        })
    })
    app.put('/burgers:id', (req, res) => {
        db.query('UPDATE burgers SET ? WHERE ?', [req.body, {
            id:req.params.id
        }
        ])
    })
    app.delete('/burgers:id', (req, res) => {
        
    })
}