const moment = require("moment");
const { getRandomInt } = require("../helpers/utils");
const employeeProjects = [
  {
    projectHandled:
      "ullamco non deserunt labore est voluptate adipisicing magna aliqua irure",
    dateStarted: "2021-06-25",
  },
  {
    projectHandled:
      "sunt est aliquip proident pariatur tempor irure consectetur minim dolor",
    dateStarted: "2021-04-19",
  },
  {
    projectHandled:
      "occaecat fugiat consequat do deserunt aliquip voluptate aute non aliqua",
    dateStarted: "2021-04-25",
  },
  {
    projectHandled:
      "aliqua officia dolore elit consectetur cupidatat fugiat aute veniam eu",
    dateStarted: "2021-05-17",
  },
  {
    projectHandled:
      "Lorem anim ut sint non officia reprehenderit reprehenderit pariatur ullamco",
    dateStarted: "2021-01-11",
  },
  {
    projectHandled: "eu aliqua ipsum in sunt qui excepteur amet labore eu",
    dateStarted: "2021-03-30",
  },
  {
    projectHandled:
      "velit veniam mollit do deserunt esse qui in officia veniam",
    dateStarted: "2021-02-27",
  },
  {
    projectHandled: "sit enim sint voluptate ex anim sunt culpa est Lorem",
    dateStarted: "2021-06-03",
  },
  {
    projectHandled:
      "irure in dolore reprehenderit ut incididunt amet cupidatat veniam labore",
    dateStarted: "2021-02-10",
  },
  {
    projectHandled:
      "laboris voluptate dolor pariatur velit exercitation do minim laboris sunt",
    dateStarted: "2021-02-13",
  },
];
employeeProjects.forEach((project) => {
  //   console.log(project.dateStarted);
  const startMoment = moment(project.dateStarted, "YYYY-MM-DD");
  //   console.log(startMoment);
  const endMoment = startMoment.clone().add(getRandomInt(3, 100), "days");
  const finished = endMoment < moment(new Date());
  //   console.log("finished:", finished);
  const dateEnded = endMoment.format("YYYY-MM-DD");
  //   console.log("start:", project.dateStarted);
  //   console.log("end:", dateEnded);
  //   console.log("//////////////");
  project.dateEnded = dateEnded;
  project.status = finished ? "complete" : "pending";
  const empIdList = [];
  for (let i = 0; i < 3; i++) {
    empIdList.push(getRandomInt(1, 10));
  }
  project.empIdList = [...new Set(empIdList)];
});

// console.log(employeeProjects);
module.exports = employeeProjects;
