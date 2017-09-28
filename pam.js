/*ARAM PAM PAM
Exercise 6 of 8

This exercise is about using URL parameters.
For example, if you have /message/526aa677a8ceb64569c9d4fb, then you should know how to
extract that value which is an ID of the message.

Create an Express.js server that processes PUT /message/:id requests
and produces a SHA-1 hash of the current date combined with the ID from the URL.

For instance, if the server receives

   PUT /message/526aa677a8ceb64569c9d4fb

it will respond with a hash of the current date (as a string) and the ID.

The SHA-1 can be computed like this:

   require('crypto')
     .createHash('sha1')
     .update(new Date().toDateString() + id)
     .digest('hex')
*/

var express = require('express');
var app = express();

app.put('/message/:id', function(req, res) {
    var id = req.params.id;
    var crypto = require('crypto');
    var str = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex');
    res.send(str);
})

app.listen(process.argv[2]);