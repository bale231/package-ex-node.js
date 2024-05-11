const figlet = require("figlet")

figlet("COMPUTER COMPROMISED", function (err, data) {
    if (err) {
        throw new Error("Something went wrong..");
        console.dir(err)

        return;
    }

    console.log(data);
})