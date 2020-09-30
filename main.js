let express = require('express');
let app = express();
let port = process.env.PORT || 8888
let user_router = require('./routers/Bugcat.js')

app.get("/", (req, res) => {
    res.send("這是主頁，請在上方尾端輸入'/Bugcat'");
})

app.use("/Bugcat", user_router)

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
});