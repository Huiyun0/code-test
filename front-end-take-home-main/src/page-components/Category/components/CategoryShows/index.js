import { Flex } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledBox, StyledCategoryShows, TextWrapper, StyledGrid } from './styled';
import Card from '../Card'

function CategoryShows({ shows, description }) {

  return (
    <StyledCategoryShows>
      <Flex justifyContent="space-between" alignItems="left" flexWrap="wrap" flexDirection="row">
        <StyledBox>
          {description && (
            <TextWrapper>
              <Paragraph text={description} variant="l" transparent />
            </TextWrapper>
          )}
        </StyledBox>
        <StyledGrid>
          {shows.map((show) => {
            return (
              <Card show={show}/>
            )
          })}
        </StyledGrid>
      </Flex>
    </StyledCategoryShows>
  );
}

CategoryShows.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.shape({
      squareLarge: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  })),
  description: PropTypes.string,
};

CategoryShows.defaultProps = {
  shows: [],
  description: null,
};

export default CategoryShows;
