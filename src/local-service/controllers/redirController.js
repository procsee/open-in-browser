const { exec } = require('child_process');

const redir = (req, res) => {
    console.log(`url: ${req.query.url}`);
    console.log(`source: ${req.query.source}`);
    console.log(`target: ${req.query.target}`);
    let command = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
    exec(`${command} ${decodeURIComponent(req.query.url)}`, (error, stdout, stderr) => {
        if (error)
            console.error(error);
    });

    res.status(200).end();
}

module.exports = { redir };