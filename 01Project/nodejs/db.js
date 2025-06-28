const http = require("http");
const mongo = require("mongodb").MongoClient;

const server = http.createServer((request, response) => {
    const url = "mongodb://localhost:27017";

    mongo.connect(url, (error, conn) => {
        if (error) {
            response.writeHead(500, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "Database connection failed." }));
            return;
        }

        const db = conn.db("wap");

        db.createCollection("result", (error, res) => {
            if (error) {
                // Error code 48 = Collection already exists
                if (error.code === 48) {
                    response.writeHead(409, { 'Content-Type': 'application/json' });
                    const dupMessage = JSON.stringify({
                        message: "Duplicate collection!"
                    });
                    response.end(dupMessage);
                    return;
                } else {
                    response.writeHead(500, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify({ message: "Unknown error creating collection." }));
                    return;
                }
            }

            const data = {
                name: "er saurav",
                roll: 12,
                subject: "80%"
            };

            db.collection("result").insertOne(data, (error, dataRes) => {
                if (error) {
                    response.writeHead(500, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify({ message: "Failed to insert document." }));
                    return;
                }

                response.writeHead(200, { 'Content-Type': 'application/json' });
                const successMessage = JSON.stringify({
                    message: "Document inserted successfully!",
                    data: dataRes
                });
                response.end(successMessage);
            });
        });
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
