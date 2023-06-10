import './style.css'

function App() {
  const calc=()=>{
    let a=document.getElementById('date').value.split("-");
    let b=new Date().getFullYear();
    document.getElementById('age').innerHTML="your age is "+(b-a[0])+" years old.";
  }
  return (
    <>
    <div id='contain'>
      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <input type="date" name="" id="date" /> <br />
      <button onClick={()=>{calc()}}>calculate age</button>
      <div id="age"></div>
    </div>
    </>
  );
}

export default App;
