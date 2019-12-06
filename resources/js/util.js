/**
 * クッキーの値を取得する、SPAでのCSRF対策をする
 */

 export function getCookie (searchKey) {
   if (typeof searchKey === 'undefined') {
     return ''
   }

   let val = ''
   let cookieData = document.cookie.split(';')

   cookieData.forEach(cookie => {
     const [key, value] = cookie.split('=')
     if (key === searchKey) {
       return val = value
     }
   })

   return val
 }