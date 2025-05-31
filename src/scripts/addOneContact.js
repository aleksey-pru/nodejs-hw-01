import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const data = await readContacts();
    let existingContacts = [];
    if (data) {
      existingContacts = data;
    }
    const newContacts = createFakeContact();
    const allContacts = [...existingContacts, newContacts];
    await writeContacts(JSON.stringify(allContacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
