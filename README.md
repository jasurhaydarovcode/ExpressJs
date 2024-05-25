### this branch version `PUG` template

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

# <img align='center' src="https://skillicons.dev/icons?i=express" alt="dotenv" title="dotenv" width='60'> Express Js

- Type: `Framework`
- ExpressJs makes working with NodeJs easy

| Features           | Express.js                | Without Express.js       |
|--------------------|---------------------------|--------------------------|
| Ease of Use        | Moderate to High          | Custom and Complex       |
| Monitoring & Debugging | Fast and Easy        | Time-consuming           |
| Community          | Large                     | Wide-ranging             |
| Easy Scalability   | Straightforward           | 

```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```