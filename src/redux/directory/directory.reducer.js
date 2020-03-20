const INITIAL_STATE ={
    sections: [
        {
            title: '의류',
            imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/shirts.png?w=1000&h=',
            id: 1,
            linkUrl: 'shop/의류'
        },
        {
            title: '전자기기',
            imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/phone.png?w=1000&h=',
            id: 2,
            linkUrl: 'shop/전자기기'
        },
        {
            title: '책',
            imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/book.png?w=1000&h=',
            id: 3,
            linkUrl: 'shop/책'
        },
        {
            title: '식물',
            imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/plant.png?w=1000&h=',
            id: 4,
            linkUrl: 'shop/식물'
        },
        {
            title: '기타',
            imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/ect.png?w=1000&h=',
            id: 5,
            linkUrl: 'shop/기타'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;