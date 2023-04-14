import { isExpired, decodeToken } from "react-jwt";
import { encrypt,decrypt } from "./crypto";
import jwt_decode from "jwt-decode";


export const getToken = (data)=>{
    const endpoint = "http://localhost:8000/auth2/api/token/"
    let token = {}
    fetch(String(endpoint),
      {
        method:"POST",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify({"username":data.username,"password":data.password})
      }
    )
    .then(data=>{
        return data.json()
    })
    .then((response)=>{
        if (response.access && response.refresh){
            localStorage.setItem("token",encrypt(response))
            document.cookie = `JSSESSIONID=${encrypt(response)}`
        }

        return token
    })

    return token.access
}


export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}


export function isTokenExpired(token) {
  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now().valueOf() / 1000;
    if (decoded.exp < currentTime) {
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
    return true;
  }
}

export function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function logout(){

  deleteCookie("JSSESSIONID");
  return document.location.assign("/auth/login");

}


export function deleteAllCookies() {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookieName = cookies[i].split('=')[0];
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  window.location.href = '/';
}
