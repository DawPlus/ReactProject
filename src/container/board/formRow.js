import React from "react";
import TextField from '@material-ui/core/TextField';
import File from "../../components/file";

const FormRow = () => {

    const onFileChange = e=> {
       {/* 파일 체인지 이벤트 필요  
        var file_input_container = $('.js-input-file');
    
        if (file_input_container[0]) {
    
            file_input_container.each(function () {
    
                var that = $(this);
    
                var fileInput = that.find(".input-file");
                var info = that.find(".input-file__info");
    
                fileInput.on("change", function () {
    
                    var fileName;
                    fileName = $(this).val();
    
                    if (fileName.substring(3,11) == 'fakepath') {
                        fileName = fileName.substring(12);
                    }
    
                    if(fileName == "") {
                        info.text("No file chosen");
                    } else {
                        info.text(fileName);
                    }
    
                })
    
            });
    
        }
         */}
    
    }
    return (<>   
            <div className="form-group">
                <TextField id="title" label="제목을 입력해주세요" fullWidth variant="outlined"  autoComplete='off'/>
            </div>
            <div className="form-group"> 
                <TextField  id="content" label="내용을 입력해주세요"  rows={4} fullWidth   autoComplete='off'  multiline variant="outlined"/>
            </div>
            <div className="form-group"> 
                <File id="map" title="UpLoad Map File" onChange={()=>{}} onUpload={()=>{}} />
            </div>
            <div className="form-group"> 
                <File id="hint" title="UpLoad Hint File" onChange={()=>{}} onUpload={()=>{}} />
            </div> 
        </>);

}
export default FormRow;