import React from "react";
import FileRow from "../../components/board/fileRow";
import InputRow from "../../components/board/inputRow";
import TextareaRow from "../../components/board/textareaRow";
import RadioRow from "../../components/board/radioRow";
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
    
            <div className="card-body">
                        
                        <form method="POST">
                            <InputRow title="제목" id="title" placeholder="제목을 입력해주세요 "/>
                            <TextareaRow title="내용" id="content" placeholder="내용을 입력해주세요 "/>
                            <FileRow title="Image (Map)" onChange={onFileChange} id="map"/>
                            <FileRow title="Image (hint)"onChange={onFileChange} id="hint" desc="Upload your CV/Resume or any other relevant file. Max file size 50 MB"/>
                            <RadioRow title="문제유형" id="radio"/>
                        </form>
                    </div>

    
    
    </>);

}
export default FormRow;