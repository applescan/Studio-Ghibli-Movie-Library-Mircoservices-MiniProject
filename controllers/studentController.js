let DBServices = require('../services/dbServices.js')

const getAllStudents = async (req, res) => {

    let data = await DBServices.getAllStudents(req, res)
    console.log(data)
    res.send(data)

}

const getStudentID = async (req, res) => {

    let data = await DBServices.getStudentID(req, res)
    console.log(data)
    res.send(data)

}

const deleteStudentID = async (req, res) => {

    let data = await DBServices.deleteStudentID(req, res)
    console.log(data)
    res.send(data)

}

const getStudentCity = async (req, res) => {

    let data = await DBServices.getStudentCity(req, res)
    console.log(data)
    res.send(data)

}

const updateStudent = async (req, res) => {

    let data = await DBServices.updateStudent(req, res)
    console.log(data)
    res.send(data)

}

const insertStudent = async (req, res) => {

    let data = await DBServices.insertStudent(req, res)
    console.log(data)
    res.send(data)

}

module.exports = {
    getAllStudents,
    getStudentID,
    deleteStudentID,
    getStudentCity,
    updateStudent,
    insertStudent
}

//to get the data from dbservices