
import Toast, {BaseToast, ErrorToast,SuccessToast} from 'react-native-toast-message';
import { Colors } from '../Utils/Colors';
import { Fonts } from '../Utils/Fonts';

const toastConfig = {
  success: props => (
    <SuccessToast
      {...props}
      style={{borderLeftColor: Colors.green}}
      text1Style={{
        fontSize: 20,
        fontFamily: Fonts.Bold,
      }}
      text2Style={{
        fontSize: 15,
        fontFamily: Fonts.Medium,
      }}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: Colors.error,borderRadius: 10}}
      text1Style={{
        fontSize: 20,
        fontFamily: Fonts.Bold,
        color: Colors.dark,
      }}
      text2Style={{
        fontSize: 15,
        fontFamily: Fonts.Medium,
      }}
    />
  ),
};

const Toastify = () => {
  return <Toast config={toastConfig} />;
};

export const ToastMessage = (one, two, three, position = 'top') => {
  return (
    Toast.hide(),
    Toast.show({
      type: one,
      text1: two,
      text2: three,
      position: position,
    })
  );
};

export default Toastify;
