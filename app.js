import http from 'http';

const server = http.createServer(async (req, res) => {
  const data = {
    data: {
      name: 'Izaak Chukwuma',
      country: 'Nigeria',
      hobby: 'Playing Games',
    },
  };

  res.writeHead(200, { 'Content-Type': ['text/plain', 'application/json'] });
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //  @ \r\n ==> line break in plain/text.
  res.write(
    `Wellcome to the ZURI Intership Training,\r\n\r\n ${JSON.stringify(data)}`
  );
  res.write(JSON.stringify(data));
  res.end();
});

// server port
const PORT = 2021;

// server listing
server.listen(PORT, async () => {
  console.log(`:::> Server running on ${PORT} @ http://localhost:${PORT}`);
});
