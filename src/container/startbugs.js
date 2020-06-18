import React from "react";
import Card from "../components/lolcard";
import { useDispatch , useSelector} from "react-redux";
import {getData ,changeField, initializeForm} from "../modules/starbucks"
const LolContainer = () => {

    const dispatch = useDispatch();
    const {gugun_cd} = useSelector(state => state.starbucks.infos);
    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
      const { value, name } = e.target;
      dispatch(
        changeField({
          form: 'infos',
          key: name,
          value,
        }),
      );
    };
    const getStarbugsData =() => {
      dispatch(getData());
    }

    return(<>
   
      <div class="row">
        <input type="text" name="gugun_cd" value={gugun_cd} onChange={onChange}/>
        <button onClick={getStarbugsData}>가져오기?</button>
      
      </div>
    </>);


}
export default LolContainer;