type Size = 'small' | 'medium' | 'large';

class Product{
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = 'small',
    ){}

    isProductReady():boolean{
        for(const key in this){
            switch (typeof this[key]) {
                case 'string':
                    if((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if((<number><unknown>this[key]) <= 0) throw Error(`${key} is not valid`);
                default:
                    throw Error(`${key} is not valid`);
            }
        }
        return true;
    }

    toString(): string{
        if(!this.isProductReady) return '';
        return `${this.name} - ${this.price} - ${this.size}`;
    }
}
(() => {
    const bluePants = new Product('Blue Large Pants');
    console.log(bluePants);
})();