/**
 * commonjs 是node支持的模块化
 */
// 1.commonjs模块化导出
let firstName = 'ren';
let lastName = 'terry';
module.exports.firstName = firstName;
module.exports.lastName = lastName;

// module.exports = {
//     firstName: firstName,
//     lastName: lastName
// };