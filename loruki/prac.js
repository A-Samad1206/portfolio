// console.log("document.domain", document.domain, "document.domain");
// console.log("document.URL", document.URL, "document.URL");
// console.log("document.baseURI", document.baseURI, "document.baseURI");
// console.log("document.doctype", document.doctype, "document.doctype");
// console.log(
//   "document.documentElement",
//   document.documentElement,
//   "document.documentElement"
// );
// console.log("ddddd", document.getElementsByTagName("section"));
// console.log("Queryselc", document.querySelector("section"));
// const fs = require("fs");
const navbar = document.querySelector(".navbar");
// navbar.fstyle.borderLeft = "4pz solid red";
for (var key in navbar.style) {
  // fs.write("style.txt", key, (err) => {
  //   if (err) {
  //     console.log("err", err);
  //     throw err;
  //   }
  // });
  // console.log(key + "  =  " + navbar.style.key);
}
navbar.style.borderLeft = "4px solid red";
navbar.style.backgroundColor = "aqua";
navbar.onresize = () => {
  console.log("object");
};
// console.log(navbar.style);
