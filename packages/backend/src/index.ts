import express from "express";

(async () => {
    const app = express();

    app.get("/", (_, res) => res.json({ message: "Hello World!" }));

    app.listen(5000, () => {
        console.log("Server started on port 5000");
    });
})();
