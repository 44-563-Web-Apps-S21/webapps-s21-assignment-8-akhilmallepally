const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body><style>table, th, td {border: 2px solid black;border-collapse: collapse;}</style>')
      res.write('Content \n')
      res.write('More content \n')
      res.write('Hello World')
      res.write('<table>')
      res.write('<tr>')
      res.write('<th>Location name</th>')
      res.write('<th>Time to be spent</th>')
      res.write('<th>Approximate expenses</th>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Kochi</td>')
      res.write('<td>4 days</td>')
      res.write('<td>$200</td>')
      res.write('</tr>')
      res.write('<tr><td>Mumbai</td><td>4 days</td><td>$300</td></tr><tr><td>Kulu</td><td>5 days</td><td>$300</td></tr><tr><td>Andaman & Nicobar</td><td>7 days</td><td>$500</td></tr></table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})