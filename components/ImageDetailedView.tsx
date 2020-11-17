import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
  } from 'react-native';
  
  import {
      Header,
      LearnMoreLinks,
      Colors,
      DebugInstructions,
      ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
import { Asset } from '../types/Asset';

function ImageDetailedView({ route, navigation }:{route:any,navigation:any}) {
    const  asset:Asset = route.params;
    return (
        <View>
            <Text>Detailed View</Text>
              <Image
                    style={styles.image}
                    source={{
                     uri:
                     asset.url
                    }}
                  />
             <Text style={styles.titleText}>Sample Title</Text>
             <Text numberOfLines={5}>{asset.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    image:{
        width:300,
        height:300,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
  
  

export default ImageDetailedView
