import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../Utils/Colors";
const Terms = (props) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.6613 6.43299C19.5575 5.09278 18.5204 4.06186 17.1721 3.85567C16.6535 3.85567 16.1349 3.75258 15.6163 3.75258L15.0977 2.82474C14.7866 2.30928 14.1643 2 13.542 2H10.5342C9.91187 2 9.39328 2.30928 8.97841 2.82474L8.35611 3.75258C7.83753 3.75258 7.31894 3.85567 6.80036 3.85567C5.45204 3.95876 4.41487 5.09278 4.31115 6.43299C4.10372 8.39175 4 11.2783 4 13.3402C4 15.4021 4.20743 17.6701 4.31115 19.2165C4.41487 20.5567 5.45204 21.5876 6.80036 21.6907C8.2524 21.7938 10.4305 22 11.9862 22C13.542 22 15.72 21.7938 17.1721 21.6907C18.5204 21.5876 19.5575 20.5567 19.6613 19.2165C19.765 17.6701 19.9724 15.299 19.9724 13.3402C20.0761 11.2783 19.8687 8.39175 19.6613 6.43299ZM9.497 4.7835C9.60072 4.7835 9.60072 4.7835 9.497 4.7835L10.223 3.54639C10.223 3.4433 10.3267 3.4433 10.4305 3.4433H13.4382C13.542 3.4433 13.542 3.4433 13.6457 3.54639L14.3717 4.7835V4.8866C14.4754 4.98969 14.3717 5.19588 14.3717 5.29897C14.3717 5.40206 14.268 5.40206 14.1643 5.40206H9.80815C9.70443 5.40206 9.70443 5.40206 9.60072 5.29897C9.497 5.09278 9.497 4.98969 9.497 4.7835ZM8.8747 11.1753H11.9862C12.4011 11.1753 12.8159 11.4845 12.8159 12C12.8159 12.5155 12.5048 12.8247 11.9862 12.8247H8.8747C8.45983 12.8247 8.04496 12.5155 8.04496 12C8.04496 11.4845 8.45983 11.1753 8.8747 11.1753ZM15.0977 16.9485H8.8747C8.45983 16.9485 8.04496 16.6392 8.04496 16.1237C8.04496 15.6082 8.35611 15.299 8.8747 15.299H15.0977C15.5126 15.299 15.9275 15.6082 15.9275 16.1237C15.9275 16.6392 15.5126 16.9485 15.0977 16.9485Z"
      fill={Colors.primary}
    />
  </Svg>
);
export default Terms;
