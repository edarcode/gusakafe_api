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
const fillSecret = require("./src/utils/fillSecret.js");
const PORT = process.env.PORT;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
	server.listen(PORT, async () => {
		await fillCategory();
		await fillProduct();
		await fillSecret();
		console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
	});
});
