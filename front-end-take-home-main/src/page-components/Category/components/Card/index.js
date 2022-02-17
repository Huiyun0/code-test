import React from 'react';
import { Box } from '@rebass/grid';
import Image from '../../../../shared-components/Image';

const Card = ({show}) => (
    <Box style={{ display: 'flex', flexDirection: 'column', flex: 1}}>
        <Image src={show.images.squareLarge.url} width={250} height={250} style={{ borderRadius: '5%' }} />
        <p style={{ width: 250, fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{show.name}</p>
        <Box style={{ width: 250 }}>
            <p style={{ display: '-webkit-box', overflow: 'hidden', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', color: 'darkgrey'}}>{show.description}</p>
        </Box>
    </Box>
);

export default Card;