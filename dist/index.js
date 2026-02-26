import express from "express";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Hello! server is running " });
});
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
export default app;
//# sourceMappingURL=index.js.map