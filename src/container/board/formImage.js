import React,{Suspense, useState} from "react";
import doh from "../../img/doh.png"
import peng from "../../img/download.jpg"
import Images from "../../components/imageViewer";
import File from "../../components/file";

const ImageView = () => {
    return (<>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Map Image View</h6>
                </div>
                <div className="card-body">
                    <File id="map" title="UpLoad Map File" onChange={(e)=>{console.log(e);}} onUpload={()=>{}} />
                    <Images src={doh} alt="map"/>
                </div>
             </div>
             <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Hint Image View </h6>
                </div>
                <div className="card-body">
                    <File id="map" title="UpLoad Hint File" onChange={(e)=>{console.log(e);}} onUpload={()=>{}} />
                    <Images src={peng} alt="peng"/>
                </div>
             </div>
    </>);
}
export default ImageView;