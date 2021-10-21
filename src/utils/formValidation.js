export function validateSearchInput(searchText) {
  console.log(searchText);
  const errors = {};
  const validateSearchInputText = /^[a-zA-Z]+$/;

  if (!searchText) {
    return (errors.searchText = "Required");
  } else if (!validateSearchInputText.test(searchText)) {
    console.log("hereree?");
    return (errors.searchText = "Letts should be english only");
  }

  return null;
}
