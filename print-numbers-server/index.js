//Call the http module and define several constants (http,host,port) 
const HTTP = require("http");
const HOST = "127.0.0.1";
const PORT = 8000;

const requestListener = function(req, res) {
  const responseNumbers = print_numbers();
  res.end(responseNumbers);
};

const server = HTTP.createServer(requestListener);
server.listen(PORT, HOST, () => {
  console.log("Reader", PORT);
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

function print_numbers() {
  let stringNumbers = Array.from({ length: 100 }, (x, i) => i + 1);
  return (stringNumbers.join('\n'));
}
