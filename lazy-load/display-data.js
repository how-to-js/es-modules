setTimeout(
  () =>
    import("./data.js").then(({ data }) => {
      document.body.innerHTML = data;
    }),
  500
);
