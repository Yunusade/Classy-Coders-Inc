const {Employees} = require('./Employees')
class Manager extends Employees{
    #employeesManaged

    constructor( name, position, salary, department){
        super(name, position, salary)
        this.#employeesManaged = []
        this.department = department
    }

    getEmployeesManaged() {
        return this.#employeesManaged;
    }

    setEmployeesManaged(employee){
        this.#employeesManaged.push(employee)
        console.log(this.#employeesManaged)
    }
}


module.exports = {
    Manager,
}