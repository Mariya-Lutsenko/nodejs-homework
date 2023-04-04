const express = require("express");

const ctrl = require("../../controllers/contacts-controllers");

const { validateBody } = require("../../utils");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getListContacts);

router.get("/:contactId", ctrl.getContactId);

router.post("/", validateBody(schemas.addSchema), ctrl.addNewContact);

router.delete("/:contactId", ctrl.removeContactById);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

module.exports = router;