import React from 'react';

import MenuItem from '..//menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: '의류',
                    imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/shirts.png?w=1000&h=',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: '전자기기',
                    imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/phone.png?w=1000&h=',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: '책',
                    imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/book.png?w=1000&h=',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: '식물',
                    imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/plant.png?w=1000&h=',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: '기타',
                    imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/ect.png?w=1000&h=',
                    id: 5,
                    linkUrl: ''
                }
            ]
        };
    }


    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({title,imageUrl,id}) => (
                    <MenuItem key={id} title = {title} imageUrl={imageUrl}/>
                ))}    
            </div>
        );

    }
}

export default Directory;