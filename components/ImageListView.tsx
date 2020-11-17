import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
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

import {getImageInfo} from '../services/api';
import { Asset } from '../types/Asset';
import ImageSummaryView from './ImageSummaryView';



function ImageListView({ navigation }:{navigation:any}) {

    const [assets,setAssets] = useState<Array<Asset>>([{url:'http://cdn.shibe.online/shibes/c926ad3d57dff4a7cf85e1c05c84d0748881a496.jpg',name:'http://cdn.shibe.online/shibes/c926ad3d57dff4a7cf85e1c05c84d0748881a496.jpg',description:'http://cdn.shibe.online/shibes/c926ad3d57dff4a7cf85e1c05c84d0748881a496.jpg'}]);
    useEffect(()=>{
        const getDetails = async () => {
            try{
                const rassets:Array<Asset> = await getImageInfo();
                console.log(" i am here",rassets.length);
                setAssets(rassets);
            }
            catch(error) {
                console.log(error);
            }
        }
        getDetails();
    },[])

    const handlePress = (asset:Asset) => {
        navigation.navigate('Details',asset)
    }

    const renderSummaryView = ({item}) => {
      
        return(
                <ImageSummaryView asset={item} onPress={()=>handlePress(item)}/>
        )
        
    }

    return (
     
        <FlatList
            renderItem={renderSummaryView}
            data={assets}
          style={styles.scrollView}/>
              

       
    )
}

export default ImageListView


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
      width:100,
      height:100,
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

