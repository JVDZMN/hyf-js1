    
const url='https://api.github.com/orgs/HackYourFuture/repos';
const request=new XMLHttpRequest();
const myUl=document.querySelector("#myUl");


                        
request.addEventListener('load',function(data){
                         if(this.status === 200){
                                                  const responseText=request.responseText;
                                                   var dataApi= JSON.parse(responseText);
                                                  console.log(dataApi);
                             dataApi.forEach(function(d){
                                 let myLi=document.createElement("li");
                                 let nameText=document.createTextNode(d.name);
                                 myLi.appendChild(nameText);
                                 myUl.appendChild(myLi);
                             });
                                                 }
                                               });
                                                  
                        


request.open('GET',url);
request.send();


