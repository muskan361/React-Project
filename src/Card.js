import Card from './Card.css'
function Card(props){

  console.log(props.title);
  console.log(props.desc);
  console.log(props.imgAdd);
  return(
  <div class="card-container">
    <div class="card">
      <div class="card-body">
        <img src={props.imgAdd} alt="card Image" class="card-img-top"/>
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.desc}</p>
      </div>
    </div>
    
  </div>
  );
} 
export default Card;