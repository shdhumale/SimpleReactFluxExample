
import FluxDispatcher from './FluxDispatcher';
import { EventEmitter } from 'events';
import { SHOW_ACTION1, SHOW_ACTION2 } from './FluxConstant'

class FluxStore extends EventEmitter {

    constructor() {
        super();
        //this.dispatchToken = FluxDispatcher.register(this.dispatcherCallback.bind(this))
    }

    registerStore() {
        this.dispatchToken = FluxDispatcher.register(this.dispatcherCallback.bind(this))
    }
    emitChange(eventName) {
        console.log("Inside emitChange")
        this.emit(eventName);
    }



    showData1(article1) {
        console.log("Artical 1")
        console.log(article1)
    }

    showData2(article2) {
        console.log("Artical 2")
        console.log(article2)
    }

    dispatcherCallback(action) {
        console.log("Inside the switch")
        switch (action.actionType) {
            case SHOW_ACTION1:
                this.showData1(action.value);
                break;
            case SHOW_ACTION2:
                this.showData2(action.value);
                break;
            /* case 'REMOVE_ARTICLE':
                this.removeArticle(action.value); */
        }

        this.emitChange(action.actionType);

        return true;
    }
}

export default new FluxStore();

