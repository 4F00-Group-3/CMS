
class SitePageBackend {
    constructor() {
        this.f = null;
    }

    redirect(id) {
        sessionStorage.setItem("siteId", id);
        this.f();
    }
}

export default SitePageBackend;