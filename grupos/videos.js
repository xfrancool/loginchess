const videosA = [
  {
    id: 1,
  },
];

function Template(videosA) {
  return `
  <h1 id="textfinal">Videos adicionales</h1>
  <div class="">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/VVHyP9sXCDw"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  
  
  <div class="">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/sFV5n85c0mo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  
  <div class="">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/V716JfKf4YM"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

  <div class="">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/176SqKu2Ikk"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
   
  <div class="">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/zktq2s3B_nU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <!--
  <div class="">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/k0BvxNlHNLg"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <br />
  <br />
  <div class="">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/GMJKxT9HWpE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <br />
  <br />

  <div class="">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/qyBJiGUp8Ek"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div> -->
    `;
}

document.getElementById("adicionales").innerHTML = `
            
            ${videosA.map(Template).join("")}
            
          `;
