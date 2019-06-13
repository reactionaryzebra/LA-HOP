import React from "react";
import Camera from './Camera'
import Map from './Map'
import styled from 'styled-components'
import FormOne from '../styles/FormOne'
import {withFirebase} from '../components/Firebase'
import {withRouter} from 'react-router-dom'
const necessities=['food','water','jacket','burn','clothing']




 
class AdminBase extends React.Component {
    state = {
        cases:[]
    }
    markAsResolved = (number,index)=>{
        const {firebase, history}=this.props
        const here = this
        firebase.db.collection('requests').doc(number.toString()).update({status:'contacted'})
        let newAwry=[...this.state.cases]
        newAwry.splice(index,1)
        console.log(index,'index')
        console.log(newAwry,'<---newAwry')
        this.setState({
            cases:newAwry
        })

    }
    markAsAssisted = (number,index)=>{
        const {firebase, history}=this.props
        const here = this
        firebase.db.collection('requests').doc(number.toString()).update({status:'contacted and assisted'})
        let newAwry=[...this.state.cases]
        newAwry.splice(index,1)
        console.log(index,'index')
        console.log(newAwry,'<---newAwry')
        this.setState({
            cases:newAwry
        })

    }

    markAsUnfound = (number,index)=>{
        const {firebase, history}=this.props
        const here = this
        firebase.db.collection('requests').doc(number.toString()).update({status:'unable to be found'})
        let newAwry=[...this.state.cases]
        newAwry.splice(index,1)
        console.log(index,'index')
        console.log(newAwry,'<---newAwry')
        this.setState({
            cases:newAwry
        })

    }
    seeStatus=()=>{
        if(document.getElementById('getPassword').value=="Justin1!"){
        
        const {firebase, history}=this.props
        const here = this
        firebase.db.collection('requests').where("status", "==", "pending")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                here.setState({cases: [...here.state.cases, {'docid':doc.id,'address':doc.data().address,'contactInfo': doc.data().contactInfo,'descriptionOfNeeds': doc.data().descriptionOfNeeds}] })
                // here.state.cases.push({'docid':doc.id,'address':doc.data().address})
                
                console.log(doc.data())
               
                
                console.log(here.state,'<----here.state')

            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        
    }}
    componentDidMount(){
        console.log("Hrak... this ones for you")
    }

   
    render() {
        console.log(this.state.cases,'<=-this.state.cases')

   
      return (
        <div>
            
        <h1>What are the unresolved cases?</h1>
        
        <input type="password" id="getPassword" placeholder="Password"/>

        <button onClick={()=>{this.seeStatus()}}>See status</button>
        
        {this.state.cases
            ?this.state.cases.map((article,index)=><><h4>{article.docid}</h4>
                                                    <h4>{article.contactInfo}</h4>
                                                    <h4>{article.descriptionOfNeeds}</h4>
                                                    <button onClick={()=>{this.markAsResolved(article.docid,index)}}>Contacted</button>
                                                    <button onClick={()=>{this.markAsAssisted(article.docid,index)}}>Assisted</button>
                                                    <button onClick={()=>{this.markAsUnfound(article.docid,index)}}>Unfound</button>
                                                    
                                                    
                                                    </>)
            :undefined}
        </div>
      );
    }
  }
const Admin=withRouter(withFirebase(AdminBase))
  export default Admin