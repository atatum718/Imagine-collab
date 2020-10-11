import React from "react"
import "../Share/share-screen.css"
import facebook from "../Share/imgs/facebook.png"
import logo from "../Share/imgs/Imgine_logo_neon_1.png"
import twitter from "../Share/imgs/twitter.png"
import Social from  "../Share/share components/Social"



class share {
    socialMedia = [
        
        {
            img : facebook,
            id: 1,
        },
        {
            
            img: twitter,
            id: 2,

        }
        
    ]
    render (){


        return (
            <div>
                <div>{logo}</div>
            <div>
                <button />
                {this.socialMedia.map((social)=>{
                <Social social={social}/>
            })}</div>
    
            </div>
        )
    }


}
export default Share