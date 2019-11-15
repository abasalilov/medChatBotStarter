const avg_interest = {
  2019: 3.75,
  2018: 4.54,
  2017: 3.99,
  2016: 3.65,
  2015: 3.85,
  2014: 4.17,
  2013: 3.98,
  2012: 3.66,
  2011: 4.45,
  2010: 4.69,
  2009: 5.04,
  2008: 6.03,
  2007: 6.34,
  2006: 6.41,
  2005: 5.87,
  2004: 5.84,
  2003: 5.83,
  2002: 6.54,
  2001: 6.97,
  2000: 8.05,
  1999: 7.44,
  1998: 6.94,
  1997: 7.6,
  1996: 7.81,
  1995: 7.93,
  1994: 8.38,
  1993: 7.31,
  1992: 8.39,
  1991: 9.25,
  1990: 10.13,
  1989: 10.32,
  1988: 10.34,
  1987: 10.21,
  1986: 10.19,
  1985: 12.43,
  1984: 13.88,
  1983: 13.24,
  1982: 16.04,
  1981: 16.64,
  1980: 13.74,
  1979: 11.2,
  1978: 9.64,
  1977: 8.85,
  1976: 8.87,
  1975: 9.05,
  1974: 9.19,
  1973: 8.04,
  1972: 7.38,
  1971: 7.54
};

var Vprincipal = null;
var Vinterest = null;
var Vpayments = null;
var Vpayment = null;

function isUndefined(str) {
  if (str === null) {
    return true;
  }
  return typeof str === "undefined";
}

