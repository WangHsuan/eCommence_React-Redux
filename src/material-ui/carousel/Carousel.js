import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import MenuItem  from 'material-ui/carousel/utils/MenuItem';

const useStyles = makeStyles((theme)=>({
    
}))


const CustomCarousel = (props) =>
{
    var sections = [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/FW4vpcz/uniqlo1.jpg',
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/fxhGQ6v/uniqlo2.jpg',
            id: 2,
            linkUrl: 'hats'
        },
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/b50kspL/uniqlo3.jpg',
            id: 3,
            linkUrl: 'hats'
        },
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/hcK9XqB/uniqlo4.jpg',
            id: 4,
            linkUrl: 'hats'
        },
    ]

    return (
        <Carousel interval={3000}>
            {
                sections.map( (({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                )) )
            }
        </Carousel>
    )
}


export default CustomCarousel;
