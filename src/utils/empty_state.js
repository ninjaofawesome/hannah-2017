export function isEmpty(obj) {
  const value = Object.values(obj);
  console.log('object', obj);
  console.log('value', value.length);
  if (value.length === 0) {
    console.log('the array is empty');
    return true;
  }
  if (obj.length === 0) {
    console.log('the object is empty');
    return true;
  }
  if (value.length > 0) {
    console.log('the array is not empty');
    return false;
  }
  if (obj.length > 0) {
    console.log('the object is empty');
    return true;
  }
}
