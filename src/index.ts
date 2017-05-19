import { abc } from './abc';

class index extends abc {
    constructor() {
        super();
        console.log("This is index. 24");
        super.sayHi();
    }
}


new index();
