import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    const parsedData = JSON.parse(data);
    if (parsedData.length > 0) {
      const removedContact = parsedData.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf-8');
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
