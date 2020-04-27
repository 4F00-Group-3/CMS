/**
 * This class is used for handling site page restrictions and redirections
 */
class SitePageBackend {
    /**
     * Initializes props functions to null
     */
    constructor() {
        this.f = null;
        this.s = null;
    }

    /**
     * Redirects user to website dashboard per website Id
     * @param id: Website unique ID number
     */
    redirect(id) {
        sessionStorage.setItem("siteId", id);
        this.f();
    }

    /**
     * Refreshes page after successful website deletion
     */
    redirectDelete() {
        sessionStorage.removeItem("siteId");
        this.f();
        this.s();
    }
}

export default SitePageBackend;