function computeIntRate(numberPayments, principalAmt, monthlyPayment, myGuess) {
  var potentialInterestRate = 0;

  if (myGuess.length == 0 || myGuess == 0) {
    var interestGuess = 10;
  } else {
    var interestGuess = myGuess;
    if (interestGuess >= 1) {
      interestGuess = interestGuess / 100;
    }
  }

  var potentialInterestRate = interestGuess / 12;
  var myNewPmtAmt = 0;
  var pow = 1;
  var j = 0;

  for (j = 0; j < numberPayments; j++) {
    pow = pow * (eval(1) + eval(potentialInterestRate));
  }

  myNewPmtAmt = (principalAmt * pow * potentialInterestRate) / (pow - 1);

  //2 DEC PLACE AMOUNT
  var decPlace2Rate = (eval(interestGuess) + eval(0.01)) / 12;
  var decPlace2Amt = 0;
  pow = 1;
  j = 0;
  for (j = 0; j < numberPayments; j++) {
    pow = pow * (eval(1) + eval(decPlace2Rate));
  }
  var decPlace2PmtAmt = (principalAmt * pow * decPlace2Rate) / (pow - 1);
  decPlace2Amt = eval(decPlace2PmtAmt) - eval(myNewPmtAmt);

  //3 DEC PLACE AMOUNT
  var decPlace3Rate = (eval(interestGuess) + eval(0.001)) / 12;
  var decPlace3Amt = 0;
  pow = 1;
  j = 0;
  for (j = 0; j < numberPayments; j++) {
    pow = pow * (eval(1) + eval(decPlace3Rate));
  }
  var decPlace3PmtAmt = (principalAmt * pow * decPlace3Rate) / (pow - 1);
  decPlace3Amt = eval(decPlace3PmtAmt) - eval(myNewPmtAmt);

  //4 DEC PLACE AMOUNT
  var decPlace4Rate = (eval(interestGuess) + eval(0.0001)) / 12;
  var decPlace4Amt = 0;
  pow = 1;
  j = 0;
  for (j = 0; j < numberPayments; j++) {
    pow = pow * (eval(1) + eval(decPlace4Rate));
  }
  var decPlace4PmtAmt = (principalAmt * pow * decPlace4Rate) / (pow - 1);
  decPlace4Amt = eval(decPlace4PmtAmt) - eval(myNewPmtAmt);

  //5 DEC PLACE AMOUNT
  var decPlace5Rate = (eval(interestGuess) + eval(0.00001)) / 12;
  var decPlace5Amt = 0;
  pow = 1;
  j = 0;
  for (j = 0; j < numberPayments; j++) {
    pow = pow * (eval(1) + eval(decPlace5Rate));
  }
  var decPlace5PmtAmt = (principalAmt * pow * decPlace5Rate) / (pow - 1);
  decPlace5Amt = eval(decPlace5PmtAmt) - eval(myNewPmtAmt);

  var myPmtDiff = 0;
  //
  // r = (1/t)(A/P - 1)
  // A = Total Accrued Amount (principal + interest)
  // P = Principal Amount
  // I = Interest Amount
  // r = Rate of Interest per year in decimal; r = R/100
  // R = Rate of Interest per year as a percent; R = r * 100
  // t = Time Period involved in months or years
  if (myNewPmtAmt < monthlyPayment) {
    while (myNewPmtAmt < monthlyPayment) {
      myPmtDiff = eval(monthlyPayment) - eval(myNewPmtAmt);
      if (myPmtDiff > decPlace2Amt) {
        potentialInterestRate = eval(potentialInterestRate) + eval(0.01 / 12);
      } else if (myPmtDiff > decPlace3Amt) {
        potentialInterestRate = eval(potentialInterestRate) + eval(0.001 / 12);
      } else if (myPmtDiff > decPlace4Amt) {
        potentialInterestRate = eval(potentialInterestRate) + eval(0.0001 / 12);
      } else if (myPmtDiff > decPlace5Amt) {
        potentialInterestRate =
          eval(potentialInterestRate) + eval(0.00001 / 12);
      } else {
        potentialInterestRate =
          eval(potentialInterestRate) + eval(0.000001 / 12);
      }

      pow = 1;
      j = 0;

      for (j = 0; j < numberPayments; j++) {
        pow = pow * (eval(1) + eval(potentialInterestRate));
      }
      myNewPmtAmt = (principalAmt * pow * potentialInterestRate) / (pow - 1);
    }
  } else {
    while (myNewPmtAmt > monthlyPayment) {
      myPmtDiff = eval(myNewPmtAmt) - eval(monthlyPayment);
      if (myPmtDiff > decPlace2Amt) {
        potentialInterestRate = eval(potentialInterestRate) - eval(0.01 / 12);
      } else if (myPmtDiff > decPlace3Amt) {
        potentialInterestRate = eval(potentialInterestRate) - eval(0.001 / 12);
      } else if (myPmtDiff > decPlace4Amt) {
        potentialInterestRate = eval(potentialInterestRate) - eval(0.0001 / 12);
      } else if (myPmtDiff > decPlace5Amt) {
        potentialInterestRate =
          eval(potentialInterestRate) - eval(0.00001 / 12);
      } else {
        potentialInterestRate =
          eval(potentialInterestRate) - eval(0.000001 / 12);
      }

      pow = 1;
      j = 0;

      for (j = 0; j < numberPayments; j++) {
        pow = pow * (eval(1) + eval(potentialInterestRate));
      }
      myNewPmtAmt = (principalAmt * pow * potentialInterestRate) / (pow - 1);
    }
  }

  potentialInterestRate = potentialInterestRate * 12 * 100;

  return potentialInterestRate;
}

function sn(num) {
  num = num.toString();

  var len = num.length;
  var rnum = "";
  var test = "";
  var j = 0;
  var i = 0;

  var b = num.substring(0, 1);
  if (b == "-") {
    rnum = "-";
  }

  for (i = 0; i <= len; i++) {
    b = num.substring(i, i + 1);

    if (
      b == "0" ||
      b == "1" ||
      b == "2" ||
      b == "3" ||
      b == "4" ||
      b == "5" ||
      b == "6" ||
      b == "7" ||
      b == "8" ||
      b == "9" ||
      b == "."
    ) {
      rnum = rnum + "" + b;
    }
  }

  if (rnum == "" || rnum == "-") {
    rnum = 0;
  }

  rnum = Number(rnum);

  return rnum;
}

