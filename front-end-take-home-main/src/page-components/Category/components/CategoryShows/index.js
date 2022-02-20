import { Flex } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { StyledBox, StyledCategoryShows, TextWrapper } from './styled';
import Card from '../Card'
import styled from 'styled-components';
import screen from '../../../../../src/styling/screen';
import useWindowSize from '../../../../hooks/useWindowSize'

const StyledGrid = styled.div`
  margin-top: 25px;
  display: grid;

  ${screen.mobile} {
    grid-template-columns: 1fr 1fr;
  }

  ${screen.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${screen.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  ${screen.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  
  grid-auto-flow: row;
  grid-gap: 15px;
`;


function CategoryShows({ shows, description }) {
  const {width, height} = useWindowSize();

  const [customSize, setCustomSize] = useState({
    customWidth: 0,
    customHeight: 0
  })

  useEffect(() => {
    if (width <= 640) {
      // screen.mobile
      setCustomSize({
        customWidth: (width - 60) / 2,
        customHeight: (width - 60) / 2
      })
    } else if (width > 640 && width <= 832) {
      // screen.tablet
      setCustomSize({
        customWidth: (width - 60) / 3,
        customHeight: (width - 60) / 3
      })
    } else if (width > 832 && width <= 1024) {
      // screen.laptop
      setCustomSize({
        customWidth: (width - 76) / 4,
        customHeight: (width - 76) / 4
      })
    } else if (width > 1024) {
      // screen.deskop
      setCustomSize({
        customWidth: (width - 90) / 5 > 255 ? 255 : (width - 90) / 5,
        customHeight: (width - 90) / 5 > 250 ? 255 : (width - 90) / 5
      })
    }
  }, [width, height])

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
              <Card show={show} width={customSize.customWidth} height={customSize.customHeight}/>
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
