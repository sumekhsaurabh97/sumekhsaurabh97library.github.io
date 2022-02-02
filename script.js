let url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';
const textarea = document.getElementById("accordionEx")

feednami.load(url)
  .then(feed => {
    text = ''
    // console.log(feed);
    for (let entry of feed.entries) {
      
      inner = `<div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" id ="full" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <b>Breaking News>></b>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong><a href="${entry.link}">${entry.title}</a></strong>
          </div>
        </div>
      </div>`


      text += inner;
  }
  textarea.innerHTML = text;
});











