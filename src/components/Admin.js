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
        firebase.db.collection('requests').doc(number.toString()).update({status:'resolved'})
        let newAwry=[...this.state.cases]
        newAwry.splice(index,1)
        console.log(index,'index')
        console.log(newAwry,'<---newAwry')
        this.setState({
            cases:newAwry
        })

    }
    seeStatus=()=>{
        
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
        
    }

   
    render() {
        console.log(this.state.cases,'<=-this.state.cases')

   
      return (
        <div>
            
        <h1>What are the unresolved cases?</h1>
        
        <input id="uniqueStatus" placeholder="status"/>

        <button onClick={()=>{this.seeStatus()}}>See status</button>
        
        {this.state.cases
            ?this.state.cases.map((article,index)=><><h1>{article.docid}</h1>
                                                    <h2>{article.contactInfo}</h2>
                                                    <h2>{article.descriptionOfNeeds}</h2>
                                                    <button onClick={()=>{this.markAsResolved(article.docid,index)}}>Mark as resolved</button>
                                                    
                                                    
                                                    </>)
            :undefined}
        </div>
      );
    }
  }
const Admin=withRouter(withFirebase(AdminBase))
  export default Admin