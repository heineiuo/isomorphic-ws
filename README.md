# isomorphic-ws

Isomorphic implementation of WebSocket.

It uses:
- [ws](https://github.com/websockets/ws) on Node
- [global.WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) in browsers

## Usage

You need to install both this package and [ws](https://github.com/websockets/ws):

```
> npm i isomorphic-ws ws
```

Then just require this package:

```js
const WebSocket = require('isomorphic-ws')

const ws = new WebSocket('wss://echo.websocket.org/', {
  origin: 'https://websocket.org'
});

ws.on('open', function open() {
  console.log('connected');
  ws.send(Date.now());
});

ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('message', function incoming(data) {
  console.log(`Roundtrip time: ${Date.now() - data} ms`);

  setTimeout(function timeout() {
    ws.send(Date.now());
  }, 500);
});
```
