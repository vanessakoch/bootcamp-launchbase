const express = require('express')
const nunjucks = require('nunjucks')

const data = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false //permite usar html aqui no server
})

server.get('/', function(req, res) {
  return res.render('courses', { data })
})

server.get('/about', function(req, res) {
  const about = {
    title: "Rocketseat",
    image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEVmM8z///9kL8tiLMthKstjLstfJspcH8laG8lXEchgKMpaGsleI8pZF8n8+/7z8Puiid7u6fnp4/e2o+XFt+qLaterleH39fxrOs7k3vXNwO2VeNqxneN3TNHc0/J9V9PUye+Ob9hwQ8+BXNTg2PS/r+jRxu7BsehvQM+af9y1ouWGZNZ6UdKTddqehN26qeamj9/5kGAAAAAFSklEQVR4nO3c53LyOhAGYFsuslzpxbQkkACBlPu/ugOmGVsGkcM3ljTv8zczGe1YsnZXMoYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3WJ4TRtS1Sd0D+Vf8TdPst9L2eksDj/qWdoE6E/MsmXZ6rwNa95CezGuaBZ2w7jE9VdQpBmiabzpNVHddDrDp1j2qJyKDcoDmxKl7WE/EWuUAGzotw+C9HOAHq3tUT+R3ywEmQd2jeiJixOUIt1bdw3oi76UcYE+n7Z6sygFO9ViE1iH3JG+lAPtaJKWEfTW6FguoW94q5nbdo3sCMkj2scTD9HO0KQQ49uoe3TMEpURbs0XIS7RPumxfBiu+Et1RdYBmvEjHo4kTqJyWchPtotZc4U2fDQUiNPvqpt7Bj0iApmmouhZ5iTbPQtVNg/icRJtnpuqrhk3FAlQ2+aY9sQCV3fetmViAcajoa4aEiViEG1WTb/YhFuCnqu/RsCEW4ELeRRi6Pq1eQPmziVtiefd6rx3Hy9Cv+nNUXTJdea38D3Wzvvbj668Z/xHcKpny3uXtJIbL4zJ64+3W7pdYgC15F6Hhf59G+UNLE02oZNobSLsId7z0NMzkqzhVI6GSyTTXch85sUthNF1dTVVPsGTqRHWN/Q7i+/tnFrZzgx17l8REtGRqyrrV09V3YxKQQoc+6UbHqUqcvliEsh4asmwfmA5oVOjuvhiHVoRoySTroWFwenI/rDTmHrN2j3gsFqCsh4bWzTXW3ESuYMmUyFoyhXdylXQmWDJJe2hIBUuie+TtW7jt+6MXIHHfgnMC+AexzIeG4e8TIpS7b0FfBTf0arL3LWzKuRLziIWs6eiFtxWsHbgk7ltcOKwh2K7nkLdvccW10/uxcC3ln6MHJJrfzV7i3ua7ePlC5r5FkcX4OXb/FHknDC2fFc4uVgoswiM3JHRVLpRaGy8w9jX+cOtlwYRGPtGTvG+R57Y7rk/YqLA5/kS7jJpQY7P1TvUtibrn3qm0fQsO2smapX6Y3xyHm+NeTpz8ZLSC43xuSptvc2RFxvSN7p7XeJENP0m7rKokCgdZ4Sxr34LLP+SnbWYRN4hWs0nI6I2Sj7DXRNq+RYXjNZJDB4rcv9dk07laAV4Olz4GgiNXaYpm6KnvG/ci5QYvhp6TmtbMU2cjf4Cd67vtNse6h/MvsNwpaOVJotKCq9ybf5KoNFI8qv/xpO6/PM4vNaWS10irqcr7PORlpdi2fpPHbbqNK5NT5TgVZzDNuS5T1a08RkttdercW7zqk9D4V4v937vRUEx1eN8481Jcne3s63e8/PiYSd62F+QsCgH2mONYvhtSqkWpQSzCPq8CXMt7Re0PnGAwMlwvf6Td1SorpbP9e7TBbHY6Eo63emwQR9FxJ3wxXLrK+r3JSquc2ztv9fE386P51Gz6WrxbTq62ieE88oOJzMfyf1D4lneqW3wG2RY3ehXOdB/hfhYjHGn1ljGMoJjKmGOtNordMyylo5pFaJVv4a/1mqW0fDlRq9944n0Lo8AFoEdwbu5ttOk8Zco90qUe1e5ZqUea6jVHdy+aQnPmXaELQEKKzZmxbgFefydjmr+6TdHiJ1sjzV4yxv7KRT5AvTozB3b+t2ZmeqWjB7mUrf+mReO+iJ27h8lKr0zm6HKs3bS0aj2d+afbsAtZP8v6v04p21SXI9CS4xeHqY43ZzLO4QfzltplamdhdlXvU98AjWCoZyp6RuxdgGv9UtEL+1vPVPTCmbfmOqaiOY6nZyIDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAX/wGfW0BvqPld4wAAAABJRU5ErkJggg==",
    description: "Treinamentos imersivos para dominar as tecnologias mais modernas no menor tempo possível 💻🚀",
    info: "No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
    techs: ["JavaScript", "React.js", "Node.js", "React Native", "HTML & CSS"]
  }

  return res.render('about', { about })
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function() {
  console.log('Server is running')
})