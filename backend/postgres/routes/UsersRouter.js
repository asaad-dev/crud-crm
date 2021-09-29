const Router = require('express-promise-router')
const router = new Router()

router.get("/", async (_req, res) => {
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



module.exports = router