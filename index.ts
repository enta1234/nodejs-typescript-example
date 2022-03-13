import express from 'express'

const app: express.Express = express()

app.use(express.json())

app.post('/', (req: express.Request, res: express.Response) => {
  const body = req.body
  console.log('body: ', body);

  if (!Object.keys(body).length) {
    return res.status(400).send('invalid request')
  }

  return res.json(body)
})

app.listen(3000, ()=> { console.log('The server start at :3000') })
