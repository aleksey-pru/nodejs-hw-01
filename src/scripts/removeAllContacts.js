import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const data = [];
    const file = await fs.writeFile(
      PATH_DB,
      JSON.stringify(data, null, 2),
      'utf-8',
    );
    return file;
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
