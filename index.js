const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");
const path = require('path');
const { Request } = require('node-fetch');
const { channel } = require('diagnostics_channel');



const pusher = new Pusher({
  appId: "1537760",
  key: "7122106b719ea2999855",
  secret: "8086b854493dc01efe67",
  cluster: "us3",
  useTLS: true
});

const app = express();

app.use(cors(:{
    origin['http://localhost:3000', 'http://localhost:8000', 'http://localhost:4200']
}))

app.use(express.json())

app.post(path:'/api/messages', handlers:async (req: Request<P, ResBody, ReqBody, ReqQuery, Local> res: Response<ResBody, Local> ) => {
    await pusher.trigger(channel:"chat", event:"message", data:{
        username: req.body.username,
        message: req.body.username,
      });
      res.jason(body[]);
})

console.log('listening to port 3000');
app.listen(port:3000)