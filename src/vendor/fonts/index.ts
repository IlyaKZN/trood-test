import { createGlobalStyle } from 'styled-components';

import RobotoRegularTtf from './Roboto/Roboto-Regular.ttf';
import RobotoBoldTtf from './Roboto/Roboto-Bold.ttf';
import RobotoMediumTtf from './Roboto/Roboto-Medium.ttf';

export const RobotoFonts = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
      url(${RobotoRegularTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
      url(${RobotoBoldTtf}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
      url(${RobotoMediumTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
`;
