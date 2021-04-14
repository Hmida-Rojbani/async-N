console.log('Begin')

getData('url' , function (data) {
    concat(data, function(data){
        console.log('Data: ', data)
    })
})


console.log('end')


function getData(url,callback){
    setTimeout(() =>{
        console.log('Read form DB')
        // call function 
        var data = 'GLSI'
        callback(data)
    },2000)
    
}

function concat(data,callback) {
    setTimeout(()=> {
        console.log('Concating')
        callback( data + '-N')
    },2000)
    
}