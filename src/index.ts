import express, { Request, Response } from "express";



const app = express();
app.use(express.json());


app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello! server is running " });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})
export default app;
