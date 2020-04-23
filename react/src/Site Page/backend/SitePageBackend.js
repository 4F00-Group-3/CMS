
class SitePageBackend {
    constructor() {
        this.f = null;
        this.s = null;
    }

    redirect(id) {
        sessionStorage.setItem("siteId", id);
        this.f();
    }

    redirectDelete() {
        sessionStorage.removeItem("siteId");
        this.f();
        this.s();
    }
}

export default SitePageBackend;