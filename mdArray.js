function restructureArray(names, ages) {
  // Error Handling: Check for equal lengths
  if (names.length !== ages.length) {
    console.error("Error: Names and ages arrays must have the same length.");
    return null;
  }

  const restructured = [];
  for (let i = 0; i < names.length; i++) {
    restructured.push([names[i], ages[i]]);
  }
  return restructured;
}

const names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
const ages = [24, 65, 21, 5, 9];

const result = restructureArray(names, ages);

if (result) {
  console.log("Restructured array:");
  result.forEach(item => console.log(item));
}
