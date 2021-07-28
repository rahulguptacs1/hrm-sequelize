const { getRandomInt } = require("../helpers/utils");

const employeeTrainings = [
  {
    skills: "sit aliqua anim amet ex amet et id officia incididunt",
    training: "proident ullamco mollit dolore",
    projectReqt: "ullamco sint id minim",
    bond: 13317.003,
  },
  {
    skills: "irure quis eiusmod anim nostrud pariatur non ut cupidatat laborum",
    training: "aliqua elit et tempor",
    projectReqt: "amet do non Lorem",
    bond: 34563.417,
  },
  {
    skills: "aliquip sint fugiat veniam in do sint sit nulla eu",
    training: "ea eiusmod irure Lorem",
    projectReqt: "minim est ut eiusmod",
    bond: 34035.355,
  },
  {
    skills: "duis non id tempor do exercitation voluptate esse non aute",
    training: "minim in aute ex",
    projectReqt: "minim nisi ut labore",
    bond: 28893.395,
  },
  {
    skills:
      "ea sit est irure voluptate culpa pariatur reprehenderit aliquip nisi",
    training: "qui quis excepteur laboris",
    projectReqt: "reprehenderit ex culpa culpa",
    bond: 46294.912,
  },
  {
    skills:
      "ex amet ex fugiat consequat dolor Lorem deserunt reprehenderit nisi",
    training: "eiusmod nostrud aute ipsum",
    projectReqt: "ullamco consequat ea incididunt",
    bond: 1177.961,
  },
  {
    skills: "irure minim eu occaecat irure do in amet commodo amet",
    training: "reprehenderit proident do aute",
    projectReqt: "consectetur officia do cupidatat",
    bond: 49127.369,
  },
  {
    skills: "exercitation elit elit ea incididunt laboris ea Lorem ea ex",
    training: "elit sint non exercitation",
    projectReqt: "magna tempor sint labore",
    bond: 26359.892,
  },
  {
    skills: "est ex enim velit qui officia veniam do do laborum",
    training: "tempor cupidatat Lorem exercitation",
    projectReqt: "dolor officia et excepteur",
    bond: 43610.011,
  },
  {
    skills:
      "nostrud officia ut consectetur nulla mollit magna aliquip id deserunt",
    training: "ipsum ullamco amet nulla",
    projectReqt: "proident consequat esse ut",
    bond: 26120.645,
  },
];
employeeTrainings.forEach((training) => {
  const empIdList = [];
  for (let i = 0; i < 3; i++) {
    empIdList.push(getRandomInt(1, 10));
  }
  training.empIdList = [...new Set(empIdList)];
});
module.exports = employeeTrainings;
