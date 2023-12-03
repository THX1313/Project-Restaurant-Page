import pageLoad from './pageLoad';

pageLoad();

// basic implementation of tabbed browsing in html/js
/* <div id="container">
  <div id="page1">Content of page 1</div>
  <div id="page2">Content of page 2</div>
  <div id="page3">Content of page 3</div>
</div>
<button onclick="showPage('page1')">Page 1</button>
<button onclick="showPage('page2')">Page 2</button>
<button onclick="showPage('page3')">Page 3</button>

<script>
function showPage(pageId) {
  const container = document.getElementById("container");
  const pages = container.querySelectorAll("div");

  for (const page of pages) {
    page.style.display = "none";
  }

  const selectedPage = document.getElementById(pageId);
  selectedPage.style.display = "block";
}
</script> */