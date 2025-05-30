import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const allContacts = await getAllContacts();
    const allContactsArr = JSON.parse(allContacts);
    const numberOfContacts = allContactsArr.length;
    return numberOfContacts;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
