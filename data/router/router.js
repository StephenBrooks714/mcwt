const express = require("express");
const router = express.Router();
const cache = require("./config/cache");

const homeController = require('../controllers/pages/homePage');
const aboutController = require('../controllers/pages/aboutPage');
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
// events
const newEventFormController = require('../controllers/pages/newEventPage');
const storeEventController = require('../controllers/pages/storeEventData');
const eventsController = require('../controllers/pages/eventsPage');
const deleteEventController = require('../controllers/pages/deleteEventData');
// gallery
const newGalleryController = require('../controllers/pages/newGalleryPage');
const storeGalleryController = require('../controllers/pages/storeImages');
const galleryController = require('../controllers/pages/gallleryPage');
const deleteGalleryController = require('../controllers/pages/deleteImage');
// privacy policy and terms pages
const privacyPolicyController = require('../controllers/pages/privacyPolicyPage');
const termsController = require('../controllers/pages/termsPage');
// sponsorship
const sponsorController = require('../controllers/pages/sponsorPage');

// middleware
let auth = require("./middleware/ifAdminUser");

router.get('/', cache(2), homeController);
router.get("/about", cache(2), aboutController);
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
//events
router.get("/newEvent", auth, newEventFormController);
router.post("/store/event", storeEventController);
router.get("/delete/event/:id", deleteEventController);
router.get("/events", cache(2), eventsController);
// gallery
router.get("/newImages", auth, newGalleryController);
router.post("/store/gallery", storeGalleryController);
router.get("/delete/gallery/:id", deleteGalleryController);
router.get("/gallery", cache(2), galleryController);
// privacy policy and terms pages
router.get("/privacyPolicy", privacyPolicyController);
router.get("/terms", termsController);
// sponsorship
router.get("/sponsor", sponsorController);

module.exports = router