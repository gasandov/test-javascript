/**
 * Instrucciones: 
 * 
 * En todas las pruebas se tomará en cuenta la limpieza del código y el uso de ECMAScript6 
 * 
 * Escriba el código solicitado después de las instrucciones
 * 
 * Utilice la sintaxis resumida de "arrow function"
 * 
 * Al terminar la prueba suba el código a un repositorio y envienos el link 
 * al siguiente correo electrónico:
 * 
 *         ggutierrez@grainchain.io
 * 
 */


 /** 
 * Codifica una función que reciba por parámetros, un arreglo de empleados,
 * y retorne un arreglo con los empleados filtrados según el parámetro dado
 * 
 * Imprima el resultado en consola
 * 
 */

 /**
  * @param {array} employees array of objects, holding employee data
  * @param {string} filter variable holding field to be filtered
  * @param {string, integer} equal variable holding match sentence
  * @returns {array} filtered array
  */
const employeeFilter = employees => {
  return (filter, equal) => {
    return [...employees].filter(employee => employee[filter] === equal);
  };
};
console.log(employeeFilter(employees)('department', 'Marketing'));
// console.log('Array', employees)
// console.log(getEmployeesFromDepartment(employees)('Marketing'))

/**
 * Codifica una segunda función que reciba como parametro un arreglo y retorne 
 * el promedio de edad de los empleados del departamento de 'Marketing', 
 * redondear el valor para que no haya decimales.
 * 
 * Reutiliza las funciones necesarias
 * Imprima el resultado en consola
 * 
 */

/**
 * 
 * @param {array} employees array of objects, holding employee data
 * @returns {integer} age average
 */
const averageAge = employees => {
  return Math.round(employees.reduce((acc, sum) => {
    return acc + sum.age
  }, 0) / employees.length);
};

console.log(averageAge(employeeFilter(employees)('department', 'Marketing')));

/**
 * Output esperado: 41
 */

/**
 * Codifica una función que reciba por parámetro un arreglo de "employees" del departamento
 * de "Development" y retorne un nuevo arreglo con los "employees" con la edad aumentada a 1
 * 
 * Reutiliza las funciones necesarias
 * Imprime el resultado en consola
 * 
 */

 /**
  * 
  * @param {array} employees array of objects, holding employee data
  * @param {string} department value to match department
  * @returns {array} returns original array with updated ages of provided department
  */
const agePlusOne = employees => {
  return department => [...employees].map(employee => {
    const modified = {...employee};
    if (modified.department === department) {
      modified['age'] += 1;
    }
    return modified;
  });
};

console.log(agePlusOne(employees)('Development'));

/**
 * Crea una función que reciba por parametro el objeto employee y cambie el departamento a "Development"
 * 
 */
let employee = {
  fisrtName: 'Maria',
  lastName: 'Gonzalez',
  age: 32,
  department: 'Marketing'
}

const changeDepartment = employee => {
  let newDepartment = { 'department': 'Development' };
  let updated = {...employee, ...newDepartment};
  return updated;
}

// No mutar el objeto
console.log(employee);
console.log(changeDepartment(employee));

/**
 *  
 * Crea una función en la cual solo se reciba un parámetro y se puedan sumar hasta 3 números
 * 
 * Escribe aquí debajo como se llama a este concepto
 * 
 */

const buildSum = x => {
  return (y) => {
      return (z) => {
          return x + y + z;
      };
  };
};

console.log(buildSum(1)(2)(3))






