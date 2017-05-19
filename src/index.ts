import { abc } from './abc';

class index extends abc {
    constructor() {
        super();
        console.log("index");
        super.sayHi();
    }
}


new index();
