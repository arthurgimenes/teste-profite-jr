
const json = require('../product')

const jsonFile = () =>{
    return {
        all : () =>{
            return new Promise((resolve , reject)=>{
                resolve({data : json.data})
            })
        }
    }
}

module.exports = jsonFile