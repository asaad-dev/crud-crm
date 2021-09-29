const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { Pool } = require("pg");
dotenv.config({
	path: "./config.env",
});


app.use(express.json());

// Connection to Postgres
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });

app.get("/", async (_req, res) => {
	let users;
	try {
		users = await Postgres.query("SELECT * FROM users");
	} catch (err) {
		return res.status(400).json({
			message: "An error happened",
		});
	}

    res.json({
		message: "success",
		data: users.rows,
	});
});

app.get("/:id", async (req, res) => {
	const userId = req.params.id;
	let user;

	try {
		user = await Postgres.query("SELECT * FROM users WHERE id=$1", [
			userId,
		]);
	} catch (err) {
		return res.status(400).json({
			message: "An error happened",
		});
	}

    res.json({
		message: "success",
		data: user.rows,
	});
});

// create a new user
app.post("/users", async (req, res) => {
	const newUser = req.body.email;

    try {
		await Postgres.query("INSERT INTO users(email, password) VALUES($1, $2)", [newUser]);
        await Postgres.query('INSERT INTO users(email, password) VALUES($1, 2$)', [newUser])


	} catch (err) {
		return res.status(400).json({
			message: "An error happened",
		});
	}


	res.status(201).json({
		message: "success",
	});
});


// Run server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`))