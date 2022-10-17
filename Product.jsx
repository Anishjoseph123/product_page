import React from "react";
import Cart from "./Cart";
import {TbShirt} from "react-icons/tb"
import {RiArrowDropDownLine} from "react-icons/ri"
import {BsTruck} from "react-icons/bs"
import {RiRulerLine} from "react-icons/ri"
import {VscHeart}from "react-icons/vsc"
const Product=()=>{
    return(
   <>
   <div id="main-sec">
        <div className="ladies-wear">
            <img src="https://rukminim1.flixcart.com/image/495/594/kp8ntzk0/dress/r/i/z/s-aa-0119-boho-long-dress-aayu-original-imag3ghzyktnj3bz.jpeg?q=50" alt="image1" />
            <img src="https://rukminim1.flixcart.com/image/495/594/kflftzk0/dress/n/c/d/l-one-piece-orrange-line-maa-fab-original-imafwyy3esacjzau.jpeg?q=50" alt="image2" />
            <img src="https://rukminim1.flixcart.com/image/495/594/kuwzssw0/kurta/e/t/n/s-jolly-shree-ramkrishna-fab-original-imag7xpnzndhervn.jpeg?q=50" alt="image3" />
            <img src="https://rukminim1.flixcart.com/image/495/594/xif0q/dress/z/e/h/m-gr5991-multi-harpa-original-imafutftght38gh6-bb.jpeg?q=50" alt="image4" />
        </div>
        <div id="right-side">
            <p style={{textTransform:'uppercase',color:'silver'}}>
        clothing company
            </p>
            <h1 style={{marginLeft:'20px',fontWeight:'bold'}}>
        Ruffled Sleeveless Top
            </h1>
            <span><s style={{color:'silver'}}>Rs.1500.00</s></span>
<span style={{marginLeft:'10px'}}><b>Rs.899.00</b></span>
<span style={{background:'black',borderRadius:'5px',color:'white',marginLeft:'6px',height:'30px',width:'30px'}}>Sale</span>
<p style={{color:'silver'}}>Size</p>
<div id="sizes">
    <button style={{marginLeft:'5px',borderRadius:'25px',height:'30px',width:'40px',backgroundColor:"white"}}>S</button>
    <button style={{background:'black',color:'white',borderRadius:'25px',marginLeft:'6px',height:'30px',width:'40px'}}>M</button>
    <button style={{marginLeft:'5px',borderRadius:'25px',height:'30px',width:'40px',backgroundColor:"white"}}>L</button>
    <button style={{marginLeft:'5px',borderRadius:'25px',height:'30px',width:'40px',backgroundColor:"white"}}>XL</button>
</div>
<p style={{marginTop:'8px',color:'silver'}}>Quantity</p>
<Cart/>
<button className="add">Add to Cart</button><br />
<button className="buy">Buy It Now</button>
<div className="paras">
    <p className="para1">
        A dreamy feminine piece,this top is made from a <br />
        medium weight,extra soft cotton blend with a light <br />
        airy feel and paper-like quality. 
    </p>
    <p className="para2">
        Designed with voluminous ruffled straps as well as <br />
        ruffle details across the chest,it has a straight cut <br />
        fit and a square neckline.
    </p>
</div>
<hr />
<div className="bottom-menu">
    <div className="materials">
    <TbShirt/> <h5 style={{marginRight:'365px',fontWeight:'bolder',fontSize:'18px'}}>Materials</h5>
    <RiArrowDropDownLine/>
    </div>
    <hr />
<div className="ship">
  <BsTruck/>  <h5 style={{marginRight:'268px',fontWeight:'bolder',fontSize:'18px'}}>Shipping & Returns</h5>
  <RiArrowDropDownLine/>
</div>
<hr />
<div className="dimensions">
  <RiRulerLine/>  <h5 style={{marginRight:'335px',fontWeight:'bolder',fontSize:'18px'}}>Dimensions</h5>
  <RiArrowDropDownLine/>
</div>
<hr />
<div className="care">
<VscHeart/>
    <h5 style={{marginRight:'300px',fontWeight:'bolder',fontSize:'18px'}}>Care Instructions</h5>
  <RiArrowDropDownLine/>
  <hr />
</div>
</div>
        </div>
        </div>
   </>
    )
}
export default Product;