export function equalsObsjects(object1: any, object2: any) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let resp: boolean = true;
  for (let key1 of keys1) {
    for (let key2 of keys2) {
      if (object1[key1] === object2[key2] && key1 === key2) {
        resp = true;
        break;
      } else {
        resp = false;
      }
    }
    if (!resp) {
      return false;
    }
  }
  return resp;
}
