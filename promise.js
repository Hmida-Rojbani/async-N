console.log('Begin')
getData('url').then(data =>  concat(data))
            .then(concated => console.log('Data :',concated))
            .catch(err=> console.log('Error : ',err))


console.log('end')
function getData(url){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
        console.log('Read form DB')
        // call function 
        if(url == '0')
            reject('Invalid URL')
        var data = 'GLSI'
        resolve(data)
    },2000)
    })
    
    
}

function concat(data) {
    return new Promise((resolve,reject )=>{
        setTimeout(()=> {
        console.log('Concating')
        resolve( data + '-N')
    },2000)
    })
    
    
}