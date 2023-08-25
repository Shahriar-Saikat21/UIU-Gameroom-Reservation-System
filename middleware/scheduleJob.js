const cron = require("node-cron");


function jobOne(){
    cron.schedule("* * * * *",async function () {
        await console.log(`running a task at ${new Date().toLocaleString()}`);
    });
}


module.exports = {
    jobOne
}
