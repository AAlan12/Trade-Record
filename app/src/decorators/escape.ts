export function escape(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: Array<any>){
            let r = originalMethod.apply(this,args);
            if(typeof r === 'string'){
                console.log(`@escape in action in class
                ${this.constructor.name} to method ${propertyKey}`)
                r = r.replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return r;
        };

        return descriptor;
    }
}