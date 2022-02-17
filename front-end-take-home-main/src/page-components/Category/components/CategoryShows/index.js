import { Flex, Box, Grid } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledBox, StyledCategoryShows, TextWrapper } from './styled';
import Image from '../../../../shared-components/Image';
import spacing from 'styling/spacing';
import Card from '../Card'
import styled from 'styled-components';
import SortButton from '../../../../shared-components/SortButton';

const StyledFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 25px;
  flex: auto;
`;

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
        <StyledFlex>
          {shows.map((show) => {
            return (
              <Card show={show}/>
            )
          })}
        </StyledFlex>
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
