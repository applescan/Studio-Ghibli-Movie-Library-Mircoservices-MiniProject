let DBServices = require('../services/dbServices.js')

const insertUni = async (req, res) => {

    let data = await DBServices.insertUni(req, res)
    console.log(data)
    res.send(data)

}

const insertUniUSA = async (req, res) => {

    let data = await DBServices.insertUniUSA(req, res)
    console.log(data)
    res.send(data)

}

const insertUniJP = async (req, res) => {

    let data = await DBServices.insertUniJP(req, res)
    console.log(data)
    res.send(data)

}

module.exports = {
    insertUni,
    insertUniUSA,
    insertUniJP
}