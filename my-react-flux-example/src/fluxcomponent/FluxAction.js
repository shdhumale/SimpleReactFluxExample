import FluxDispatcher from './FluxDispatcher';
import { SHOW_ACTION1, SHOW_ACTION2 } from './FluxConstant'


class FluxAction {

    showData(data) {
        console.log(data)
        FluxDispatcher.dispatch({
            actionType: SHOW_ACTION1,
            value: data
        });

        FluxDispatcher.dispatch({
            actionType: SHOW_ACTION2,
            value: data
        });
    }
    //you can have many method that you want to call from your Screen i.e. insert, update, delete, select etc
    /*  removeArticle(key) {
         AppDispatcher.dispatch({
             actionType: 'REMOVE_ARTICLE',
             value: key
         });
     } */

}



export default new FluxAction()