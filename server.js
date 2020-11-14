const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('/dist/space-x'));
app.get('/*', function(req,res) {
res.sendFile(path.join('/dist/space-x/index.html'));});
app.listen(process.env.PORT || 8080);
