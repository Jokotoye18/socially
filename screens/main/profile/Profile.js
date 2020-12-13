import React, {useReducer} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {styles} from './Styles';
import {Files} from '../../../data/files'
import {globalStyles} from '../../../styles/globalStyles';
import {wp, hp} from '../../../utils/responsiveDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileBg from '../../../assets/images/profileBg.jpg';
import Back from '../../../assets/images/Vector(19).png';
import More from '../../../assets/images/Vector(20).png';
import ProfilePics from '../../../assets/images/Ellipse-17.png';
import {mediaData, MediaReducer} from './reducer';

const Profile = ({navigation}) => {
  const [medias, dispatch] = useReducer(MediaReducer, mediaData);

  const getActiveMedia = () => {
    const active = medias.find(media => media.active === true)
    const activeFiles = Files.filter(file => file.fileType.toLocaleLowerCase() === active.title.toLocaleLowerCase())
    return activeFiles
  }

  const MEDIAS = getActiveMedia()

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={ProfileBg}
          style={{width: '100%', height: '100%'}}>
          {/* <ScrollView> */}
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}>
                <Image source={Back} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <Image source={More} />
              </TouchableOpacity>
            </View>
            <View style={styles.ProfileContainer}>
              <Image source={ProfilePics} style={styles.img} />
              <View style={[globalStyles.rowCenter, {marginTop: hp(18)}]}>
                <Text style={styles.name}>Richard Mccollins</Text>
                <View style={{backgroundColor: '#fff'}}>
                  <AntDesign
                    onPress={() => {}}
                    name="edit"
                    color="red"
                    size={20}
                  />
                </View>
              </View>
              <Text style={styles.username}>@Mccollins</Text>
            </View>
            <View style={styles.about}>
              <View style={[globalStyles.rowStart, {marginBottom: hp(11)}]}>
                <Text style={styles.name}>about</Text>
                <View style={{backgroundColor: '#fff'}}>
                  <AntDesign
                    onPress={() => {}}
                    name="edit"
                    color="red"
                    size={15}
                  />
                </View>
              </View>
              <Text style={styles.aboutContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
                gravida nam nunc, condimentum cursus mi cras. Amet gravida
                molestie lacus, ut venenatis aenean at integer sollicitudin.
                Ipsum nam venenatis, massa, mauris enim lectus massa. Sapien
                sapien sed in sed eget mattis dui. Iaculis tempus lectus elit
                duis. Erat volutpat id enim sollicitudin rutrum posuere justo
                velit, enim. Vestibulum congue commodo urna nunc, blandit nisl,
                ac egestas.
              </Text>
              <View>
                <Text style={styles.name}>Media</Text>
                <View style={[globalStyles.rowStart]}>
                  {medias.map((media, index) => (
                    <TouchableOpacity key={index} onPress={() => dispatch({
                      type: 'SELECT',
                      payload: media.title
                    })}>
                      <Text
                        style={[
                          styles.mediaTitle,
                          media.active && styles.mediaActive,
                        ]}
                        >
                        {media.title}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <FlatList 
                  data={MEDIAS}
                  
                />


              </View>
            </View>
          {/* </ScrollView> */}
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default Profile;
