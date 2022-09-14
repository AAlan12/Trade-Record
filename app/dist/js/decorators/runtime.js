export function runtime() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const r = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, runtime: ${(t2 - t1) / 100}`);
            r;
        };
        return descriptor;
    };
}
