import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from '../Utils/Colors';

const ChevronRight = (props) => (
  <Svg
    width="100px"
    height="100px"
    viewBox="-18.75 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fill={Colors.primary}
    {...props}>
    <Path d="M55.757 53.315L17.799 91.272c-1.831 1.831 -4.799 1.831 -6.629 0l-4.427 -4.427c-1.828 -1.828 -1.831 -4.789 -0.008 -6.621L36.817 50 6.735 19.776c-1.823 -1.832 -1.82 -4.794 0.008 -6.621l4.427 -4.427c1.831 -1.831 4.799 -1.831 6.629 0L55.757 46.686c1.831 1.83 1.831 4.798 0 6.629z" />
  </Svg>
);
export default ChevronRight;
