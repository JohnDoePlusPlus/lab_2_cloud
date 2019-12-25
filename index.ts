import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

const server = http.createServer((request, response) => {
  response.writeHead(200);
  response.end(`Hello world! From ${os.platform()}!\n`);
});

server.listen(8000, '0.0.0.0');

server.on('error', async error => {
  await fs.promises.writeFile(path.join(__dirname, 'server-error.log'), 'error' + JSON.stringify(error));
  server.close();
  process.exit();
});
