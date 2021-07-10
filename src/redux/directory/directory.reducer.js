const INITIAL_STATE = {
    sections : [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/FW749LN/hats.jpg',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/KqqCh88/jacket.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/4MjR24D/sneakers.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/P6Qhy5y/women.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/BPCprH6/men.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer;