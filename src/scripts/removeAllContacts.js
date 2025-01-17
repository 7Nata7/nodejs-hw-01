import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
  } catch (error) {
    console.error('Error while removing all contacts:', error);
  }
};

removeAllContacts();