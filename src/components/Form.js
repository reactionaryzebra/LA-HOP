import React from "react";
import Camera from './Camera'

 
class Form extends React.Component {
    state = {
        pageOneVis:'inline',
        pageTwoVis:'none',
        pageThreeVis:'none'
    }
    sendItUp=()=>{
        const address=document.getElementById("address").value
        const date=document.getElementById("date").value
        const location=document.getElementById("location").value
        const numberOfPeople=document.getElementById("numberOfPeople").value
        const descriptionOfPerson=document.getElementById("descriptionOfPerson").value
        const descriptionOfNeeds=document.getElementById("descriptionOfNeeds").value
        const contactInfo=document.getElementById("contactInfo").value
        const descriptionOfSelf=document.getElementById("descriptionOfSelf").value
        const reporterInfo=document.getElementById("reporterInfo").value
        console.log(address+date)
        alert()
    }
   
    render() {

   
      return (
        <div>
            <h1>FORM</h1>
            <div >
                <input id="address" style={{display:this.state.pageOneVis}} placeholder="Address"/>
                <br/>
                <input type="date" id="date" style={{display:this.state.pageOneVis}} placeholder="Date"/>
                <br/>
                <textarea type="date" id="location" style={{display:this.state.pageOneVis}} placeholder="Location Description"/>
            </div>
            <div style={{display:this.state.pageTwoVis}}>
                <input id = "numberOfPeople" style={{display:this.state.pageTwoVis}} placeholder="Number of people"/>
                <br/>
                <textarea id = "descriptionOfPerson" style={{display:this.state.pageTwoVis}} placeholder="Description of person"/>
                <br/>
                <textarea id = "descriptionOfNeeds" style={{display:this.state.pageTwoVis}} placeholder="Description of needs"/>
                <br/>
                <textarea id = "contactInfo" style={{display:this.state.pageTwoVis}} placeholder="Contact Info (if possible)"/>
                <br/>
                <Camera/>
            </div>
            <div >
                <input id = "descriptionOfSelf" style={{display:this.state.pageThreeVis}} placeholder="Description of self"/>
                <br/>
                <input id = "reporterInfo" style={{display:this.state.pageThreeVis}} placeholder="Reporter contact info"/>
                <br/>
                <button style={{display:this.state.pageThreeVis}} onClick={this.sendItUp}>Submit</button>
            </div>
            

          <button onClick={()=>{this.setState(
            {pageOneVis:'inline',
                pageTwoVis:'none',
            pageThreeVis:'none'}
          )}}>One</button>
          <button onClick={()=>{this.setState(
            {pageOneVis:'none',
                pageTwoVis:'inline',
            pageThreeVis:'none'}
          )}}>Two</button>
          <button onClick={()=>{this.setState(
            {pageOneVis:'none',
                pageTwoVis:'none',
            pageThreeVis:'inline'}
          )}}>Three</button>
        </div>
      );
    }
  }
export default Form