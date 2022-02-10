findWaldo = (names, found) => {
  names.forEach((item, index) => {
    if (item === "Waldo") {
      found(index); // execute callback
    }
  });
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => {
  console.log(`Found at index ${index}`);
});