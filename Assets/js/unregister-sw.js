// Run this in the browser console on the site, or include temporarily to force unregistering service workers and clearing caches.
(async function unregisterAndClear() {
    if (!('serviceWorker' in navigator)) return;
    try {
        const regs = await navigator.serviceWorker.getRegistrations();
        for (const r of regs) {
            await r.unregister();
        }
        if ('caches' in window) {
            const keys = await caches.keys();
            for (const k of keys) await caches.delete(k);
        }
        console.log('Service workers unregistered and caches cleared.');
    } catch (err) {
        console.warn('Unregister/clear failed:', err);
    }
})();
