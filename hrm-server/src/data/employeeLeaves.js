const moment = require("moment");
moment.suppressDeprecationWarnings = true;
const { getRandomInt } = require("../helpers/utils");

const leaveNames = [
  "Privilege",
  "Earned",
  "Annual",
  "Casual",
  "Sick",
  "Maternity",
  "Marriage",
  "Paternity",
  "Bereavement",
  "Leave Without Pay",
];
const employeeLeaves = leaveNames.map((leaveName) => {
  const totalDays = getRandomInt(1, 15);
  const currentMoment = moment(new Date());
  const daysBack = getRandomInt(-30, 90);
  const startMoment = currentMoment.clone().add(daysBack, "days");
  const endMoment = startMoment.clone().add(totalDays, "days");
  return {
    empId: getRandomInt(1, 10),
    leaveName,
    description: "dummy description",
    startDate: startMoment.format("YYYY-MM-DD"),
    endDate: endMoment.format("YYYY-MM-DD"),
    totalDays,
  };
});
// console.log(employeeLeaves);
module.exports = [];
