import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Hamburger = props => (
  <Svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4 7H12M20 7H16M4 12H20M4 17H8M20 17H12"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Hamburger;
