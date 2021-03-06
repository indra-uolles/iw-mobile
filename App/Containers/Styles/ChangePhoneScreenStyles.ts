import { StyleSheet } from 'react-native';
import { ApplicationStyles } from 'App/Themes';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerTitle: {
    fontSize: hp('2.55%'),
    fontFamily: 'OpenSans_semi',
    textAlign: 'center',
    marginTop: hp('2.25%'),
    marginBottom: hp('3.15%')
  }
});