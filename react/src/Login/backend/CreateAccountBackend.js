
class LoginBackend {
    constructor() {
        this.f = null;
    }

    redirect(id, subscription) {
        sessionStorage.setItem("id", id);
        sessionStorage.setItem("tier", subscription);
        this.f();
    }
}

export default LoginBackend;