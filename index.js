const employee = {
    name:'John',
    streetAddress: '2220 Polo street'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
return {...employee, ...{[key]:value}}

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key]=value
return employee
}
