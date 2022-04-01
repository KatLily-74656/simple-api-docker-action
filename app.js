'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const app = new express();

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.use("/", router);

router.get('/', (req, res) => {
    res.json({"foo": "bar"});
});

router.post('/handle', function (req, res) {
	console.log(req.body);
	res.json({ "post-foo" : "post-bar", "request" : req.body});
});

app.listen(3000, () => {
    console.log('Server up!');
});