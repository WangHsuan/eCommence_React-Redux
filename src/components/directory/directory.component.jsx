import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { useStyles } from 'components/directory/StyledDirectory';

const sections = [
    {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/FW749LN/hats.jpg',
        id: 1,
        linkUrl: 'hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/KqqCh88/jacket.jpg',
        id: 2,
        linkUrl: ''
    },
    {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/4MjR24D/sneakers.jpg',
        id: 3,
        linkUrl: ''
    },
    {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/P6Qhy5y/women.jpg',
        size: 'large',
        id: 4,
        linkUrl: ''
    },
    {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/BPCprH6/men.jpg',
        size: 'large',
        id: 5,
        linkUrl: ''
    }
]

const Directory = () => {

    const classes = useStyles();
    return (
        <div className={classes.directoryMmenu}>
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );

}

export default Directory;