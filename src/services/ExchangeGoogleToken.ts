import axios from "axios";

export const ExchangeGoogleToken = async (authCode: string,clientId:string,clientSecret:string,redirect_uri:string) => {
    console.log("au",authCode);
    console.log("clieId",clientId);
    console.log("clienSe",clientSecret);
    console.log("red",redirect_uri);
    const response = await axios.post('https://oauth2.googleapis.com/token', null, {
      params: {
        code: authCode,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      }
    });
    return response.data;
};