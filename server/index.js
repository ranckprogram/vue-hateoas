const express = require("express")
const app = express()


app.get('/views', function (req, res) {
  const list = [{
    id: 552744847629516801,
    name: "view1",
    links: {
      collection: "/apis/linkingthing.com/example/v1/views",
      self: "/apis/linkingthing.com/example/v1/views",
      update: "/apis/linkingthing.com/example/v1/views/552744847629516801",
      remove: "/apis/linkingthing.com/example/v1/views/552744847629516801",
    }
  }]

  const links = {
    self: "/views",
    collection: "/views",
    delete: "/view/:id",
    child: {
      zones: "/apis/linkingthing.com/example/v1/views/552744847629516801/zones",
      redirections: "/apis/linkingthing.com/example/v1/views/552744847629516801/redirections",
      dns64s: "/apis/linkingthing.com/example/v1/views/552744847629516801/dns64s",
    }
  }

  res.json({
    list,
    links,
  })
})

app.get('/view/:id/zones', function (req, res) {
  const list = [{
    id: 552744847629516801,
    name: "zone1",
    links: {
      collection: "/apis/linkingthing.com/example/v1/views",
      self: "/apis/linkingthing.com/example/v1/views",
      update: "/apis/linkingthing.com/example/v1/views/552744847629516801",
      remove: "/apis/linkingthing.com/example/v1/views/552744847629516801",
    }
  }]

  const links = {
    self: "/views",
    collection: "/views",
    child: {
      zones: "/apis/linkingthing.com/example/v1/views/552744847629516801/zones",
      redirections: "/apis/linkingthing.com/example/v1/views/552744847629516801/redirections",
      dns64s: "/apis/linkingthing.com/example/v1/views/552744847629516801/dns64s",
    }
  }

  res.json({
    list,
    links
  })
})


app.listen(3001)