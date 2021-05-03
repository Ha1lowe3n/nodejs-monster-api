const express = require("express")

const app = express()

const artists = [
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
	if (artist) {
		res.send(artist)
	} else {
		res.send("artist not found")
	}
})

app.listen(3012, () => console.log("Server is running"))