import React, { useState } from "react";

import FormRow from "../../container/board/formRow";
import FormHead from "../../container/board/formHead"
import ImageView from "../../container/board/imageView";

const NewPage = () => {
    
    const [cnt , setCnt] = useState(1);
    const addInput = () => {
         setCnt(cnt+ 1);
    }
    return(<>
            <div className="row" id="regForm">
                {/* 입력 폼 */}
                <div className="col-xl-9 col-lg-9">
                    <div className="card shadow mb-4">
                        <FormHead />
                        <FormRow/>


                    </div>
                </div>
                {/* 입력 폼  끝*/}
                {/* 이미지 미리보기  */}
                <div className="col-xl-3 col-lg-3">                  
                    <ImageView />
                </div>
                {/* 이미지 미리보기  끝*/}
            </div>
    </>);

}
export default NewPage;