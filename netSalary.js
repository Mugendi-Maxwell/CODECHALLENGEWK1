function calculateNetSalary(basicSalary, benefits) {
    // declares gross salary
    const grossSalary = basicSalary + benefits;

    // PAYE evaluation
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
        paye = (24000 * 0.1) + (8333 * 0.25) + ((grossSalary - 32333) * 0.30);
    } else if (grossSalary <= 800000) {
        paye = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + ((grossSalary - 500000) * 0.325);
    } else {
        paye = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35);
    }
    // benefits evaluation 
    // Apply personal relief of 2,400
    paye = Math.max(0, paye - 2400);
    //Math.max(0,x)function sets to make sure returns are never negative
    // NHIF deduction (example for grossSalary above KSh 100,000)
    let nhif = 1700;

    // NSSF Tier I and Tier II deductions
    let nssfTierI = Math.min(grossSalary, 7000) * 0.06;
    let nssfTierII = Math.max(0, Math.min(grossSalary - 7000, 36000)) * 0.06;

    let totalNSSF = nssfTierI + nssfTierII;

    // Net Salary
    let netSalary = grossSalary - (paye + nhif + totalNSSF);

    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssf: totalNSSF,
        netSalary: netSalary
    };
}

// Example usage
let basicSalary =  parseFloat(prompt("Enter your basic salary in KSh"));
let benefits = parseFloat(prompt("Enter your benefits in KSh"));

console.log(calculateNetSalary(basicSalary, benefits));
