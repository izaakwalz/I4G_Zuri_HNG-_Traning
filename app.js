import http from 'http';
import fs from 'fs';

const url = 'http://jsonplaceholder.typicode.com/posts'; // json place holder url

http.get(url, (res) => {
  let data = [];
  res.on('data', (result) => {
    data.push(result);
  });

  res.on('end', () => {
    const result = JSON.parse(Buffer.concat(data));

    fs.writeFileSync('./result/post.json', `${JSON.stringify(result)}`);

    console.log('done');
  });
});
