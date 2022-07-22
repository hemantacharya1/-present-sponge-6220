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