document.addEventListener("DOMContentLoaded", () => {
  const allPagesCheckbox = document.getElementById("page-all");

  const pageCheckboxes = document.querySelectorAll(
    'input[name="page-select"]:not(#all-pages)'
  );

  allPagesCheckbox.addEventListener("change", (event) => {
    const isChecked = event.target.checked;
    pageCheckboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  });

  pageCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const allIndividualPagesChecked = Array.from(pageCheckboxes).every(
        (cb) => cb.checked
      );

      allPagesCheckbox.checked = allIndividualPagesChecked;
    });
  });

  document.querySelectorAll('input[name="page-select"]').forEach((cb) => {
    cb.checked = true;
  });

  const doneButton = document.getElementById("done-btn");
  doneButton.addEventListener("click", () => {
    const selectedPages = Array.from(
      document.querySelectorAll('input[name="page-select"]:checked')
    ).map((cb) => cb.value);

    console.log("Selected pages:", selectedPages);
    alert(`Pages selected: ${selectedPages.join(", ")}`);
  });
});
