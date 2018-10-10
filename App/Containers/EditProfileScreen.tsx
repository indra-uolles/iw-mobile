import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text } from 'native-base';
import styles from './Styles/EditProfileScreenStyles';
import EditProfile from '../Components/EditProfile';

const guid = ()  =>{
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

type Props = {
	navigation: NavigationScreenProp<any, any>,
}

const jobs = [
	{ id: guid(), name: 'IPU RAS', from: '2009', to: '2010' },
	{ id: guid(), name: 'Google', from: '2010', to: '2018' },
];

const educations = [
	{ id: guid(), name: 'Cambridge', from: '2001', to: '2002' },
	{ id: guid(), name: 'Oxford', from: '2010', to: '2012' },
];

export default class EditProfileScreen extends Component<Props> {
	onAddEducationPress = () => {
		this.props.navigation.navigate('AddEducationScreen');
	}

	onAddExperiencePress = () => {
		this.props.navigation.navigate('AddExperienceScreen');
	}

	render() {
		return (
			<KeyboardAwareScrollView
				style={styles.mainContainer}  
			>
				<Text style={styles.headerTitle}>Edit profile</Text>
				<EditProfile 
					educations={educations} 
					jobs={jobs}
					onAddEducationPress={this.onAddEducationPress}
					onAddExperiencePress={this.onAddExperiencePress}
				/>
			</KeyboardAwareScrollView>
		);
	}
}