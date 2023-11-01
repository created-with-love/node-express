const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req,res) => {
    const {url} = req;
    console.log("🚀 ~ file: app.js:10 ~ server ~ url:", url)
    // PAGES
    // home page
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
    // about page
    } else  if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>Do you want to know how deep the rabbit whole is?</h1>')

    // FILES
    // styles
    } else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
    // image/logo
    } else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
    }
    // logic 
    else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)

    // 404 page
    } else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found. You have selected wrong way, Neo...</h1>')
    }
    res.end()
})

server.listen(5000)