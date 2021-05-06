import http from 'http';
import fs from 'fs';

const server = http.createServer(async (req, res) => {
  const data = {
    data: {
      name: 'Izaak Chukwuma',
      country: 'Nigeria',
      hobby: 'Playing Games',
    },
  };

  const read = fs.readFileSync('./post.json', 'utf-8');

  // res.writeHead(200, { 'Content-Type': ['text/plain', 'application/json'] });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  //  @ \r\n ==> line break in plain/text.
  // res.write(
  //   `Wellcome to the ZURI Intership Training,\r\n\r\n ${JSON.stringify(data)}`
  // );
  res.write(read);
  res.end();
});

// server port
const PORT = 2021;

// server listing
server.listen(PORT, async () => {
  console.log(`:::> Server running on ${PORT} @ http://localhost:${PORT}`);
});
