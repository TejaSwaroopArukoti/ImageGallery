import axios from 'axios';
import {Asset} from '../types/Asset';

export const getImageInfo = ():Promise<Array<Asset>> =>  {
    
    return new Promise((resolve,reject)=>{
        axios.get("https://shibe.online/api/shibes?count=10&urls=true&httpsUrls=false")
        .then((response)=>{
           
            let assets: Array<Asset> = [];
            let assetsJson = response.data;
            if(assetsJson.length > 0){ 
                assetsJson.forEach((assetJson:any)=>{
                    let asset:Asset = {} as Asset;
                    asset.url = assetJson;
                    asset.name = assetJson;
                    asset.description = "Sample Descrption"+assetJson;
                    assets.push(asset);
                });
            }
            resolve(assets);
        })
        .catch((error)=>{
            reject(error);
        })
    })
    
}