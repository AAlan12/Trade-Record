export function inspect(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: Array<any>){
            console.log(`--- Method ${propertyKey}`);
            console.log(`------ parameters: ${JSON.stringify(args)}`)
            const r = originalMethod.apply(this, args);
            console.log(`------ return: ${JSON.stringify(r)}`)
            return r;
        };
        return descriptor;
    }
}