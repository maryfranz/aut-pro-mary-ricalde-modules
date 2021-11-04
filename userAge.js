export function userAge(birthYear){
  var currentAge = (new Date().getFullYear()) - birthYear;
  return currentAge;
}