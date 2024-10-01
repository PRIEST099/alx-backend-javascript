#!/usr/bin//env node
// displays message on the standard output using process api


function displayMessage(text){
    process.stdout.write(text + '\n');
}


module.exports = displayMessage;