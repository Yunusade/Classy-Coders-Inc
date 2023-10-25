class Employees {
    #salary
    #isHired
    static #allEmployees = []

    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary
        this.#isHired = true
        Employees.#allEmployees.push(this)
    }

    getSalary() {
        return this.#salary
    }

    setSalary(amount){
        this.#salary = amount
    }

    getStatus() {
        return this.#isHired
    }

    setStatus(command) {
        command === "hire" ? this.#isHired = true : (command === "fire" ? this.#isHired = false : '') 
    }

    static getEmployees() {
        return Employees.#allEmployees
    }

    static getTotalPayroll() {
        return Employees.#allEmployees.reduce((acc, val) => acc + val.getSalary(), 0);
    }
}



module.exports = {
    Employees
}