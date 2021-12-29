import React,{useEffect,useState} from 'react';
import axios from 'axios';
const PAGE_ID = "105201545371759";
function OverView(props) {
    const fbPageAccessToken = localStorage.getItem("accessPageToken")
    const [pageName,setPageName] = useState({})
    useEffect(()=>{
        const fetchInfoPage= async ()=>{
          const config = {
              url:`https://graph.facebook.com/v12.0/me?access_token=${fbPageAccessToken}`,
              method: 'GET',
          }
             let res = await axios(config)
             setPageName(res.data)

     }
     fetchInfoPage()
       },[fbPageAccessToken])
    return (
        <div>
            <h1>OverView with luv page:{pageName.name}</h1>

        </div>
    );
}

export default OverView;