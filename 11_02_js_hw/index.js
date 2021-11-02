function selectJS() {
  var mylist = document.getElementById("myList");
  //console.log(state.options[mylist.selectedIndex].value);
  document.getElementById("state").value = state.options[mylist.selectedIndex].text;
  }