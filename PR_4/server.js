const express = require("express");

const app = express();

const users = [
    {
        id: 1,
        name: 'Leanne Graham',
        email: "Sincere@april.biz",
        city: "Gwenborough",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        catchPhrase: "Multi-layered client-server neural-net"
    }, {
        id: 2,
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        city: "Wisokyburgh",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        catchPhrase: "Proactive didactic contingency"
    }, {
        id: 3,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        city: "McKenziehaven",
        phone: "1-463-123-4447",
        website: "ramiro.info",
        catchPhrase: "Face to face bifurcated interface"
    }, {
        id: 4,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        city: "South Elvis",
        phone: "493-170-9623 x156",
        website: "kale.biz",
        catchPhrase: "Multi-tiered zero tolerance productivity"
    }, {
        id: 5,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        city: "South Elvis",
        phone: "493-170-9623 x156",
        website: "kale.biz",
        catchPhrase: "Multi-tiered zero tolerance productivity"
    }, {
        id: 6,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        city: "South Elvis",
        phone: "493-170-9623 x156",
        website: "kale.biz",
        catchPhrase: "Multi-tiered zero tolerance productivity"
    }, {
        id: 7,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        city: "South Elvis",
        phone: "493-170-9623 x156",
        website: "kale.biz",
        catchPhrase: "Multi-tiered zero tolerance productivity"
    }, {
        id: 8,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        city: "South Elvis",
        phone: "493-170-9623 x156",
        website: "kale.biz",
        catchPhrase: "Multi-tiered zero tolerance productivity"
    }];

app.get('/', function (req, res) {
    res.send('Hello Api')
})

app.get('/users', function (req, res) {
    res.send(users)
})

app.get('/users/:id', function (req, res) {
    var user = users.find(function (user) {
        return user.id === Number(req.params.id)
    })
    res.send(user)
})

app.listen(3012, function () {
    console.log('Api app started')
})
