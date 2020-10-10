const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]
  
//Declare an empty array;
const arrayEmpty = []

//Declare an array with more than 5 number of elements
const arraySix = [1,2,3,4,5,6,7]

// Find the length of your array
console.log(arraySix.length)

// Get the first item, the middle item and the last item of the array
console.log(arraySix[0]);
console.log(arraySix[arraySix.length - 1])
console.log(arraySix[(arraySix.length/2) + (arraySix.length % 2)]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const arrayMixes = [1, 'b', undefined, null, {name: "tom"}, 2.3]

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Print the array using console.log()
console.log(companies)

// Print the number of companies in the array
console.log(companies.length)

// Print the first company, middle and last company
console.log(companies[0]);
console.log(companies[companies.length - 1])
console.log(companies[companies.length/2 + companies.length % 2]);

// Print out each company
companies.map(c => console.log(c))

// Change each company name to uppercase one by one and print them out
companies.map(c => console.log(c.toUpperCase()))

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const phrase = companies.slice(0, companies.length - 1).join(", ") + " and " + companies[companies.length - 1] + " are big IT companies";
console.log(phrase)
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = "Amazon"
const result = companies.indexOf(company) >= 0 ? company : "company not found";

// Filter out companies which have more than one 'o' without the filter method
companiesOO = []
companies.forEach(c => {
   if (c.split('o').length - 1 > 1){
    companiesOO.push(c);
   }
})
console.log(companiesOO);
// Sort the array using sort() method
companies.sort()

// Reverse the array using reverse() method
companies.reverse()

// Slice out the first 3 companies from the array
companies.slice(3, companies.length);

// Slice out the last 3 companies from the array
companies.slice(0, 3);

// Slice out the middle IT company or companies from the array

// Remove the first IT company from the array
companies.shift()
// Remove the middle IT company or companies from the array

// Remove the last IT company from the array
companies.splice(companies.length - 1, 1)

// Remove all IT companies
companies = []
