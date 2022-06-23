//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require("dotenv").config();
const server = require("./src/server.js");
const { conn } = require("./src/db.js");
const fillCategory = require("./src/utils/fillCategory.js");
const fillProduct = require("./src/utils/fillProduct.js");
const fillChef = require("./src/utils/fillChef.js");
const fillTable = require("./src/utils/fillTable.js");
const PORT = process.env.PORT;
const { Server } = require("socket.io");
const http = require("http");

const httpServer = http.createServer(server);

const io = new Server(httpServer, {
	cors: {
		origin: "http://localhost:3000"
	}
});

io.on("connection", socket => {
	console.log(`User conect con id: ${socket.id}`);
	socket.on("greet", data => {
		socket.broadcast.emit("greet", data);
	});
});

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
	httpServer.listen(PORT, async () => {
		await fillCategory();
		await fillProduct();
		await fillChef();
		await fillTable();
		console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
	});
});
