import React from "react";
import Camera from './Camera'
import Map from './Map'
const necessities=['food','water','jacket','burn','clothing']



 
class Form extends React.Component {
    state = {
        pageOneVis:'inline',
        pageTwoVis:'none',
        pageThreeVis:'none',
        clothing:false,
        food:false,
        water:false,
        jacket:false,
        burn:false
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
        let newNecessities=[]
        if(this.state.burn){
            newNecessities.push('burn')
        }
        if(this.state.water){
            newNecessities.push('water')
        }
        if(this.state.jacket){
            newNecessities.push('jacket')
        }
        if(this.state.clothing){
            newNecessities.push('clothing')
        }
        if(this.state.food){
            newNecessities.push('food')
        }
        console.log(address+date+newNecessities)
        const objectToSend={
            address,
            date,
            location,
            numberOfPeople,
            descriptionOfPerson,
            descriptionOfNeeds,
            contactInfo,
            descriptionOfSelf,
            reporterInfo,
            newNecessities
        }
        console.log(objectToSend)
    }
   
    render() {

   
      return (
        <div>
            <h1>FORM</h1>
            
            <div style={{display:this.state.pageOneVis}}>
                <h1>Page One</h1>
                
                
                <input id="address" style={{display:this.state.pageOneVis}} placeholder="Address"/>
                <br/>
                <input type="date" id="date" style={{display:this.state.pageOneVis}} placeholder="Date"/>
                <br/>
                
                <textarea type="date" id="location" style={{display:this.state.pageOneVis}} placeholder="Location Description"/>
                
            </div>
            
            <div style={{display:this.state.pageTwoVis}}>
                <h1>PageTwo</h1>
                <input id = "numberOfPeople" type="number" style={{display:this.state.pageTwoVis}} placeholder="Number of people"/>
                <br/>
                <textarea id = "descriptionOfPerson" style={{display:this.state.pageTwoVis}} placeholder="Description of person"/>
                <br/>
                <textarea id = "descriptionOfNeeds" style={{display:this.state.pageTwoVis}} placeholder="Description of needs"/>
                <br/>
                <textarea id = "contactInfo" style={{display:this.state.pageTwoVis}} placeholder="Contact Info (if possible)"/>
                <br/>
                
            </div>
            
            
            
            <div style={{display:this.state.pageThreeVis}}>
                <h1>Page Three</h1>
                <input id = "descriptionOfSelf" style={{display:this.state.pageThreeVis}} placeholder="Description of self"/>
                <br/>
                <input id = "reporterInfo" style={{display:this.state.pageThreeVis}} placeholder="Reporter contact info"/>
                <br/>
                <button style={{display:this.state.pageThreeVis}} onClick={this.sendItUp}>Submit</button>
                <div className="needList">
                    <div onClick={()=>{!this.state.clothing?this.setState({
                        clothing:true
                    }):this.setState({
                        clothing:false
                    })}} className={this.state.clothing?'homelessNeedsClicked':'homelessNeeds'}>clothing</div>
                    <div onClick={()=>{!this.state.food?this.setState({
                        food:true
                    }):this.setState({
                        food:false
                    })}}className={this.state.food?'homelessNeedsClicked':'homelessNeeds'}>food</div>
                    <div onClick={()=>{!this.state.water?this.setState({
                        water:true
                    }):
                    this.setState({
                        water:false
                    })}}className={this.state.water?'homelessNeedsClicked':'homelessNeeds'}>water</div>
                    <div onClick={()=>{!this.state.burn?this.setState({
                        burn:true
                    }):
                    this.setState({
                        burn:false
                    })}}className={this.state.burn?'homelessNeedsClicked':'homelessNeeds'}>burn medication</div>
                    <div onClick={()=>{!this.state.jacket?this.setState({
                        jacket:true
                    }):
                    this.setState({
                        jacket:false
                    })}}className={this.state.jacket?'homelessNeedsClicked':'homelessNeeds'}>jacket</div>
                    <Camera/>
                </div>
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