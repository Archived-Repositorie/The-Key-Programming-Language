#!/usr/bin/env node

const { exec } = require('node:child_process');

exec('node .', (err, stdout, stderr) => {
    if(err) {
        console.error(err);
        return;
    }
});