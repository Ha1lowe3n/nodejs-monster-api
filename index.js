const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// парсим правильно json
app.use(bodyParser.json())
// парсим правильно формы
app.use(bodyParser.urlencoded({extended: true}))

let artists = [
	{id: 1, name: "John"},
	{id: 2, name: "Vasya"},
	{id: 3, name: "Olof"},
]

app.get("/", (req, res) => {
	res.send("hello")
})

app.get("/artists", (req, res) => {
	res.send(artists)
})

app.get("/artists/:id", (req, res) => {
	console.log(req.params.id)
	const artist = artists.find(a => a.id === +req.params.id)
	artist ? res.send(artist) : res.send("artist not found")
})

app.post("/artists", (req,res) => {
	const newArtist = {
		id: Date.now(),
		name: req.body.name
	}
	artists.push(newArtist)
	res.send("post data")
})

app.put("/artists/:id", (req, res) => {
	const artist = artists.find(a => a.id === +req.params.id)
	artist.name = req.body.name
	res.sendStatus(200)
})

app.delete("/artists/:id", (req,res) => {
	artists = artists.filter(a => a.id !== +req.params.id)
	res.sendStatus(200)
	console.log(artists)
})

app.listen(3012, () => console.log("Server is running"))