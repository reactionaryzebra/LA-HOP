import React from "react";
import Camera from './Camera'
import Map from './Map'
import styled from 'styled-components'
import FormOne from '../styles/FormOne'
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
        burn:false,
        shoes:false,
        selectedFile:null,
        showCamera:false
    }
    fileSelectedHandler=event=>{
        this.setState({selectedFile:event.target.files[0]})
    }

    fileUploadHandler=()=>{
        console.log('Now upload it to whereever')
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
        if(this.state.shoes){
            newNecessities.push('shoes')
        }
        //console.log(address+date+newNecessities)
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
            other,
            
            img:this.props.img
        }
        console.log(objectToSend,'<-----object to send')
        console.log(this.props.img,'<----this.props.img')
    }
   
    render() {

   
      return (
        <div>
            
            <img  style={{display:this.state.english?'inlineBlock':'inlineBlock'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" onClick={()=>{this.setState({
                english:true,
                
            })
            console.log(this.state.english,'<--this.state.english')
            console.log(this.state.spanish,'<---this.state.spanish')}}/>
            <img style={{display:!this.state.english?'inlineBlock':'inlineBlock'}} src="https://images-na.ssl-images-amazon.com/images/I/61sIDOD1ajL._SL1500_.jpg" onClick={()=>{
                this.setState({
                    
                    english:false
                })
                console.log(this.state.english,'<--this.state.english')
                console.log(this.state.spanish,'<---this.state.spanish')
            }}/>
            
            <FormOne style={{display:this.state.pageOneVis}}>
                <h1>{this.state.english?'Page One':'Pagino Uno'}</h1>
                
                
                <input id="address" style={{display:this.state.pageOneVis}} placeholder={this.state.english?"Address":'dirección'}/>
                <br/>
                <input type="date" id="date" style={{display:this.state.pageOneVis}} placeholder="Date"/>
                <br/>
                
                <textarea type="date" id="location" style={{display:this.state.pageOneVis}} placeholder={this.state.english?"Location Description":"descripción de la ubicación"}/>
                
            </FormOne>
            
            <FormOne style={{display:this.state.pageTwoVis}}>
                <h1>{this.state.english?"Page Two":"Página dos"}</h1>
                <input id = "numberOfPeople" type="number" style={{display:this.state.pageTwoVis}} placeholder={this.state.english?"Number of people":"número de personas"}/>
                <br/>
                <textarea id = "descriptionOfPerson" style={{display:this.state.pageTwoVis}} placeholder={this.state.english?"Description of person":"descripción de la persona"}/>
                <br/>
                <textarea id = "descriptionOfNeeds" style={{display:this.state.pageTwoVis}} placeholder={this.state.english?"Description of needs":"descripción de las necesidades"}/>
                <br/>
                <textarea id = "contactInfo" style={{display:this.state.pageTwoVis}} placeholder={this.state.english?"Contact Info (if possible)":"Información del contacto"}/>
                <br/>
                
            </FormOne>
            
            
            
            <FormOne style={{display:this.state.pageThreeVis}}>
            
                <h1>{this.state.english?"Page Three":'Página tres'}</h1>
                {this.state.showCamera?<Camera pushImgUp={this.props.pushImgUp}/>:undefined}
                <br/>
                <button onClick={()=>{this.setState({showCamera:true})}}>Use Camera</button>
                <br/>
                <input type="file" onChange={this.fileSelectedHandler}/>
                <button onClick={this.fileUploadHandler}>Upload</button>

                <textarea id = "descriptionOfSelf" style={{display:this.state.pageThreeVis}} placeholder={this.state.english?"Description of self":"descripción de ti mismo"}/>
                <br/>
                <input id = "reporterInfo" style={{display:this.state.pageThreeVis}} placeholder={this.state.english?"Reporter contact info":"informacion de contacto del reportero"}/>
                <br/>
                
                <div className="needList">
                    <div onClick={()=>{!this.state.clothing?this.setState({
                        clothing:true
                    }):this.setState({
                        clothing:false
                    })}} className={this.state.clothing?'homelessNeedsClicked':'homelessNeeds'}>{this.state.english?'clothing':'la ropa'}</div>
                    <div onClick={()=>{!this.state.food?this.setState({
                        food:true
                    }):this.setState({
                        food:false
                    })}}className={this.state.food?'homelessNeedsClicked':'homelessNeeds'}>{this.state.english?'food':'comida'}</div>
                    <div onClick={()=>{!this.state.water?this.setState({
                        water:true
                    }):
                    this.setState({
                        water:false
                    })}}className={this.state.water?'homelessNeedsClicked':'homelessNeeds'}>{this.state.english?'water':'la agua'}</div>
                    <div onClick={()=>{!this.state.burn?this.setState({
                        burn:true
                    }):
                    this.setState({
                        burn:false
                    })}}className={this.state.burn?'homelessNeedsClicked':'homelessNeeds'}>{this.state.english?'burn medication':'quemar medicación'}</div>
                    <div onClick={()=>{!this.state.jacket?this.setState({
                        jacket:true
                    }):
                    this.setState({
                        jacket:false
                    })}}className={this.state.jacket?'homelessNeedsClicked':'homelessNeeds'}>{this.state.english?'jacket':'chaqueta'}</div>
                    <div onClick={()=>{!this.state.shoes?this.setState({
                        shoes:true
                    }):
                    this.setState({
                        shoes:false
                    })}}className={this.state.shoes?'homelessNeedsClicked':'homelessNeeds'}>{this.state.english?'shoes':'los zapatos'}</div>
                    <input id="other" placeholder={this.state.english?"other:":"otro:"}/>
                    
                    <button className="nextButton" style={{display:this.state.pageThreeVis}} onClick={this.sendItUp}>{this.state.english?'Submit':'Enviar'}</button>
                </div>
            </FormOne>
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
          )}}>{this.state.english?'NEXT':'Siguiente'}</button>
          <button className="nextButton" style={{display:this.state.pageTwoVis}} onClick={()=>{this.setState(
            {pageOneVis:'none',
                pageTwoVis:'none',
            pageThreeVis:'inline'}
          )}}>{this.state.english?'NEXT':'Siguiente'}</button>
        </div>
      );
    }
  }
export default Form