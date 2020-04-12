
class LoginBackend {
    constructor() {
        this.f = null;
        this.l = null;
        this.g = null;
    }

    redirect(id, subscription) {
        sessionStorage.setItem("id", id);
        if(subscription != null) {
            sessionStorage.setItem("tier", subscription);
            this.f();
        }else{
            alert("Please chose a subscription before logging in!");
            this.g();
        }
    }

    redirectNewPass() {
        this.l();
    }
}

export default LoginBackend;