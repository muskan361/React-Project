// import logo from './logo.svg';
// import './App.css';
import Nav from './Navbar.js';
import Card from './Card.js'

function App() {

const data=[

  {
    title:"Essence Mascara Lash Princess",
    describe:"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    Image:"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  
  },

  {
    title:"Eyeshadow Palette with Mirror",
    describe:"The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    Image:"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },

  {
    title:"Powder Canister",
    describe:"The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    Image:"https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
  },
]

  return (
    <div> 

     {
      data.map{
        (ele)=>{
          return(
            <Card title={ele.title} desc={ele.describe} imgAdd={ele.image}/> )
        }
      }
    }

   </div>
   
  );
}

export default App;