function fns(num, places, comma, type, show) {
  var sym_1 = "$";
  var sym_2 = "";
  var fillZeroes = "";
  var z = 0;

  var isNeg = 0;

  if (num < 0) {
    num = num * -1;
    isNeg = 1;
  }

  var myDecFact = 1;
  var myPlaces = 0;
  var myZeros = "";
  while (myPlaces < places) {
    myDecFact = myDecFact * 10;
    myPlaces = Number(myPlaces) + Number(1);
    myZeros = myZeros + "0";
  }

  var onum = Math.round(num * myDecFact) / myDecFact;

  var integer = Math.floor(onum);
  var decimal = 0;

  if (Math.ceil(onum) == integer) {
    decimal = myZeros;
  } else {
    decimal = Math.round((onum - integer) * myDecFact);
  }
  decimal = decimal.toString();
  if (decimal.length < places) {
    fillZeroes = places - decimal.length;
    for (z = 0; z < fillZeroes; z++) {
      decimal = "0" + decimal;
    }
  }

  if (places > 0) {
    decimal = "." + decimal;
  }

  if (comma == 1) {
    integer = integer.toString();
    var tmpnum = "";
    var tmpinteger = "";
    var y = 0;
    var x = 0;
    var finNum = "";

    for (x = integer.length; x > 0; x--) {
      tmpnum = tmpnum + integer.charAt(x - 1);
      y = y + 1;
      if ((y == 3) & (x > 1)) {
        tmpnum = tmpnum + ",";
        y = 0;
      }
    }

    for (x = tmpnum.length; x > 0; x--) {
      tmpinteger = tmpinteger + tmpnum.charAt(x - 1);
    }

    finNum = tmpinteger + "" + decimal;
  } else {
    finNum = integer + "" + decimal;
  }

  if (isNeg == 1) {
    if (type == 1 && show == 1) {
      finNum = "-" + sym_1 + "" + finNum + "" + sym_2;
    } else {
      finNum = "-" + finNum;
    }
  } else {
    if (show == 1) {
      if (type == 1) {
        finNum = sym_1 + "" + finNum + "" + sym_2;
      } else if (type == 2) {
        finNum = finNum + "%";
      }
    }
  }

  return finNum;
}

function getMissing(calc) {
  var filled = 0;

  if (calc.principal && calc.principal.length > 0) {
    filled = filled + 1;
  }
  if (calc.interest && calc.interest.length > 0) {
    filled = filled + 1;
  }
  if (calc.payments && calc.payments.length > 0) {
    filled = filled + 1;
  }
  if (calc.payment && calc.payment.length > 0) {
    filled = filled + 1;
  }

  if (filled < 3) {
    return "Three of the four fields must contain a value in order to calculate the missing loan term.";
  } else {
    if (calc.principal && calc.principal.length > 0) {
      Vprincipal = sn(calc.principal);
    } else {
      Vprincipal = 0;
    }
    if (calc.interest && calc.interest.length > 0) {
      Vinterest = sn(calc.interest);
    } else {
      Vinterest = 0;
    }
    if (calc.payments && calc.payments.length > 0) {
      Vpayments = sn(calc.payments);
    } else {
      Vpayments = 0;
    }

    if (calc.payment && calc.payment.length > 0) {
      Vpayment = sn(calc.payment);
    } else {
      Vpayment = 0;
    }

    if (Vprincipal > 0 && Vinterest > 0 && Vpayments > 0 && Vpayment > 0) {
      return "One empty field please.";
    } else if (isUndefined(calc.payment) || calc.payment == 0) {
      calc.payment = getPmt(calc);
    } else if (isUndefined(calc.principal) || calc.principal == 0) {
      calc.principal = getPrin(calc);
    } else if (isUndefined(calc.payments) || calc.payments == 0) {
      calc.payments = getPmts(calc);
    } else if (isUndefined(calc.interest) || calc.interest == 0) {
      calc.interest = getInt(calc);
    }
  }
  calc.updated = true;
  return calc;
}

