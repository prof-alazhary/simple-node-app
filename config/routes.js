const fs = require('fs');
const routesPath = './routes';
const routes = [] // [{<path>:<handler>},...]

const files = fs.readdirSync(routesPath);

files.forEach(fileName => {
    fileName = fileName.replace('.js', '');

    if (fileName == 'index') {
        routes.push({
            path: "/",
            handler: require(`.${routesPath}/${fileName}`)
        });
    } else {
        routes.push({
            path: `/api/${fileName}`,
            handler: require(`.${routesPath}/${fileName}`)
        });
    }

});

module.exports = routes;