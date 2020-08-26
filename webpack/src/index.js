import "./assets/css/style.css";
import {
  imports,
  age as ageModule,
  exports,
  funcSum,
  inline,
  arrow,
} from "./module1";
import exportInline from "./module1";

import * as classes from "./module2";

const age = 21;
const fruits = classes.Fruits("Maça", true);
const phones = classes.Phones(2000, 1);

// console.log(
//   inline,
//   imports,
//   ageModule,
//   phones,
//   fruits,
//   exportInline(),
//   people,
//   exports,
//   funcSum(1, 3)
// );
