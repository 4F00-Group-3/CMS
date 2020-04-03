
class LoginBackend {
    constructor() {
        this.f = null;
    }

    redirect(id) {
        sessionStorage.setItem("id", id);
        this.f();
    }
}

export default LoginBackend;