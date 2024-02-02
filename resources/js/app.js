import "./bootstrap";
import "../css/app.css";
import "../src/vendor/bootstrap/dist/js/bootstrap.bundle.min.js";
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
