// import localforage from "localforage";
// import _ from "lodash";

// import defaultJVMDashboards from "../json/jvm/dashboards.json";
// // import defaultGoDashboards from "../json/go/dashboards.json";

// // Note: This is the old local storage promise worker logic that is
// // unused and only preserved for a future refactor
// const oldWorkerLogic = message => {
//   // Temporarily disabled
//   // Bail immediately if the message lacks runtime or type attributes
//   // if (!message.runtime) {
//   //   return Promise.reject("message.runtime is undefined");
//   // }
//   if (!message.type) {
//     return Promise.reject("message.type is undefined");
//   }
//   switch (message.type) {
//     case "init":
//       const { basename } = message;
//       return localforage.config({
//         name: `grey-matter-fabric-${basename}`,
//         description:
//           "Persistent storage of Grey Matter Fabric dashboards and settings"
//       });
//     case "getDashboards":
//       return localforage.getItem("dashboards").then(savedDashboards => {
//         if (
//           savedDashboards &&
//           _.every(
//             savedDashboards,
//             dashboard => dashboard.runtime === message.runtime
//           )
//         ) {
//           return savedDashboards;
//         } else {
//           return setDashboardsToDefault(message.runtime);
//         }
//       });
//     // .catch(err => console.log("getDashboards failed with ", err));
//     case "setDashboards":
//       const { dashboards } = message;
//       return localforage
//         .setItem("dashboards", dashboards)
//         .catch(err =>
//           console.log("Failed to persist dashboards to local storage: ", err)
//         );
//     case "setDashboardsToDefault":
//       return setDashboardsToDefault(message.runtime);
//     default:
//       return Promise.reject(
//         "Unknown message type provided to Local Storage Web Worker"
//       );
//   }
// };

// function setDashboardsToDefault(runtime) {
//   // switch (runtime) {
//   //   case "JVM":
//   //     return localforage.setItem("dashboards", defaultJVMDashboards);
//   //   default:
//   //     return Promise.reject(
//   //       "Invalid Runtime provided to setDashboardToDefault"
//   //     );
//   // }
//   // Hacky fix pending overhaul of dashboards logic
//   return localforage.setItem("dashboards", defaultJVMDashboards);
// }