function getPmt(calc) {
  var i = sn(calc.interest);
  if (i >= 1.0) {
    i = i / 100.0;
  }
  i /= 12;
  var noMonths = sn(calc.payments);
  var pow = 1;

  for (var j = 0; j < noMonths; j++) {
    pow = pow * (1 + i);
  }
  var Rpayment = (Vprincipal * pow * i) / (pow - 1);

  return fns(Rpayment, 2, 1, 1, 1);
}

function getPrin(calc) {
  var i = sn(calc.interest);
  if (i >= 1.0) {
    i = i / 100.0;
  }
  i /= 12;

  var noMonths = sn(calc.payments);
  var pow = 1;

  for (var j = 0; j < noMonths; j++) {
    pow = pow * (1 + i);
  }

  var Rprincipal = ((pow - 1) * Vpayment) / (pow * i);

  return fns(Rprincipal, 2, 1, 1, 1);
}

function getPmts(calc) {
  var i = sn(calc.interest);
  if (i >= 1.0) {
    i = i / 100.0;
  }
  i /= 12;

  var prin = sn(calc.principal);
  var count = 0;
  var prinPort = 0;
  var intPort = 0;
  var pmt = sn(calc.payment);

  while (Number(prin) > 0) {
    intPort = prin * i;
    prinPort = pmt - intPort;
    prin = prin - prinPort;
    count = count + 1;
  }

  var Rcount = count;
  var pmtPart = parseInt((prin / pmt) * 100, 10);

  calc.payments = Rcount;
  return calc.payments;
}

function getInt(calc) {
  var prin = sn(calc.principal);
  var pmt = sn(calc.payment);
  var nPer = sn(calc.payments);
  var guess = 10;

  var i = computeIntRate(nPer, prin, pmt, guess);
  calc.interest = fns(i, 3, 0, 2, 1);
  return calc.interest;
}

// var test = getMissing({
//   payments: "360",
//   principal: "350,000",
//   payment: "4000"
// });

const allFields = [
  "loanTerm",
  "originalLoanAmount",
  "interestRate",
  "loanAmount",
  "firstPayment",
  "monthlyPayment"
];

function getFormattedDate(d) {
  var day = d;
  var dd = day.getDate();
  var mm = day.getMonth() + 1; //January is 0!

  var yyyy = day.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return dd + "/" + mm + "/" + yyyy;
}

const assumed_n_of_Payments = 360;

function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth() + 1;
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

function parseLoanNumber(nString) {
  return parseFloat(nString.replace(/,/g, ""));
}

// const getMissingExample = {
//   payments: "360",
//   principal: "350,000",
//   payment: "4000"
// };

