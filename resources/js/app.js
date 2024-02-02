import "./bootstrap";
import "../css/app.css";
import "../src/vendor/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/vendor/simplebar/dist/simplebar.min.js";
import "../src/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js";
import "../src/vendor/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.min.js";
import "../src/vendor/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.js";
import "../src/vendor/filepond-plugin-image-crop/dist/filepond-plugin-image-crop.min.js";
import "../src/vendor/filepond-plugin-image-resize/dist/filepond-plugin-image-resize.min.js";
import "../src/vendor/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.min.js";
import "../src/vendor/filepond/dist/filepond.min.js";
import "../src/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js";
import "../src/vendor/tiny-slider/dist/min/tiny-slider.js";
import "../src/vendor/jarallax/dist/jarallax.min.js";
import "../src/vendor/rellax/rellax.min.js";
import "../src/js/theme.min.js";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
