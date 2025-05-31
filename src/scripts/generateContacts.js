import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const data = await readContacts();
    let existingContacts = [];
    if (data) {
      existingContacts = data;
    }
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const allContacts = [...existingContacts, ...newContacts];
    await writeContacts(JSON.stringify(allContacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
