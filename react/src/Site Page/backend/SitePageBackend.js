
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
        this.f();
        this.s();
    }
}

export default SitePageBackend;