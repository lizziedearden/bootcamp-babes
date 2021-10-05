import React from 'react';
import WishlistCard from './WishlistCard';
import axios from 'axios';

export default class Wishlist extends React.Component {
    
    render() {
        return (
            <div>
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                        {this.props.wishlist.map(wish =>
                            <div class="card card-body" >
                                <WishlistCard id={wish.id} name={wish.name} rating={wish.rating} description={wish.description} 
                                category={wish.category} subcategory={wish.subcategory} deadline={wish.deadline}
                                cost={wish.cost} location={wish.location} place={wish.place} spacesAvailable={wish.spacesAvailable}
                                 signUpThrough={wish.signUpThrough}/>
                            </div>)}
                    </div>
                </div>
            </div>
        )
    }





//     constructor(props){
//         super(props);

//         this.state = {
//             id: '',
//             wishlist: []
//             }
//     }

//     handleChange = event => {
//         this.setState({ id: event.target.value });
//     }

//     handleSubmit = event => {
//         event.preventDefault();
    
//         axios.get(`http://localhost:8081/api/wishlist/${this.state.id}`)
//             .then(res => {
//                 const wishlist = res.data;
//                 this.setState({wishlist})
//             })
//             .then(() => {
//                 this.state = {
//                     id: '',
//                     wishlst:[]
//             }
//             })
//         }
  
//     render() {
//     return (
//         <div>
//             <div class="col">
//                 <div class="collapse multi-collapse" id="multiCollapseExample2">
//                     <div class="card card-body">
//                     <form onSubmit={this.handleSubmit}>
//                         <label>
//                             User ID:
//                             <input type="text" name="id" onChange={this.handleChange} />
//                         </label>
//                         <button type="submit">Get User Wishlist</button>
//                     </form>
//                     <WishlistCard wishlist={this.state.wishlist} />
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )}
}