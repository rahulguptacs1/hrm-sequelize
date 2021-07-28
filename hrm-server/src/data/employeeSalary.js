const employeeSalary = [
  {
    salaryRange: "40000",
    annualIncome: "700000",
    loans: 0,
    insurance: "70000",
  },
  {
    salaryRange: "20000",
    annualIncome: "400000",
    loans: "70000",
    insurance: "10000",
  },
  {
    salaryRange: "30000",
    annualIncome: "300000",
    loans: 0,
    insurance: "50000",
  },
  {
    salaryRange: "50000",
    annualIncome: "700000",
    loans: "300000",
    insurance: "10000",
  },
  {
    salaryRange: "20000",
    annualIncome: "300000",
    loans: "60000",
    insurance: "100000",
  },
  {
    salaryRange: "20000",
    annualIncome: "100000",
    loans: "500000",
    insurance: "100000",
  },
  {
    salaryRange: "10000",
    annualIncome: "1000000",
    loans: "100000",
    insurance: "40000",
  },
  {
    salaryRange: "50000",
    annualIncome: "100000",
    loans: 0,
    insurance: "80000",
  },
  {
    salaryRange: "40000",
    annualIncome: "200000",
    loans: "50000",
    insurance: "40000",
  },
  {
    salaryRange: "50000",
    annualIncome: "300000",
    loans: "10000",
    insurance: "40000",
  },
];
employeeSalary.forEach((salary, i) => {
  salary.empId = i + 1;
  salary.taxable = salary.annualIncome * 0.2;
  salary.salaryRange = `${salary.salaryRange}-${+salary.salaryRange + 10000}`;
});
// console.log(employeeSalary);
module.exports = employeeSalary;
