import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
import { Colors } from "../Utils/Colors";
const Male = (props) => (
  <Svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 58.853 58.853"
    style={{
      enableBackground: "new 0 0 58.853 58.853",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <G>
      <G>
        <Path
          style={{
            fill: Colors.primary,
          }}
          d="M35.107,12.733c-0.402-0.396-0.842-0.648-1.289-0.79c-0.815-0.311-2.565-0.91-3.411-1.013 l-2.519,3.592l-2.352-3.357c-1.348,0.069-1.875-0.048-3.324,0.482c-2.444,0.896-4.276,7.111-5.136,9.561 c-0.86,2.449,1.705,3.976,3.595,4.483h8.836c1.124,0,2.038-0.915,2.038-2.038c0-1.124-0.914-2.038-2.038-2.038H29.5h-1.457H22.77 v-0.9h5.273v-0.568l-1.987-3.112h5.31l0.008,0.003L29.5,20.185v0.532h0.007c1.62,0,2.938,1.318,2.938,2.938 s-1.317,2.938-2.938,2.938h-7.379l-0.304,28.92c0,1.845,1.495,3.34,3.339,3.34s2.121-1.495,2.121-3.34l0.914-15.174 c0,0-0.289-1.074,0.256-1.156c0.545-0.082,0.375,0.973,0.375,0.973l0.585,15.742c0.136,1.555,1.535,3.008,3.089,2.871 c1.556-0.137,2.68-1.812,2.543-3.365L34.413,21.95c0.017-0.241,0.027-0.481,0.043-0.721c1.212,2.512,1.533,5.264,1.369,8.611 c-0.191,3.928,5.899,3.907,6.091,0C42.249,23.018,39.95,17.507,35.107,12.733z"
        />
        <Circle
          style={{
            fill: Colors.primary,
          }}
          cx={28.295}
          cy={4.872}
          r={4.872}
        />
        <Path
          style={{
            fill: Colors.primary,
          }}
          d="M27.943,11.352h-0.362c-0.028-0.237-0.256-0.421-0.536-0.421c-0.3,0-0.542,0.21-0.542,0.469v0.628 c0,0.259,0.243,0.47,0.542,0.47c0.292,0,0.527-0.201,0.539-0.451h0.354c0.012,0.25,0.248,0.451,0.54,0.451 c0.299,0,0.542-0.21,0.542-0.47V11.4c0-0.258-0.243-0.469-0.542-0.469C28.198,10.931,27.971,11.115,27.943,11.352z"
        />
        <Path
          style={{
            fill: Colors.primary,
          }}
          d="M28.828,18.089c-0.323,0.914-1.313,0.305-1.313,0.305l0.952,1.256h0.99l0.685-1.561 C30.141,18.089,29.152,17.176,28.828,18.089z"
        />
      </G>
    </G>
  </Svg>
);
export default Male;
