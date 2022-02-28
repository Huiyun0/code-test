import React from 'react';
import { Box } from '@rebass/grid';
import Image from '../../../../shared-components/Image';

const Card = ({show}) => (
    <Box style={{ display: 'grid', alignContent: 'start'}}>
        <Image src={show.images.squareLarge.url} width='100%' height='auto' style={{ borderRadius: '5%' }} />
            <p style={{ width: '100%', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{show.name}</p>
        <Box style={{ width: '100%' }}>
            <p style={{ display: '-webkit-box', overflow: 'hidden', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', color: 'darkgrey'}}>{show.description}</p>
        </Box>
    </Box>
)

export default Card;