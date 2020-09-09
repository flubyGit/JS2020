type Documents = {
  title: string;
  text: string;
  date?: Date;
};

const document: Documents = {
  title: "Title",
  text: "Text",
  // date: new Date(),
};

// Encadeamento opcional
console.log(document?.date?.getFullYear() ?? "Ixi não existe data");
console.log(undefined ?? "Ixi não existe data");
console.log(null ?? "Ixi não existe data");
console.log(false ?? "Ixi não existe data");
console.log(true ?? "Ixi não existe data");
console.log("" ?? "Ixi não existe data");
console.log(Math.random() * 100 ?? "Ixi não existe data");

export default document;
