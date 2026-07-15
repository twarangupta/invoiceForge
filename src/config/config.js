require("dotenv").config()

const requiredVariables = ["PORT","DB_URI"]

requiredVariables.forEach((key)=>{
    if (!process.env[key]){
        throw new Error(`${key} variable missing in env`)
        
    }
})

const config = {
    port: process.env.PORT,
    dbUri: process.env.DB_URI
}

module.exports = config