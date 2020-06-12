import React from "react";
import Card from "../components/lolcard";
import {getSummerner, changeField} from "../modules/lol";
import { useDispatch, useSelector } from "react-redux";
const LolContainer = () => {



    const {summoner,inputText} = useSelector(state => state.lolInfo);
    const dispatch = useDispatch();
    const getLolInfo = (e) => {

       // dispatch(getSummerner(inputText));
    }


    const onChange = e => {
        console.log(e.target.name);
        console.log(e.target.value)
        dispatch(changeField({
            key : e.target.name,
            value :  e.target.value
        }))
    }
    return(<>
    <div className="row mb-3">
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" 
                           className="form-control bg-secondary text-white border-0 small" 
                           placeholder="소환사 명을 입력해 주세요" 
                           aria-label="Search" 
                           aria-describedby="basic-addon2"
                           onChange={onChange}
                           value ={inputText}
                           name="inputText"
                           />
                    <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={getLolInfo}>
                        <i className="fas fa-search fa-sm"></i>
                    </button>
                    </div>
                </div>
            </form>
     </div>
      <div class="row">
        <Card name="hello?"  desc="설명"/>
      </div>
    </>);


}
export default LolContainer;