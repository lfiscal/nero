var list = document.querySelector('.el-table');
var b = document.querySelector(".page-summary");
list.addEventListener('click', function(event) {
  nums = document.querySelectorAll('.content-container .icon-approval-user-filled').length + document.querySelectorAll('.content-container .icon-flag-tts-filled').length;
  currentDate = new Date();
  when = currentDate.toLocaleDateString();
  localStorage.setItem('NERO-'+when+'', ''+nums+'');
  b.innerHTML = nums
});
