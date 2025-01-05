const express = require("express");
const router = express.Router();
const cache = require("./config/cache");

const homeController = require('../controllers/pages/homePage');
// users
const registerController = require('../controllers/users/registerPage');
const loginUserController = require('../controllers/users/loginUser');
const storeUserController = require('../controllers/users/storeUser');
const deleteUserController = require('../controllers/users/deleteUser');
const loginController = require('../controllers/users/loginPage');
const updateUserController = require('../controllers/users/updateUser');
const logoutUserController = require('../controllers/users/logoutUser');
const profileController = require('../controllers/users/userProfile');
// admin
const adminController = require("../controllers/admin/adminPage")
// contact form update
const newContactFormController = require('../controllers/forms/newCintactPage');
const storeContactFormController = require('../controllers/forms/storeContactForm');
const deleteContactController = require('../controllers/forms/deleteContactInfo');
const sendContactFormController = require('../controllers/forms/sendContactForm');

// middleware
let auth = require("./middleware/ifAdminUser");

router.get('/', cache(2), homeController);
// users
router.get('/register', registerController);
router.post('/store/user', storeUserController);
router.get('/login', loginController);
router.post('/login/user', loginUserController);
router.get('/logout', logoutUserController);
router.put('/user/:id', updateUserController);
router.get('/delete/user/:id', deleteUserController);
router.get("/profile/:id", profileController);
// admin
router.get("/admin", auth, adminController);
// contact update
router.get('/newContact', newContactFormController);
router.post('/store/contact', storeContactFormController);
router.get('/delete/contact/:id', deleteContactController);
router.post("/send/form", sendContactFormController);

module.exports = router