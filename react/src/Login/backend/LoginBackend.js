
class LoginBackend {
    constructor() {
        this.f = null;
        this.l = null;
    }

    redirect(id) {
        sessionStorage.setItem("id", id);
        this.f();
    }

    redirectNewPass() {
        this.l();
    }
}

export default LoginBackend;