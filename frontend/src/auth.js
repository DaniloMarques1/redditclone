export const isAuthenticated = () => {
    if (localStorage.getItem('token')) {
        console.log("opa")
        return true;
    } else {
        return false;
    }
}