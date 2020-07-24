import React, { useState } from "react";

import FormRow from "../../container/board/formRow";
import FormHead from "../../container/board/formHead"
import FormImage from "../../container/board/formImage";
import AnswerList from "../../container/board/answerList";
import AnswerSingle from "../../container/board/answerSingle";

const NewPage = () => {
    const isAnswer = false;
    return(<>
            <div className="row" id="regForm">
                {/* 입력 폼 */}
                <div className="col-xl-8 col-lg-8">
                    {/* 문제*/}
                    <div className="card shadow mb-2">
                        <FormHead />
                        <FormRow/>
                    </div>
                    {/* 답변 */}
                    <div className="card shadow">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Answer</h6>    
                        </div>  
                        <div className="card-body">
                            { isAnswer ? 
                            <AnswerList/> :
                            <AnswerSingle />
                            }
                        </div>
                    </div>
                </div>
                {/* 입력 폼  끝*/}
                {/* 이미지 미리보기  */}
                <div className="col-xl-4 col-lg-4">                  
                    <FormImage />
                </div>
                {/* 이미지 미리보기  끝*/}
            </div>

            <div className="row">


<div className="col-lg-6 mb-4">


    <div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
    </div>
    <div className="card-body">
        <h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
        <div className="progress mb-4">
        <div className="progress-bar bg-danger" role="progressbar" style={{"width":"20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40%</span></h4>
        <div className="progress mb-4">
        <div className="progress-bar bg-warning" role="progressbar" style={{"width":"40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h4 className="small font-weight-bold">Customer Database <span className="float-right">60%</span></h4>
        <div className="progress mb-4">
        <div className="progress-bar" role="progressbar" style={{"width":"60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h4 className="small font-weight-bold">Payout Details <span className="float-right">80%</span></h4>
        <div className="progress mb-4">
        <div className="progress-bar bg-info" role="progressbar" style={{"width":"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>
        <div className="progress">
        <div className="progress-bar bg-success" role="progressbar" style={{"width":"100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    </div>

    
    <div className="row">
    <div className="col-lg-6 mb-4">
        <div className="card bg-primary text-white shadow">
        <div className="card-body">
            Primary
            <div className="text-white-50 small">#4e73df</div>
        </div>
        </div>
    </div>
    <div className="col-lg-6 mb-4">
        <div className="card bg-success text-white shadow">
        <div className="card-body">
            Success
            <div className="text-white-50 small">#1cc88a</div>
        </div>
        </div>
    </div>
    <div className="col-lg-6 mb-4">
        <div className="card bg-info text-white shadow">
        <div className="card-body">
            Info
            <div className="text-white-50 small">#36b9cc</div>
        </div>
        </div>
    </div>
    <div className="col-lg-6 mb-4">
        <div className="card bg-warning text-white shadow">
        <div className="card-body">
            Warning
            <div className="text-white-50 small">#f6c23e</div>
        </div>
        </div>
    </div>
    <div className="col-lg-6 mb-4">
        <div className="card bg-danger text-white shadow">
        <div className="card-body">
            Danger
            <div className="text-white-50 small">#e74a3b</div>
        </div>
        </div>
    </div>
    <div className="col-lg-6 mb-4">
        <div className="card bg-secondary text-white shadow">
        <div className="card-body">
            Secondary
            <div className="text-white-50 small">#858796</div>
        </div>
        </div>
    </div>
    </div>

</div>

<div className="col-lg-6 mb-4">

    
    <div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Hello World</h6>
    </div>
    <div className="card-body">
        <div className="text-center">
        {/*                             
        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{"width":"25rem"}} 
        src="img/undraw_posting_photo.svg" alt="" />
         */}
        </div>
        <p>
            일단 그냥 만들어 봤어요... 
        </p>
    </div>
    </div>

    
    <div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
    </div>
    <div className="card-body">
        <p> 뭘만들지 고민중입니다...</p>
    </div>
    </div>

</div>
</div>
    </>);

}
export default NewPage;