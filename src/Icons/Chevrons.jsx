import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
import { Colors } from "../Utils/Colors";
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const ChevronRight = (props) => (
  <Svg
    width="24px"
    height="24px"
    fill={Colors.primary}
    viewBox="0 0 24 24"
    id="magicoon-Filled"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs></Defs>
    <G id="chevron-right-Filled">
      <Path
        id="chevron-right-Filled-2"
        data-name="chevron-right-Filled"
        className="cls-1"
        d="M17.707,12.707l-9,9a1,1,0,1,1-1.414-1.414L15.586,12,7.293,3.707A1,1,0,1,1,8.707,2.293l9,9A1,1,0,0,1,17.707,12.707Z"
      />
    </G>
  </Svg>
);
export default ChevronRight;
