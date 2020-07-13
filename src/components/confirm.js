import React from "react";

const ConfirmComponent = (props) => {
        const {id, title, content, cancleTitle="취소", acceptTitle="확인",onCancle, onAccept} = props;
    return(<>
    
    <div className="modal fade" id={id+`_modal`} 
         tabIndex="-1" 
         role="dialog" 
         aria-labelledby={id+`_modal`} 
         aria-hidden="true">

        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                </div>
            <div className="modal-body">{content}</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal" onClick={onCancle}>{cancleTitle}</button>
                    <button className="btn btn-primary"  onClick={onAccept}>{acceptTitle}</button>
                </div>
            </div>
        </div>
    </div>

    
    
    
    
    
    
    </>);



}
export default ConfirmComponent;