import React from "react";
import Webcam from "react-webcam";
import download from "downloadjs" ;
import {withFirebase} from '../components/Firebase'
// import firebase from './Firebase' 
// import '@firebase/firestore'
 
class CameraBase extends React.Component {
    setRef = webcam => {
      this.webcam = webcam;
    };

   
    capture = () => {
        const {firebase} = this.props
      const imageSrc = this.webcam.getScreenshot();
      //console.log(imageSrc)
      //const newImage = new Blob(imageSrc)
      /*const byteCharacters = atob(imageSrc);
      const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {type: 'image/gif'});
        var docRef = firebase.storage.ref().child('homeless.gif');
        var file = blob // use the Blob or File API
docRef.put(file).then(function(snapshot) {
  console.log('Uploaded a blob or file!');
});*/
/*var img_b64 = imageSrc.toDataURL('image/png');
var png = img_b64.split(',')[1];

var the_file = new Blob([window.atob(png)],  {type: 'image/png', encoding: 'utf-8'});

var fr = new FileReader();
fr.onload = function ( oFREvent ) {
    var v = oFREvent.target.result.split(',')[1]; // encoding is messed up here, so we fix it
    v = atob(v);
    var good_b64 = btoa(decodeURIComponent(escape(v)));
    document.getElementById("uploadPreview").src = "data:image/png;base64," + good_b64;
};
fr.readAsDataURL(the_file);*/
      const idk=download(imageSrc,'homeless.gif','image/gif')
      
      this.props.pushImgUp(imageSrc)
    };
   
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
   
      return (
        <div>
          <Webcam
            audio={false}
            height={250}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
          
          <button onClick={this.capture}>Capture photo</button>
        </div>
      );
    }
  }

const Camera = withFirebase(CameraBase)
export default Camera
