import React from "react";
import Input from "../../components/input";
import TextArea from "../../components/textarea";
const RegistPage = () => {


    return(<>
    <div style={{color : "#000"}} className="container">
        <div className="row">
            <div className="col-md-12 order-md-12">
                <h4 className="mb-3">문제등록</h4>
                
                    <div className="mb-3">
                        <label for="title">Title</label>
                        <Input id="title"
                               name="title"
                               classes="form-control"
                               isRequired={true}/>
                    </div>
                    <div className="mb-3">
                        <label for="content">Content</label>
                        <TextArea id="content" name="content"  value={"hello?"}   classes="form-control"/>
                    </div>
        
                    <div className="mb-3">
                        <label for="country">Video Choose</label>
                        
                        <select className="custom-select d-block w-100" id="country" required>
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                    </div>
        
                <hr className="mb-4"/>
            
                <h4 className="mb-3">문제유형</h4>

                <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required/>
                        <label className="custom-control-label" for="credit">주관식</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                        <label className="custom-control-label" for="debit">객관식</label>
                    </div>
                </div>

                <hr className="mb-4"/>

                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
    
             </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-md-offset-2">
                <div className="form-bg">
                    <form className="form">
                        <div className="form-group"> <label className="sr-only">Name</label> <input type="text" className="form-control" required="" id="nameNine" placeholder="Your Name"/> </div>
                        <div className="form-group"> <label className="sr-only">Email</label> <input type="email" className="form-control" required="" id="emailNine" placeholder="Email Address"/> </div>
                        <div className="form-group"> <label className="sr-only">Name</label>
                         <textarea className="form-control"  rows="7" id="messageNine" placeholder="Write message"></textarea> </div> <button type="submit" className="btn text-center btn-blue">Send Message</button>
                    </form>
                </div>
            </div>
    </div>
    </div>
    </>);


}
export default RegistPage;