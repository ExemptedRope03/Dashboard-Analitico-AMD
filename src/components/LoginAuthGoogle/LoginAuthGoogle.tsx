import axios from "axios";
import { useEffect, useState } from "react";
import { ExchangeGoogleToken } from "../../services/ExchangeGoogleToken";
import { error } from "console";


export const LoginAuthGoogle = () => {

    const dataJson = localStorage.getItem('GoogleCredentials');
    const data = dataJson ? JSON.parse(dataJson) : null;
    const [googleCredentials, setGoogleCredentials] = useState(data? data:{
        clientId:"",
        clientSecret:"",
        redirectUri:"",
    });
    
    

    const handleInputsChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target;
        setGoogleCredentials({
            ...googleCredentials,
            [name]:value
        })
    } 

    const handleAuthClick = () => {
        const AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth?' +
        'response_type=code' +
        `&client_id=${googleCredentials.clientId}` +
        `&redirect_uri=${googleCredentials.redirectUri}` +
        '&scope=https://www.googleapis.com/auth/adwords';
        localStorage.setItem('GoogleCredentials', JSON.stringify(googleCredentials));
        window.location.href = AUTH_URL;
        
    };

    const exchangeCodeForToken = async (authCode: string) => {
        const response = ExchangeGoogleToken(authCode,googleCredentials.clientId,googleCredentials.clientSecret,googleCredentials.redirectUri);
        response.then(result =>{
            console.log(result)
            localStorage.setItem('GoogleToken', result.access_token);
        }).catch(error => {
            console.error(error);
        })
        
    };

    useEffect(() => {
        const handleAuth = () => {
          const urlParams = new URLSearchParams(window.location.search);
          const authCode = urlParams.get('code');
          
          if (authCode) {
            // Ahora puedes enviar el código de autorización a tu backend para intercambiarlo por un token
            console.log("Codigo de stepper ", authCode);
            console.log("Exchange -token");
            exchangeCodeForToken(authCode);
            
          }
        };
        if(!localStorage.getItem('GoogleToken')){
           handleAuth(); 
        }
        
      }, []);

    return(
        <div>

        <div>
            <p>Google client_id</p>
            <input name="clientId" value={googleCredentials.clientId} onChange={handleInputsChange}></input>
            <p>Google client_secret</p>
            <input name="clientSecret" value={googleCredentials.clientSecret} onChange={handleInputsChange}></input>
            <p>Google redirect_uri</p>
            <input name="redirectUri" value={googleCredentials.redirectUri} onChange={handleInputsChange}></input>
        </div>
        <button onClick={handleAuthClick}>Google auth</button>
        {localStorage.getItem('GoogleToken') ? (
            <p>Estas Logueado</p>
        ):(<></>)}

        </div>
    
    );
}