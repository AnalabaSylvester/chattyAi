import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Connected to port ${PORT}, and connected to DB`);
    });
}).catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map