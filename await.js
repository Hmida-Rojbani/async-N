console.log('Begin')

handleDB('0')

console.log('end')

async function handleDB(url) {
    try {
        var data = await getData(url);
        var concated = await concat(data);
        console.log(concated)
    } catch (error) {
        console.log('Error :',error)
    }
    
    
}


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