export const fillInTheBlanks = data => {
  let firstPaymentDate = data.firstPaymentDate;
  let interestRate = data.interestRate;
  let loanAmount = data.loanAmount;
  let monthlyPayment = data.monthlyPayment;
  let originalLoanAmount = data.originalLoanAmount;
  let loanTerm = data.loanTerm;
  let n_of_payments = 0;

  let amount_of_loan = 0;
  let loan_date_start;
  let monthsPaid = 0;

  if (
    isUndefined(loanTerm) &&
    isUndefined(interestRate) &&
    isUndefined(originalLoanAmount) &&
    !isUndefined(monthlyPayment) &&
    !isUndefined(loanAmount)
  ) {
    // Case 1 = missing_interest_loanTerm_originalLoan
    // var missing_interest_loanTerm_originalLoan = {
    //   firstPaymentDate: "2018-11-11",
    //   loanAmount: "350,000",
    //   monthlyPayment: "4,000"
    // };
    console.log("1");
    loan_date_start = new Date(firstPaymentDate);
    let today = new Date();
    monthsPaid = monthDiff(loan_date_start, today);

    originalLoanAmount =
      parseLoanNumber(loanAmount) +
      monthsPaid * parseLoanNumber(monthlyPayment);
    n_of_payments = assumed_n_of_Payments - monthsPaid;
    return getMissing({
      payments: n_of_payments.toString(),
      principal: originalLoanAmount.toString(),
      payment: monthlyPayment
    });
  }

  //   "mont int original",
  //   isUndefined(monthlyPayment) &&
  //     isUndefined(interestRate) &&
  //     isUndefined(originalLoanAmount)
  // );

  if (
    isUndefined(monthlyPayment) &&
    isUndefined(interestRate) &&
    isUndefined(originalLoanAmount) &&
    !isUndefined(loanTerm) &&
    !isUndefined(firstPaymentDate) &&
    !isUndefined(loanAmount)
  ) {
    // Case 2 = var missing_interest_monthlyPayment_originalLoan = {
    //   firstPaymentDate: "2018-11-11",
    //   loanAmount: "350,000",
    //   loanTerm: "30"
    // };
    console.log("2");
    // NEED TO GUESS WITH AVG RATE HERE
    const yrCut = firstPaymentDate.indexOf("20");
    const yr = firstPaymentDate.slice(yrCut);
    const guessInterestRate = avg_interest[yr];
    const roundedInterest = (Math.round(guessInterestRate * 4) / 4).toFixed(3);
    loanTerm = 250000 > parseLoanNumber(loanAmount) ? 15 : 30;
    loanTerm = loanTerm * 12;
    // payment, payments, interest, principal
    return getMissing({
      payments: loanTerm.toString(),
      principal: loanAmount.toString(),
      interest: guessInterestRate.toString()
    });
  }

  //   "monthly int loan",
  //   isUndefined(monthlyPayment) &&
  //     isUndefined(interestRate) &&
  //     isUndefined(loanTerm)
  // );
  if (
    !isUndefined(originalLoanAmount) &&
    !isUndefined(firstPaymentDate) &&
    !isUndefined(loanAmount)
  ) {
    // Case #3 var missing_interest_monthlyPayment_loanTerm = {
    //   firstPaymentDate: "2017-11-11",
    //   loanAmount: "350,000",
    //   originalLoanAmount: "400,000"
    // };
    console.log("3");
    loan_date_start = new Date(firstPaymentDate);
    let today = new Date();
    monthsPaid = monthDiff(loan_date_start, today);
    let amountDiff =
      parseLoanNumber(originalLoanAmount) - parseLoanNumber(loanAmount);
    monthlyPayment = amountDiff / monthsPaid;
    monthlyPayment = monthlyPayment.toFixed(2);
    loanTerm = 250000 > parseLoanNumber(loanAmount) ? 15 : 30;
    loanTerm = loanTerm * 12;
    return getMissing({
      payments: loanTerm.toString(),
      principal: originalLoanAmount.toString(),
      payment: monthlyPayment
    });
  }

  if (
    !isUndefined(interestRate) &&
    !isUndefined(loanAmount) &&
    !isUndefined(firstPaymentDate)
  ) {
    // Case #4 var missing_original_monthlyPayment_loanTerm = {
    //   firstPaymentDate: "2019-08-11",
    //   interestRate: "5.75",
    //   loanAmount: "400,000"
    // };
    console.log("4");
    loan_date_start = new Date(firstPaymentDate);
    let today = new Date();
    monthsPaid = monthDiff(loan_date_start, today);
    loanTerm = 250000 > parseLoanNumber(loanAmount) ? 15 : 30;
    loanTerm = loanTerm * 12;
    return getMissing({
      payments: loanTerm.toString(),
      principal: loanAmount,
      interest: interestRate
    });
  }

  //   "int 1st original",
  //   isUndefined(interestRate) &&
  //     isUndefined(firstPaymentDate) &&
  //     isUndefined(originalLoanAmount)
  // );
  if (
    !isUndefined(loanTerm) &&
    !isUndefined(monthlyPayment) &&
    !isUndefined(loanAmount)
  ) {
    console.log("5");

    // Case #5 var missing_original_interestRate_firstPaymentDate = {
    //   loanTerm: "30",
    //   monthlyPayment: "2,200",
    //   loanAmount: "400,000"
    // };
    loanTerm = loanTerm * 12;
    return getMissing({
      payments: loanTerm.toString(),
      principal: loanAmount,
      payment: monthlyPayment
    });
  }

  //   "int, 1st, term",
  //   isUndefined(interestRate) &&
  //     isUndefined(firstPaymentDate) &&
  //     isUndefined(loanTerm)
  // );

  if (
    isUndefined(interestRate) &&
    isUndefined(firstPaymentDate) &&
    isUndefined(loanTerm) &&
    !isUndefined(loanAmount) &&
    !isUndefined(monthlyPayment)
  ) {
    console.log("6");
    // Case #6 var missing_interestRate_firstPaymentDate_loanTerm = {
    // originalLoanAmount: "400,000",
    // monthlyPayment: "2,200",
    // loanAmount: "350,000"
    // };
    let amountDiff =
      parseLoanNumber(originalLoanAmount) - parseLoanNumber(loanAmount);
    let paymentsMade = amountDiff / parseLoanNumber(monthlyPayment);
    let today = new Date();
    let firstPayment = today.setMonth(today.getMonth() - paymentsMade);
    paymentsMade = Math.round(paymentsMade);
    firstPayment = new Date(firstPayment);
    firstPaymentDate = getFormattedDate(firstPayment);

    let monthsLeftToPayOff =
      parseLoanNumber(loanAmount) / parseLoanNumber(monthlyPayment);

    let totalMonthsTerm = monthsLeftToPayOff + paymentsMade;
    loanTerm = totalMonthsTerm.toFixed();
    return getMissing({
      payments: loanTerm.toString(),
      principal: loanAmount.toString(),
      payment: monthlyPayment
    });
  }
  if (
    !isUndefined(loanAmount) &&
    !isUndefined(monthlyPayment) &&
    !isUndefined(interestRate)
  ) {
    // Case #7
    console.log("7");
    // var missing_originalLoanAmount_firstPaymentDate_loanTerm = {
    //   interestRate: "5.75",
    //   monthlyPayment: "2,200",
    //   loanAmount: "350,000"
    // };
    return getMissing({
      principal: loanAmount,
      payment: monthlyPayment,
      interest: interestRate
    });
  }

  if (
    !isUndefined(originalLoanAmount) &&
    !isUndefined(loanAmount) &&
    !isUndefined(loanTerm)
  ) {
    console.log("8");
    // Case #8
    // var missing_interestRate_firstPaymentDate_monthlyPayment = {
    //   loanTerm: 30,
    //   originalLoanAmount: "450,000",
    //   loanAmount: "350,000"
    // };

    let amountPaidOff =
      parseLoanNumber(originalLoanAmount) - parseLoanNumber(loanAmount);

    let percentagePaid = amountPaidOff / parseLoanNumber(originalLoanAmount);
    let yearsPaid = percentagePaid * loanTerm * 0.65;
    yearsPaid = yearsPaid.toFixed(1);
    monthsPaid = yearsPaid * 12;
    monthsPaid = Math.floor(monthsPaid);
    monthlyPayment = amountPaidOff / monthsPaid;
    monthlyPayment = monthlyPayment.toFixed(2);
    let today = new Date();
    let firstPayment = today.setMonth(today.getMonth() - monthsPaid);
    firstPayment = new Date(firstPayment);
    firstPaymentDate = getFormattedDate(firstPayment);
    loanTerm = loanTerm * 12;
    loanTerm = loanTerm.toString();
    return getMissing({
      principal: originalLoanAmount,
      payment: monthlyPayment.toString(),
      payments: loanTerm
    });
  }

  if (
    !isUndefined(loanAmount) &&
    !isUndefined(loanTerm) &&
    !isUndefined(interestRate)
  ) {
    // Case #9
    console.log("9");
    // var missing_originalLoanAmount_firstPaymentDate_monthlyPayment = {
    //   loanTerm: 30,
    //   loanAmount: "550,000",
    //   interestRate: "5.75"
    // };
    loanTerm = loanTerm * 12;
    return getMissing({
      principal: loanAmount,
      payments: loanTerm.toString(),
      interest: interestRate
    });
  }

  if (
    isUndefined(loanTerm) &&
    isUndefined(firstPaymentDate) &&
    isUndefined(monthlyPayment) &&
    !isUndefined(loanAmount) &&
    !isUndefined(interestRate)
  ) {
    // Case #10
    console.log("10");
    // var missing_loanTerm_firstPaymentDate_monthlyPayment = {
    //   loanAmount: "400,00",
    //   originalLoanAmount: "550,000",
    //   interestRate: "5.75"
    // };
    loanTerm = 250000 > parseLoanNumber(loanAmount) ? 15 : 30;
    loanTerm = loanTerm * 12;
    return getMissing({
      principal: loanAmount,
      payments: loanTerm.toString(),
      interest: interestRate
    });
  }
  if (
    isUndefined(interestRate) &&
    isUndefined(originalLoanAmount) &&
    isUndefined(loanAmount) &&
    !isUndefined(loanTerm) &&
    !isUndefined(monthlyPayment)
  ) {
    // Case #11
    console.log("11");
    // var missing_interestRate_loanAmount_originalLoanAmount = {
    //   monthlyPayment: "2,400",
    //   firstPaymentDate: "2017-08-11",
    //   loanTerm: "30"
    // };
    loanTerm = loanTerm * 12;
    originalLoanAmount = parseLoanNumber(monthlyPayment) * loanTerm;
    originalLoanAmount = originalLoanAmount * 0.65;
    return getMissing({
      payment: monthlyPayment,
      payments: loanTerm.toString(),
      principal: originalLoanAmount.toString()
    });
  }

  if (
    !isUndefined(originalLoanAmount) &&
    !isUndefined(monthlyPayment) &&
    !isUndefined(firstPaymentDate)
  ) {
    console.log("12");
    // Case #12
    // var missing_interestRate_loanAmount_loanTerm = {
    //   monthlyPayment: "4000",
    //   firstPaymentDate: "2017-08-11",
    //   originalLoanAmount: "450,000"
    // };

    loanTerm = 250000 > parseLoanNumber(originalLoanAmount) ? 15 : 30;
    loanTerm = loanTerm * 12;
    return getMissing({
      payment: monthlyPayment,
      principal: originalLoanAmount.toString(),
      payments: loanTerm.toString()
    });
  }

  if (
    isUndefined(originalLoanAmount) &&
    isUndefined(loanAmount) &&
    isUndefined(loanTerm) &&
    !isUndefined(monthlyPayment) &&
    !isUndefined(interestRate)
  ) {
    // Case #13
    console.log("13");
    // var missing_originalLoanAmount_loanAmount_loanTerm = {
    //   monthlyPayment: "4000",
    //   firstPaymentDate: "2017-08-11",
    //   interestRate: "5.75"
    // };
    loanTerm = 360;
    return getMissing({
      payment: monthlyPayment,
      payments: loanTerm.toString(),
      interest: interestRate
    });
  }
  if (
    !isUndefined(originalLoanAmount) &&
    !isUndefined(firstPaymentDate) &&
    !isUndefined(loanTerm)
  ) {
    console.log("case #222");
    // Case #222
    // var missing_originalLoanAmount_firstPaymentDate_loanTerm = {
    //   interestRate: "5.75",
    //   monthlyPayment: "2,200",
    //   loanAmount: "350,000"
    // };

    const yr = firstPaymentDate.slice(0, 4);
    const guessInterestRate = avg_interest[yr];
    loanTerm = loanTerm * 12;
    return getMissing({
      principal: originalLoanAmount.toString(),
      payments: loanTerm.toString(),
      interestRate: guessInterestRate
    });
  }

  if (
    isUndefined(loanAmount) &&
    isUndefined(interestRate) &&
    isUndefined(monthlyPayment) &&
    !isUndefined(firstPaymentDate) &&
    !isUndefined(loanTerm) &&
    !isUndefined(originalLoanAmount)
    // !isUndefined(loanTerm)
  ) {
    // Case #14
    console.log("14");
    // var missing_loanAmount_interestRate_monthly = {
    //   loanTerm: 30,
    //   firstPaymentDate: "2017-08-11",
    //   originalLoanAmount: "550,000"
    // };
    // NEED TO GUESS WITH AVG RATE HERE
    const yr = firstPaymentDate.slice(0, 4);
    const guessInterestRate = avg_interest[yr];
    loanTerm = loanTerm * 12;
    return getMissing({
      principal: originalLoanAmount,
      payments: loanTerm.toString(),
      interest: guessInterestRate.toString()
    });
  }

  if (
    isUndefined(loanAmount) &&
    isUndefined(monthlyPayment) &&
    !isUndefined(loanTerm) &&
    !isUndefined(interestRate)
  ) {
    // Case #15
    console.log("15");
    // missing_loanAmount_originalLoanAmount_monthly
    // var missing_loanAmount_originalLoanAmount_monthly = {
    //   loanTerm: 30,
    //   firstPaymentDate: "2017-08-11",
    //   interestRate: "5.55"
    // };
    loanTerm = loanTerm * 12;
    // NEED TO GUESS AVG monthlyPayment here
    monthlyPayment = "1,600";
    return getMissing({
      payments: loanTerm.toString(),
      interest: interestRate,
      payment: monthlyPayment
    });
  }

  if (
    isUndefined(loanTerm) &&
    !isUndefined(originalLoanAmount) &&
    !isUndefined(interestRate)
  ) {
    // Case #16
    console.log("16");
    // var missing_loanAmount_monthly_loanTerm = {
    //   originalLoanAmount: "450,000",
    //   firstPaymentDate: "2017-08-11",
    //   interestRate: "5.55"
    // };
    loanTerm = 250000 > parseLoanNumber(originalLoanAmount) ? 15 : 30;
    loanTerm = loanTerm * 12;
    return getMissing({
      payments: loanTerm.toString(),
      interest: interestRate,
      principal: originalLoanAmount
    });
  }

  if (
    !isUndefined(monthlyPayment) &&
    !isUndefined(originalLoanAmount) &&
    !isUndefined(loanTerm)
  ) {
    // Case #17
    console.log("17");
    // var missing_originalLoanAmount_firstPaymentDate_interestRate = {
    //   originalLoanAmount: "450,000",
    //   loanTerm: 30,
    //   monthlyPayment: "2200"
    // };
    loanTerm = loanTerm * 12;
    return getMissing({
      payment: monthlyPayment,
      principal: originalLoanAmount,
      payments: loanTerm.toString()
    });
  }

  if (
    !isUndefined(interestRate) &&
    !isUndefined(monthlyPayment) &&
    !isUndefined(loanTerm)
  ) {
    // Case #18
    console.log("18");
    // var missing_originalLoanAmount_firstPaymentDate_loanAmount = {
    //   interestRate: "5.75",
    //   loanTerm: 30,
    //   monthlyPayment: "2200"
    // };
    loanTerm = loanTerm * 12;
    return getMissing({
      payment: monthlyPayment,
      payments: loanTerm.toString(),
      interest: interestRate
    });
  }

  if (
    !isUndefined(interestRate) &&
    !isUndefined(originalLoanAmount) &&
    !isUndefined(monthlyPayment)
  ) {
    // Case #19
    console.log("19");
    // var missing_loanAmount_firstPaymentDate_loanTerm = {
    //   interestRate: "5.75",
    //   originalLoanAmount: "450,000",
    //   monthlyPayment: "2200"
    // };

    return getMissing({
      payment: monthlyPayment,
      interest: interestRate,
      principal: originalLoanAmount
    });
  }

  if (
    !isUndefined(interestRate) &&
    !isUndefined(loanTerm) &&
    !isUndefined(originalLoanAmount)
  ) {
    // Case #20
    console.log("20");
    // var missing_loanAmount_firstPaymentDate_monthly = {
    //   interestRate: "5.75",
    //   originalLoanAmount: "450,000",
    //   loanTerm: 30
    // };
    loanTerm = loanTerm * 12;
    return getMissing({
      principal: originalLoanAmount,
      interest: interestRate,
      payments: loanTerm.toString()
    });
  }
  return {
    firstPaymentDate,
    interestRate,
    loanAmount,
    monthlyPayment,
    originalLoanAmount,
    loanTerm,
    updated: false
  };
};
