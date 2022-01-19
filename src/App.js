import {Data, MyImage, ActionAlert} from './profile/Profile';

function App() {
  const myStyle = {color:'#ff0063', fontSize: 15, fontWeight: 400, 
    backgroundColor: "#282c34", textAlign: "center", border:"solid 6px #ff5722"};
  const handleName = e => {
    e.preventDefault();
    alert("Othman Stambouli");
  };
  return (
    <>
    <header style={myStyle}>
      <Data fullName ="Othman Stambouli" bio ="29 years old and I love Mcdonalds" profession="Special Ops"></Data>
      <MyImage>picture</MyImage>
      <br></br>
      <ActionAlert handleName={handleName}></ActionAlert>
    </header>
    </>
  );
}

export default App;