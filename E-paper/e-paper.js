let data=[{
    Img:"https://epaper.deccanherald.com/img/1.svg",
    Head:"NEWSPAPER REPLICA",
    Desc:"Read an exact copy of Deccan Herald newspaper, anytime and  anywhere"
},
{
    Img:"https://d3qg08nn1tv4qm.cloudfront.net/img/6.svg",
    Head:"VIDEOS & PODCASTS",
    Desc:"Watch videos/listen to podcasts to get more details than the newspaper offers"
},
{
    Img:"https://d3qg08nn1tv4qm.cloudfront.net/img/4.svg",
    Head:"SEARCH",
    Desc:"You can search for news on the topic of your interest"
},
{
    Img:"https://d3qg08nn1tv4qm.cloudfront.net/img/2.svg",
    Head:"MOST POPULAR",
    Desc:" In one click, browse through most viewed, most downloaded or shared news of the day"
},
{
    Img:"https://d3qg08nn1tv4qm.cloudfront.net/img/3.svg",
    Head:"LISTEN TO NEWS",
    Desc:"Give your eyes some rest and listen to news"
},
{
    Img:"https://d3qg08nn1tv4qm.cloudfront.net/img/5.svg",
    Head:"Archive",
    Desc:"Read yesterday’s newspaper or any older newspaper by just selecting the date"
}
]
let append=(data)=>{
    let container=document.getElementById('he_last_box')
    data.forEach((el)=>{
        let div=document.createElement('div')
        let img=document.createElement('img')
        img.src=el.Img
        let heading=document.createElement('p')
        heading.setAttribute('class','he_heading')
        heading.innerText=el.Head
        let desc=document.createElement('p')
        desc.innerText=el.Desc
        
        div.append(img,heading,desc)
        container.append(div)
    })
}
append(data)
let signup_=()=>{
    console.log('hii')
    document.getElementById('login_input').innerHTML=`<input type="text" id="he_name" placeholder="Name" class="he_input_1">
    <input type="text" id="he_email_1" placeholder="Email ID" class="he_input_1">
    <input type="text" id="he_phone" placeholder="Phone No." class="he_input_1">
    <input type="text" id="he_username" placeholder="User Name" class="he_input_1">
    <input type="password" name="" id="he_password_1" placeholder="Password" class="he_input_1">
    <input type="text" id="he_desc" placeholder="Profession" class="he_input_1">`

    document.getElementById('button').innerHTML=`<button onclick="signup()" id="he_button_2" class='he_button'>SIGNUP</button>`
}

let login_=()=>{
    window.location.reload()
}

let x=(id)=>{
    return document.getElementById(id).value
}

async function signup(){
    let signup_data={
        name:x('he_name'),
        email:x('he_email_1'),
        mobile:x('he_phone'),
        username:x('he_username'),
        password:x('he_password_1'),
        description:x('he_desc'),
    }
    console.log(signup_data)
signup_data=JSON.stringify(signup_data)
let signup_link='https://masai-api-mocker.herokuapp.com/auth/register'
let response= await fetch(signup_link,{
    method:'POST',
    body:signup_data,
    headers:{
        'Content-Type':'application/json'
    },
})
let data=await response.json()
if(data.error==false){
    alert('signup success')
    window.location.reload()
}else{
    alert('signup fail')
}
}


function login(){
    let login_data={
            username:x('he_user'),
            password:x('he_password_login')
        }
    let signup_link='https://masai-api-mocker.herokuapp.com/auth/login'

    fetch(signup_link,{
        method:'POST',
        body:JSON.stringify(login_data),
        headers:{
            'Content-Type':'application/json'
        },
    }).then((res)=>{
        return res.json()
    })
    .then((res) =>{
        console.log(res)
        getmyprofile(res,login_data)
    })
    .catch((err) =>{
        console.log(err)
    })
} 
   function getmyprofile({token},{username}){
    let link=`https://masai-api-mocker.herokuapp.com/user/${username}`
     fetch(link,{
        headers:{
            Authorization: `Bearer ${token}`
        }
     })
     .then((res) =>{
        return res.json()
     })
     .then((res) =>{
console.log(res)
       alert(`login success Welcome!! ${res.username}`)
       localStorage.setItem('username',JSON.stringify(res.username))
       localStorage.setItem('useremail',JSON.stringify(res.email))
     })
     .catch((err) =>{
        console.log(err.message);
     });
   }
