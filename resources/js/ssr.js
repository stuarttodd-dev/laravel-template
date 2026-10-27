import { AsyncLocalStorage } from 'node:async_hooks';
import { createSSRApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { route as ziggyRoute, ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const ziggyConfig = new AsyncLocalStorage();

globalThis.route = (name, params, absolute, config) => ziggyRoute(
    name,
    params,
    absolute,
    config ?? ziggyConfig.getStore(),
);

function ziggyFor(page) {
    const ziggy = page.props?.ziggy ?? {};
    const location = typeof ziggy.location === 'string' && ziggy.location !== ''
        ? ziggy.location
        : 'http://localhost';

    return {
        ...ziggy,
        location: new URL(location),
    };
}

createServer((page) => ziggyConfig.run(ziggyFor(page), () => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(
        `./Pages/${name}.vue`,
        import.meta.glob('./Pages/**/*.vue'),
    ),
    setup({ App, props, plugin }) {
        return createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, ziggyConfig.getStore());
    },
})));
