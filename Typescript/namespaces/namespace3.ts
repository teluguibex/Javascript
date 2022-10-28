/// <reference path="namespace2.ts" />

namespace namespace3 {
    export class Demo {
        public subOne: string;
        public subTwo: string;
         public subThree: string;
        constructor(public arg1: string, public arg2: string, public arg3: string) {
            this.subOne = arg1;
            this.subTwo = arg2;
            this.subThree = arg3;
        }
        getData() {
            return this.subOne + " <==> " + this.subTwo + " <==> " + this.subThree;
        }
    }
}
