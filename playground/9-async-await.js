const doWork = async () => {
  throw new Error("something went wrong");
  return "Shivam";
};

doWork()
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
// console.log(doWork());
console.log(" i am still running");
