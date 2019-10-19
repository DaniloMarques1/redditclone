import App from './app';

App.use((req, res, next) => {
    console.log("New request");
    next();
})

App.listen(5000, () => {
    console.log("server running in port 5000");
})