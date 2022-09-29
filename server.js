const express = require("express");
const path = require("path")

const startServer = () => {
    const server = express();

    server.use(express.static('dist'));

    server.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, 'dist', 'index.html')
        )
    );

    const PORT = 7000;

    server.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}.`))
}

startServer();