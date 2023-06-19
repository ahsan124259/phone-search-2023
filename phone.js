const loadPhones=(searchText,dataLimit)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.data,dataLimit))

}
const displayData=(phones,dataLimit)=>{
    const mainContainer=document.getElementById('main-container');
    mainContainer.textContent='';
    const showAll=document.getElementById('show-button');
  if(dataLimit&&phones.length>5){
    phones=phones.slice(0,5)
    showAll.classList.remove('d-none')
}else{
    showAll.classList.add('d-none')
}
    
  const noPhone=document.getElementById('no-phone-found')
  if(phones.length===0){
    noPhone.classList.remove('d-none')
  }else{
    noPhone.classList.add('d-none')
  }
    phones.forEach(phone => {
    const phoneDiv=document.createElement('div')
    phoneDiv.classList.add('col')
    phoneDiv.innerHTML=`
                <div class="card">
                    <img src=${phone.image} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
    
    `;
    mainContainer.appendChild(phoneDiv)
 });
 toggleSpiner(false)

}

document.getElementById('search-button').addEventListener('click',function(){
    
    processSearch(5);
    searchField.value='';
   
    // toggleSpiner(true)
    // const searchField=document.getElementById('seaech-field')
    // const searchText=searchField.value;
    // loadPhones(searchText);
    // searchField.value=''

})
const toggleSpiner=(isLoadding)=>{
    const loaderSpiner=document.getElementById('loader')
    if(isLoadding){
        loaderSpiner.classList.remove('d-none')
    }else{
        loaderSpiner.classList.add('d-none')
    }
}
document.getElementById('button-show-all').addEventListener('click',function(){
    processSearch()
    
})
const processSearch=(dataLimit)=>{
    toggleSpiner(true)
    const searchField=document.getElementById('seaech-field')
    const searchText=searchField.value;
    loadPhones(searchText,dataLimit);
    // searchField.value='';
    
}

loadPhones()