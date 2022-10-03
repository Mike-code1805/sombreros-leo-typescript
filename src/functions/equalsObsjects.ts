export function equalsObsjects(object1: any, object2: any) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let resp: boolean = true;
  let keyTest = '';
  for (let key1 of keys1) {
    for (let key2 of keys2) {
      if (object1[key1] == object2[key2] || key1 == key2) {
        resp = true;
        keyTest = key1;
        console.log('exist');
        console.log(key1);
        break;
      } else {
        console.log('not exist');
        console.log(key1);
        resp = false;
        keyTest = key1;
      }
    }
    if (!resp) {
      console.log({keyTest});
      return false;
    }
  }
  return resp;
}
