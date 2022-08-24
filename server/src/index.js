const express = require('express');

const app = express();

const port = process.env.PORT || 4000 ;


app.get('/back', (req, res) => {
    res.send('Hello World!')
});

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

app.listen(port, () => {
/*     console.log(`El servidor esta funcionando en el puerto ${port}`);
    console.log('Probando...');
    console.log('otra cosa...'); */
});


app.post("/agregar", (req, res) => {
    console.log("Connected to React");
    console.log(req.body.formData);
    //res.redirect("/");
});