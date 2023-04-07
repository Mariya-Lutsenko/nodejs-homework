const express = require("express");

const ctrl = require("../../controllers/contacts-controllers");

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.getListContacts);

router.get("/:contactId", ctrl.getContactId);

router.post("/", validateBody(schemas.addSchema), ctrl.addNewContact);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateStatusSchema),
  ctrl.updateStatusContact
);

router.delete("/:contactId", ctrl.removeContactById);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

module.exports = router;
