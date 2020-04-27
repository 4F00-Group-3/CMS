/**
 * This class is used for handling login page restrictions and redirections
 */
class LoginBackend {
    /**
     * Initializes props functions to null
     */
    constructor() {
        this.f = null;
        this.l = null;
        this.g = null;
    }

    /**
     * Redirects user when login is successful
     * If subscription tier is not set, the user is redirected to payment page
     * @param id: Account unique ID number
     * @param subscription: Account subscription tier
     */
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

    /**
     * This is used to redirect user to SitePage when password change is successful
     */
    redirectNewPass() {
        this.l();
    }
}

export default LoginBackend;