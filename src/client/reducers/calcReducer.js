import {
  UPDATE_AMORTIZATION,
  RESET_AMORTIZATION,
  SET_BEGIN_DATE,
  UPDATE_AMORT_GRAPH,
  UPDATE_INFO_FORM,
  ROUTE_PROGRAMS,
  UPDATE_PAYPAL_AMOUNT,
  ADE_LOGIN_MORTGAGE
} from "../actions";
import { amortizationSchedule } from "amortization";
import update from "react-addons-update";
import { calculations } from "../components/CalculatorGraph/calculations";
import { fillInTheBlanks } from "../utils/fillInTheBlanks";

function getFormattedDate() {
  var date = new Date();
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
}

const generateFirstDate = () => {
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var text = new Date(firstDay.getTime() - firstDay.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  var mo = text.slice(5, 7);
  var yr = text.slice(0, 4);
  var d = text.slice(-2);
  return `${mo}-${d}-${yr}`;
};

export const defaultState = {
  loanAmount: null,
  interestRate: null,
  term: null,
  firstPayment: null,
  monthlyPayment: null,
  monthlyOverpayment: 0,
  originationDate: new Date(),
  paymentAmount: 0,
  currentLoanAmount: 0,
  payOffDate: "",
  canCalculate: false,
  hasError: false,
  missingFields: [""],
  program: null,
  programMessage: [],
  payPalAmount: 0,
  mortgageLogin: {}
};

export const resetState = {
  loanAmount: null,
  interestRate: null,
  term: null,
  firstPayment: null,
  monthlyPayment: null,
  monthlyOverpayment: 0,
  originationDate: new Date(),
  paymentAmount: 0,
  currentLoanAmount: 0,
  payOffDate: "",
  canCalculate: false,
  hasError: false,
  missingFields: [""],
  program: null,
  programMessage: [],
  payPalAmount: 0,
  mortgageLogin: {}
};

function checkForMissingFields(fields) {
  let hasInterest = false;
  let hasAmount = false;
  let hasTerm = false;
  let missing = [];
  fields.map(field => {
    if (field === "loanAmount") {
      hasAmount = true;
    }
    if (field === "interestRate") {
      hasInterest = true;
    }
    if (field === "term") {
      hasTerm = true;
    }
  });
  const hasRequiredFields = hasAmount && hasInterest && hasTerm;
  if (!hasRequiredFields) {
    if (!hasAmount) {
      missing.push("loanAmount");
    }
    if (!hasInterest) {
      missing.push("interestRate");
    }
    if (!hasTerm) {
      missing.push("term");
    }
  }
  return { hasRequiredFields, missing };
}

export default function input(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_AMORTIZATION:
      const loanAmount = Number(state.loanAmount);
      const term = Number(state.term);
      const interestRate = Number(state.interestRate);

      if (
        !interestRate > 0 ||
        !term > 0 ||
        !loanAmount > 0 ||
        state.beginDate === null
      ) {
        return state;
      }
      const amortization = amortizationSchedule(loanAmount, term, interestRate);

      return update(state, {
        amortization: {
          $set: amortization
        }
      });

    case ADE_LOGIN_MORTGAGE:
      const mortgageLoginState = Object.assign({}, state);
      const data = action.payload.data.mortgage;
      mortgageLoginState.mortgageLogin = data;
      mortgageLoginState.currentLoanAmount = data.initialAmt;
      mortgageLoginState.interestRate = data.interestRate;
      mortgageLoginState.loanAmount = data.initialAmt;
      mortgageLoginState.term = data.termYears;
      return mortgageLoginState;
    case RESET_AMORTIZATION:
      return resetState;

    case SET_BEGIN_DATE:
      return update(state, {
        beginDate: {
          $set: action.date
        }
      });

    case UPDATE_PAYPAL_AMOUNT:
      const payPalAmountState = Object.assign({}, state);

      return payPalAmountState;
    case UPDATE_AMORT_GRAPH:
      const { st } = action;

      const updatedState = Object.assign({}, state);
      updatedState.currentLoanAmount = st.currentLoanAmount;
      updatedState.interestRate = st.interestRate;
      updatedState.loanAmount = st.loanAmount;
      updatedState.originationDate = st.originationDate;
      updatedState.payOffDate = st.payOffDate;
      updatedState.paymentAmount = st.paymentAmount;
      updatedState.term = st.term;

      return updatedState;
    case UPDATE_INFO_FORM:
      const updatedInfoFormState = Object.assign({}, state);
      let canCalculate = false;
      let shouldCalculate = false;
      let hasMissingFields = false;
      // const getMissingExample = {
      //   payments: "360",
      //   principal: "350,000",
      //   payment: "4000"
      // };
      // let firstPaymentDate = data.firstPaymentDate;
      // let interestRate = data.interestRate;
      // let loanAmount = data.loanAmount;
      // let monthlyPayment = data.monthlyPayment;
      // let originalLoanAmount = data.originalLoanAmount;
      // let loanTerm = data.loanTerm;

      const propList = Object.keys(action.st).filter(item => {
        return action.st[item] !== null;
      });

      const fillInData = fillInTheBlanks({
        firstPaymentDate: action.st.originationDate,
        interestRate: action.st.interestRate,
        loanAmount: action.st.loanAmount,
        monthlyPayment: action.st.paymentAmount,
        originalLoanAmount: action.st.originalLoanAmount,
        loanTerm: action.st.term
      });

      let donotUpdate =
        typeof fillInData === "string" && fillInData.indexOf("Three of") !== -1;

      if (propList.length >= 2) {
        // const checkDate = generateFirstDate();
        // const dateSame = action.st.originationDate === checkDate;

        if (fillInData.updated && !donotUpdate) {
          updatedInfoFormState.canCalculate = true;
          updatedInfoFormState.currentLoanAmount = action.st.currentLoanAmount;
          updatedInfoFormState.interestRate = fillInData.interest;
          updatedInfoFormState.loanAmount = fillInData.principal;
          updatedInfoFormState.originationDate = action.st.originationDate;
          updatedInfoFormState.payOffDate = action.st.payOffDate;
          updatedInfoFormState.paymentAmount = fillInData.payment;
          updatedInfoFormState.term = fillInData.payments / 12;
        }
      } else {
        updatedInfoFormState.currentLoanAmount = action.st.currentLoanAmount;
        updatedInfoFormState.interestRate = action.st.interestRate;
        updatedInfoFormState.loanAmount = action.st.loanAmount;
        updatedInfoFormState.originationDate = action.st.originationDate;
        updatedInfoFormState.payOffDate = action.st.payOffDate;
        updatedInfoFormState.paymentAmount = action.st.paymentAmount;
        updatedInfoFormState.term = action.st.term;
        canCalculate = Object.keys(action.st).filter(item => {
          return action.st[item] !== null;
        });
        shouldCalculate = canCalculate.length >= 3;
        hasMissingFields = checkForMissingFields(canCalculate);
      }

      if (shouldCalculate) {
        const { monthlyPayment } = calculations(
          +action.st.loanAmount,
          +action.st.term,
          +action.st.interestRate
        );
        const paymentToReview = monthlyPayment;

        updatedInfoFormState.payPalAmount = paymentToReview;
      }
      updatedInfoFormState.missingFields =
        hasMissingFields && hasMissingFields.missing;
      return updatedInfoFormState;
    case ROUTE_PROGRAMS:
      const updatedMsgState = Object.assign({}, state);
      updatedMsgState.program = action.msg[0];
      updatedMsgState.programMessage = action.msg.slice(1);
      return updatedMsgState;
    default:
      return state;
  }
}
