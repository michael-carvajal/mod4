const express = require('express')

app.use((err, req, res, next) => {
    next(err);
});

// 2:
app.post('/colors', (req, res, next) => {
    next();
});

// 3:
app.use((req, res, next) => {
    next();
});

// 4:
app.use((err, req, res, next) => {
    return res.json();
});
