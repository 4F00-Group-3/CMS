/**
 * This class is used for handling create account page restrictions and redirections
 */
class CreateAccountBackend {
    /**
     * Initializes props functions to null
     */
    constructor() {
        this.f = null;
    }

    /**
     * Redirects user to getStarted page on successful account creation
     * @param id: Account unique ID number
     */
    redirect(id) {
        sessionStorage.setItem("id", id);
        this.f();
    }
}

export default CreateAccountBackend;