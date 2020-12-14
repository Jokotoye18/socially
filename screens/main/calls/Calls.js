import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import {callsData} from '../../../data/calls';
import {hp, wp} from '../../../utils/responsiveDesign';
import {globalStyles} from '../../../styles/globalStyles';
import videoIcon from '../../../assets/images/Vector(26).png';
import callIcon from '../../../assets/images/Vector(27).png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Calls = () => {
  const renderItem = ({item}) => {
    const {
      user: {name, img},
      type: {answered, title},
    } = item;
    return (
      <View style={[styles.item, globalStyles.rowBeteen]}>
        <View style={[styles.info]}>
          <Image source={img} style={styles.imgProfile} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={[styles.call, !answered && {color:'red'} ]}>{answered? title : `Missed ${title}`}</Text>
            <View style={styles.timeInfo}>
              <MaterialCommunityIcons name={answered? 'call-made': 'call-missed' } color={answered? 'green': 'red'} />
              <Text style={styles.time}>14 min</Text>
              <Text style={styles.time}>2:40pm</Text>
            </View>
          </View>
        </View>
        <View style={[styles.icons, globalStyles.rowEnd]}>
          <Image
            source={videoIcon}
            style={[styles.img, {marginRight: wp(31)}]}
          />
          <Image source={callIcon} style={styles.img} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        style={styles.flatlistContainer}
        data={callsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Calls;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  flatlistContainer: {
    paddingHorizontal: wp(18),
    paddingTop: hp(25),
  },
  info: {
    flexBasis: '70%',
    flexDirection: 'row',
  },
  icons: {
    flexBasis: '30%',
  },
  img: {
    resizeMode: 'contain',
    width: wp(18),
    height: hp(12),
  },
  imgProfile: {
    resizeMode: 'contain',
    width: wp(60),
    height: hp(60),
    borderRadius: hp(60) / 2,
    marginRight: wp(12),
  },
  item: {
    borderBottomWidth: 0.3,
    paddingBottom: hp(12),
    marginBottom: hp(14),
    borderColor: '#959494',
  },
  name: {
    fontFamily: 'Raleway-Regular',
    fontSize: hp(14),
    fontWeight: '600',
    color: '#252525',
    paddingBottom: hp(7),
  },
  call: {
    fontFamily: 'Raleway-Regular',
    fontSize: hp(12),
    fontWeight: '500',
    color: '#4F4E4E',
    paddingBottom: hp(7),
  },
  timeInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  time: {
    fontFamily: 'Raleway-Regular',
    fontSize: hp(9),
    fontWeight: '500',
    color: '#4F4E4E',
    paddingLeft: wp(10)
  }
});
