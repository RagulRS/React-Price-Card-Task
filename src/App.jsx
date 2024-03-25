
import './App.css'

function App() {
  

  const free = {
    type: "FREE",
    price:{
      value:0,
      style: "abled",
    },
    user:{
      value: "Single User",
      style: "abled",
    },
    storage: {
      value: 50,
      style: "abled",
    },
    public:{
      value: "Unlimited Public Projects",
      style: "abled",
    },
    access:{
      value: "Community Acess",
      style: "abled",
    },
    private:{
      value: "Unlimited Private Projects",
      style: "disabled"
    },
    support: {
      value: "Dedicated Phone Support",
      style: "disabled"
    },
    subdomain: {
      value: "Free Subdomain",
      style: "disabled"
    },
    status:{
      value: "Monthly Status Reports",
      style: "disabled"
    }

  }

  const plus = {
    type: "PLUS",
    price:{
      value:9,
      style: "abled",
    },
    user:{
      value: "5 Users",
      style: "abled",
    },
    storage: {
      value: 50,
      style: "abled",
    },
    public:{
      value: "Unlimited Public Projects",
      style: "abled",
    },
    access:{
      value: "Community Acess",
      style: "abled",
    },
    private:{
      value: "Unlimited Private Projects",
      style: "abled"
    },
    support: {
      value: "Dedicated Phone Support",
      style: "abled"
    },
    subdomain: {
      value: "Free Subdomain",
      style: "abled"
    },
    status:{
      value: "Monthly Status Reports",
      style: "disabled"
    }

  }

  const pro = {
    type: "PRO",
    price:{
      value:49,
      style: "abled",
    },
    user:{
      value: "Unlimited Users",
      style: "abled",
    },
    storage: {
      value: 50,
      style: "abled",
    },
    public:{
      value: "Unlimited Public Projects",
      style: "abled",
    },
    access:{
      value: "Community Acess",
      style: "abled",
    },
    private:{
      value: "Unlimited Private Projects",
      style: "abled"
    },
    support: {
      value: "Dedicated Phone Support",
      style: "abled"
    },
    subdomain: {
      value: "Free Subdomain",
      style: "abled"
    },
    status:{
      value: "Monthly Status Reports",
      style: "abled"
    }

  }

  return (

    <>
    <h1 id="heading">React Price Card</h1>
    <div className="main-container">
    
      <Card {...free} />
      <Card {...plus} />
      <Card {...pro} />
      
      </div>
      
      
    </>
  )
}

function Card(props){

  return(
    <>
    <div className='card'>
      <p id='head'>{props.type}</p>
      <h1 id="price">${props.price.value}/month</h1>
      <hr></hr>
      <br></br>
        <p className= {props.user.style} >{props.user.value}</p>
        <p className={props.storage.style}>{props.storage.value}GB Storage</p>
        <p className={props.public.style}>{props.public.value}</p>
        <p className={props.access.style}>{props.access.value}</p>
        <p className={props.private.style}>{props.private.value}</p>
        <p className={props.support.style}>{props.support.value}</p>
        <p className={props.subdomain.style}>{props.subdomain.value}</p>
        <p className={props.status.style}>{props.status.value}</p>

        <br></br>
        <button>Button</button>
      </div>

    </>
  );

}





















// function Card(){
//   return(
//     <>
    
//           <div className="card1">
//           <div class="card-header">
//                 <p>FREE</p>
//                 <h1>$0/month</h1>
//                 <hr></hr>
//             </div>
//             <div class="card-body">
//                <ul> <ul class='tick'>
//                     <p>Single User</p>
//                     <p>50GB Storage</p>
//                     <p>Unlimited Public Projects</p>
//                     <p>Community Access</p>
//                     </ul>
//                     <ul class = 'untick'>
//                     <p>Unlimited Private Projects</p>
//                     <p>Dedicated Phone support</p>
//                     <p>Free Subdomain</p>
//                     <p>Monthly Status Reports</p>
//                 </ul></ul>
                
//             </div>
//             <button className='btn'>BUTTON</button>
//           </div>
      
//       </>
//   );
// }


// function Card2(){
//   return(
//     <>
    
//           <div className="card2">
//           <div class="card-header">
//                 <p>PLUS</p>
//                 <h1>$9/month</h1>
//                 <hr></hr>
//             </div>
//             <div class="card-body">
//               <ul>
//                 <ul className='tick'>
//                     <p>5 Users</p>
//                     <p>50GB Storage</p>
//                     <p>Unlimited Public Projects</p>
//                     <p>Community Access</p>
//                     <p>Unlimited Private Projects</p>
//                     <p>Dedicated Phone support</p>
//                     <p>Free Subdomain</p>
//                     </ul>
//                     <ul class = 'untick'>
//                     <p> Monthly Status Reports</p>
//                 </ul>
//                 </ul>
                
//             </div>
//             <button className='btn'>BUTTON</button>
//           </div>
      
//       </>
//   );
// }

// function Card3(){
//   return(
//     <>
    
//           <div className="card3">
//           <div class="card-header">
//                 <p>PLUS</p>
//                 <h1>$49/month</h1>
//                 <hr></hr>
//             </div>
//             <div class="card-body">
//                 <ul className='tick2'>
//                     <p>Unlimited Users</p>
//                     <p>50GB Storage</p>
//                     <p>Unlimited Public Projects</p>
//                     <p>Community Access</p>
//                     <p>Unlimited Private Projects</p>
//                     <p>Dedicated Phone support</p>
//                     <p>Free Subdomain</p>
//                     <p>Monthly Status Reports</p>
//                 </ul>
                
//             </div>
//             <button className='btn-3'>BUTTON</button>
//           </div>
      
//       </>
//   );
// }
export default App
