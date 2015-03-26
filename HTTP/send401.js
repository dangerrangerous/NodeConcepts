function send401() {
  res.writeHead(401, {'WWW-Authenticate': 'Basic'});
  res.end();
}
