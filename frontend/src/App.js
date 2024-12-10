import logo from './logo.svg';
import './App.css';

function App() {
  return (
    React.useEffect(() => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
        anchor.addEventListener("click", function (e){
          e.preventDefault();
    
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          })
        })
      })
    }, [])
  );
}

export default App;
