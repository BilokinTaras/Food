const postData = async (url, data) => {
   const res = await fetch(url, {
      method: "POST", 
      //headers -- если отправляем json данные
      headers: {
         'Content-type': 'application/json'
      },
      body: data
   });
   return await res.json();
}; 

//ES8(async, await)
//async используется в функциях перед переменнимы там где должен использоваться await
//await в данном случае используется чтобы сработал fetch запрос он может быть
//до 10 30 и больше секунд, и await говорит функции не присваивай к переменной res,
// пока не прийдет результат Fetch. Также и с res.json();
async function getResource(url) {
      let res = await fetch(url);

      if(!res.ok){
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }
      return await res.json();
}; 


export {postData};
export {getResource};