"use strict";
// insurance.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsurancePolicy = exports.InsuranceType = void 0;
var InsuranceType;
(function (InsuranceType) {
    InsuranceType["Health"] = "Health";
    InsuranceType["Life"] = "Life";
    InsuranceType["Vehicle"] = "Vehicle";
})(InsuranceType || (exports.InsuranceType = InsuranceType = {}));
class InsurancePolicy {
    constructor(type, age, coverageAmount, hasPreExistingConditions) {
        this.type = type;
        this.age = age;
        this.coverageAmount = coverageAmount;
        this.hasPreExistingConditions = hasPreExistingConditions;
    }
    calculatePremium() {
        let basePremium = 0;
        // Determine base premium based on insurance type
        switch (this.type) {
            case InsuranceType.Health:
                basePremium = 100; // base premium for health insurance
                if (this.age > 50)
                    basePremium += 50; // additional charge for older age
                if (this.hasPreExistingConditions)
                    basePremium += 100; // charge for pre-existing conditions
                break;
            case InsuranceType.Life:
                basePremium = 150; // base premium for life insurance
                if (this.age > 50)
                    basePremium += 75; // additional charge for older age
                break;
            case InsuranceType.Vehicle:
                basePremium = 200; // base premium for vehicle insurance
                if (this.age < 25)
                    basePremium += 50; // additional charge for younger drivers
                break;
        }
        // Calculate premium based on coverage amount
        return basePremium + (this.coverageAmount * 0.01); // 1% of coverage amount
    }
}
exports.InsurancePolicy = InsurancePolicy;
