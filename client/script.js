const getAndRenderData = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();

  data.forEach((blogObj) => {
    console.log(blogObj.title);
    document.body.innerHTML += `<p>${blogObj.title}</p>`;
  });
};

getAndRenderData();

// fetch('http://localhost:5000/blogs').then((res) => {
//     return res.json()
// }).then((data) => {
//     console.log(data)
// })
