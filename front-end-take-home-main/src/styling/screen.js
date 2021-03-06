// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/

const breakpoints = ['640px', '832px', '1025px'];

const screen = {
  mobile: `@media screen and (max-width: ${breakpoints[0]})`,
  tablet: `@media screen and (min-width: ${breakpoints[0]}) and (max-width: ${breakpoints[1]})`,
  laptop: `@media screen and (min-width: ${breakpoints[1]}) and (max-width: ${ breakpoints[2]})`,
  desktop: `@media screen and (min-width: ${breakpoints[2]})`,
};

export default screen;
