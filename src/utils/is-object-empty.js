/**
 * 判断对象是否是空对象
 * @param {Object} obj 判断的对象
 * @returns 
 */
export function isEmpty(obj) {
  if (
    typeof obj !== "object" ||
    obj === null) {
    return true;
  }
  const keysLength = Object.keys(obj).length;
  return keysLength === 0;
}
