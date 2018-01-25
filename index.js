var http=require("http");
var fs=require("fs");

var port=8000;
var hostName='127.0.0.1';
var state=10;

var server=http.createServer(function(req,res){
    console.log("you are connected to the server!");
    if (req.method === "GET"){
        if(req.url === '/'){
            fs.readFile(process.cwd()+'\\views/state.html',function(err, data){
                if(err){
                    console.log(err);
                    
                }
                else{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    console.log(data.toString());
                    
                      var toPrepand = `<script>
                       document.getElementById("state").innerHTML = <h1>${state}</h1>
                        </script>`;
                    String(data);
                    console.log(data);
                     data=  data.toString().replace( /state/g, toPrepand );
                    
                    res.write(data);
                    res.end();
                    
                }
                
            })
        }
        else if(req.url === '/add'){
            fs.readFile(process.cwd()+'\\views/add.html',function(err, data){
                if(err){
                    console.log(err);
                    
                }
                else{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    console.log(data.toString());
                    state++;
                      var toPrepand = `<script>
                       document.getElementById("state").innerHTML = <h1>${state}</h1>
                        </script>`;
                    String(data);
                    console.log(data);
                     data=  data.toString().replace( /state/g, toPrepand );
                    
                    res.write(data);
                    res.end();
                    
                }
                
            })
        }
        else if(req.url === '/remove'){
            fs.readFile(process.cwd()+'\\views/remove.html',function(err, data){
                if(err){
                    console.log(err);
                    
                }
                else{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    console.log(data.toString());
                    state--;
                      var toPrepand = `<script>
                       document.getElementById("state").innerHTML = <h1>${state}</h1>
                        </script>`;
                    String(data);
                    console.log(data);
                     data=  data.toString().replace( /state/g, toPrepand );
                    
                    res.write(data);
                    res.end();
                    
                }
                
            })
        }
        else if(req.url === '/reset'){
            fs.readFile(process.cwd()+'\\views/reset.html',function(err, data){
                if(err){
                    console.log(err);
                    
                }
                else{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    console.log(data.toString());
                    state=10;
                      var toPrepand = `<script>
                       document.getElementById("state").innerHTML = <h1>${state}</h1>
                        </script>`;
                    String(data);
                    console.log(data);
                     data=  data.toString().replace( /state/g, toPrepand );
                    
                    res.write(data);
                    res.end();
                    
                }
                
            })
        }

    }        
});

server.listen(port,hostName);