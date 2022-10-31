const token = '5605812870:AAF_RNkCcCYnxxxVz6oJW61f_NoMBx5hTvM'
const chatId = '946142079'
const form = document.querySelector('.form')
const inputValue  = form.querySelector('.input')
const inputValue2  = form.querySelector('.input2')
const inputValue3  = form.querySelector('.input3')
const senBtn = form.querySelector('.button')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let message = `${inputValue.value}`
    let message2 = `${inputValue2.value}`
    let message3 = `${inputValue3.value}`
    inputValue.value = ''
    inputValue2.value = ''
    inputValue3.value = ''
    sendMessage(message)
    sendMessage2(message2)
    sendMessage3(message3)
})  
function sendMessage(msg){
 let promise = new Promise((resolve,reject)=>{
     const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${msg}`
     fetch (url).then(data => data.json()).then(info => resolve(info))
 })
 promise.then(info => console.log(info))
 promise.catch(console.error())
} 
function sendMessage2(msg2){
    let promise = new Promise((resolve,reject)=>{
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${msg2}`
        fetch (url).then(data => data.json()).then(info => resolve(info))
    })
    promise.then(info => console.log(info))
    promise.catch(console.error())
   } 
   function sendMessage3(msg3){
    let promise = new Promise((resolve,reject)=>{
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${msg3}`
        fetch (url).then(data => data.json()).then(info => resolve(info))
    })
    promise.then(info => console.log(info))
    promise.catch(console.error())
   }
