const useCases = require('../use-cases/index');

const makeGetUsers = require("./get-users-controller");
const getUsers = makeGetUsers({getUsers: useCases.getUsers});

const makeAddUser = require("./add-user-controller");
const addUser = makeAddUser({addUser: useCases.addUser});

const makeUpdateUser = require("./update-user-controller");
const updateUser = makeUpdateUser({updateUser: useCases.updateUser});

const makeGetUserById = require("./get-userById-controller");
const getUserByIdHandler = makeGetUserById({getUserById: useCases.getUserById});

const makeDeleteUser = require("./delete-user-controller");
const deleteUserHandler = makeDeleteUser({deleteUser: useCases.deleteUser});

const { addJob } = require('../bull-queue/queue');

const makeEmail = require("./email-job-controller");
const Emailsending = makeEmail({ addJob });

const makeSendOTP = require("./sending-OTP-contoller");
const OtpSending = makeSendOTP({addJob});



const makeReportGenerate = require("./report-generate-controller");
const GenerateReport = makeReportGenerate({addJob});


const userController = Object.freeze({ 
  getUsers, 
  getUserByIdHandler, 
  addUser,
  updateUser,
  deleteUserHandler,
  Emailsending,
  OtpSending,
  GenerateReport
});

module.exports = userController;
 