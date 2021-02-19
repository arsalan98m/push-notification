
import firebase from "./firebase";


function App() {

  const messaging = firebase.messaging();

  messaging.requestPermission() .then(()=>{
    return messaging.getToken()
  }).then((token)=>{
    console.log("token=>",token);
    prompt("token=>",token);
  }).catch((error)=>{
    console.log("error=>",error);
  });

  return (
    <div className="App">
      let we go
    </div>
  );
}

export default App;
