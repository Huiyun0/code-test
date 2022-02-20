import React from 'react';
import { Box } from '@rebass/grid';
import Image from '../../../../shared-components/Image';
import { Grid } from '@material-ui/core';

const Card = ({show, width, height}) => (
    <Grid container item xs={12}>
    <Box style={{ display: 'flex', flexDirection: 'column', flex: 1}}>
        <Image src={show.images.squareLarge.url} width={width} height={height} style={{ borderRadius: '5%' }} />
            <p style={{ width: width, fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{show.name}</p>
            <Box style={{ width: width }}>
            <p style={{ display: '-webkit-box', overflow: 'hidden', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', color: 'darkgrey'}}>{show.description}</p>
        </Box>
    </Box>
    </Grid>
)

export default Card;