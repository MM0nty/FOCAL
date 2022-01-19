const taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const salesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]//700
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]//600
  }
];

const salesTax = function(salesData, taxRates) {
  // Implement your code here
  const keys = Object.keys(salesData[0]); //[name,province,sales]
  const values = Object.values(salesData[0]); //[telus,bc,[100,200,400]]
  let profit = 0;
  for (const sale in salesData.sales) {
    profit += sale;
    console.log("Profit:", profit);
    if (salesData.province === AB) {
      tax = profit * taxRates.AB;
      console.log("Tax:", tax);
    }
    if (salesData.province === BC) {
      tax = profit * taxRates.BC;
      console.log("Tax:", tax);
    }
    if (salesData.province === SK) {
      tax = profit * taxRates.SK;
      console.log("Tax:", tax);
    }
  }

}

const results = salesTax(salesData, taxRates);
/*
Expected results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/