import React from "react";
import Camera from './Camera'
import Map from './Map'
import styled from 'styled-components'
const necessities=['food','water','jacket','burn','clothing']



 
class Form extends React.Component {
    state = {
        english:true,
        spanish:false,
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
        const other=document.getElementById("other").value
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
            newNecessities,
            other
        }
        console.log(objectToSend)
    }
   
    render() {

   
      return (
        <div>
            <div className="navBar">LA-HOP</div>
            <img  style={{display:this.state.english?'inlineBlock':'inlineBlock'}} src="http://paxriverkeeper.org/wp-content/uploads/2015/03/8.jpg" onClick={()=>{this.setState({
                english:false,
                
            })
            console.log(this.state.english,'<--this.state.english')
            console.log(this.state.spanish,'<---this.state.spanish')}}/>
            <img style={{display:!this.state.english?'inlineBlock':'inlineBlock'}} src="https://flagsinternational.com/wp-content/uploads/2018/02/mexico013.jpg" onClick={()=>{
                this.setState({
                    
                    english:true
                })
                console.log(this.state.english,'<--this.state.english')
                console.log(this.state.spanish,'<---this.state.spanish')
            }}/>
            
            <div style={{display:this.state.pageOneVis}}>
                <h1>{this.state.english?'Page One':'Pagino Uno'}</h1>
                
                
                <input id="address" style={{display:this.state.pageOneVis}} placeholder={this.state.english?"Address":'dirección'}/>
                <br/>
                <input type="date" id="date" style={{display:this.state.pageOneVis}} placeholder="Date"/>
                <br/>
                
                <textarea type="date" id="location" style={{display:this.state.pageOneVis}} placeholder={this.state.english?"Location Description":"descripción de la ubicación"}/>
                
            </div>
            
            <div style={{display:this.state.pageTwoVis}}>
                <h1>{this.state.english?"PageTwo":"Página dos"}</h1>
                <input id = "numberOfPeople" type="number" style={{display:this.state.pageTwoVis}} placeholder={this.state.english?"Number of people":"número de personas"}/>
                <br/>
                <textarea id = "descriptionOfPerson" style={{display:this.state.pageTwoVis}} placeholder={this.state.english?"Description of person":"descripción de la persona"}/>
                <br/>
                <textarea id = "descriptionOfNeeds" style={{display:this.state.pageTwoVis}} placeholder={this.state.english?"Description of needs":"descripción de las necesidades"}/>
                <br/>
                <textarea id = "contactInfo" style={{display:this.state.pageTwoVis}} placeholder={this.state.english?"Contact Info (if possible)":"Información del contacto"}/>
                <br/>
                
            </div>
            
            
            
            <div style={{display:this.state.pageThreeVis}}>
                <h1>{this.state.english?"Page Three":'Página tres'}</h1>
                <input id = "descriptionOfSelf" style={{display:this.state.pageThreeVis}} placeholder={this.state.english?"Description of self":"descripción de ti mismo"}/>
                <br/>
                <input id = "reporterInfo" style={{display:this.state.pageThreeVis}} placeholder={this.state.english?"Reporter contact info":"informacion de contacto del reportero"}/>
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
                    <input id="other" placeholder={this.state.english?"other:":"otro"}/>
                    <Camera/>
                </div>
            </div>
            <br/>
            

          <button style={{display:'none'}} onClick={()=>{this.setState(
            {pageOneVis:'inline',
                pageTwoVis:'none',
            pageThreeVis:'none'}
          )}}>One</button>
          <button className="nextButton" style={{display:this.state.pageOneVis}} onClick={()=>{this.setState(
            {pageOneVis:'none',
                pageTwoVis:'inline',
            pageThreeVis:'none'}
          )}}>NEXT</button>
          <button className="nextButton" style={{display:this.state.pageTwoVis}} onClick={()=>{this.setState(
            {pageOneVis:'none',
                pageTwoVis:'none',
            pageThreeVis:'inline'}
          )}}>NEXT</button>
        </div>
      );
    }
  }
export default Form