import SHOP_DATA from 'redux/shop/shop.data';

const INITAIL_STATAE = {
    collections:SHOP_DATA
}

const shopReducer = (state = INITAIL_STATAE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default shopReducer;