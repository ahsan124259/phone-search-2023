const loadPhones=(searchText)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.data))

}
const displayData=(phones)=>{
    const mainContainer=document.getElementById('main-container');
    mainContainer.textContent='';
    
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
    toggleSpiner(true)
    const searchField=document.getElementById('seaech-field')
    const searchText=searchField.value;
    loadPhones(searchText);
    searchField.value=''

})
const toggleSpiner=(isLoadding)=>{
    const loaderSpiner=document.getElementById('loader')
    if(isLoadding){
        loaderSpiner.classList.remove('d-none')
    }else{
        loaderSpiner.classList.add('d-none')
    }
}


loadPhones()