import { EncryptStorage } from "encrypt-storage";

function initialize() {
  return new EncryptStorage('RANDOMGENERATEDKEY');
//   return new EncryptStorage(process.env.STORAGE_KEY);
}

function save(objectName, values) {
  const encryptStorage = initialize();
  encryptStorage.setItem(objectName, JSON.stringify(values));
}

function get(objectName) {
  const encryptStorage = initialize();
  return encryptStorage.getItem(objectName);
}

function remove(objectName) {
  const encryptStorage = initialize();
  return encryptStorage.removeItem(objectName);
}

export default { save, get, remove };
