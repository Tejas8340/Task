$(document).ready(function () {
  // Sample data (you can replace this with your own data)
  var carouselItems = [
    {
      imageSrc: "image1.jpg",
      imageAlt: "Image 1",
      heading: "Item 1 Heading",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      readMoreLink: "#",
    },
    {
      imageSrc: "image2.jpg",
      imageAlt: "Image 2",
      heading: "Item 2 Heading",
      paragraph:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readMoreLink: "#",
    },
    {
      imageSrc: "image3.jpg",
      imageAlt: "Image 3",
      heading: "Item 3 Heading",
      paragraph:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      readMoreLink: "#",
    },
  ];

  // Initialize carousel with sample data
  initializeCarousel(carouselItems);
});

function initializeCarousel(items) {
  items.forEach(function (item, index) {
    var activeClass = index === 0 ? "active" : "";
    var carouselItem = `
      <div class="carousel-item ${activeClass}">
        <img src="${item.imageSrc}" class="d-block w-100" alt="${item.imageAlt}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${item.heading}</h5>
          <p>${item.paragraph}</p>
          <a href="${item.readMoreLink}" class="btn btn-primary">Read More</a>
        </div>
      </div>
    `;
    $(".carousel-inner").append(carouselItem);
  });
}

function addCarouselItem() {
  // Sample new item (you can replace this with your own data)
  var newItem = {
    imageSrc: "newImage.jpg",
    imageAlt: "New Image",
    heading: "New Item Heading",
    paragraph: "This is a new item added dynamically.",
    readMoreLink: "#",
  };

  // Add the new item to the carousel
  var carouselItem = `
    <div class="carousel-item">
      <img src="${newItem.imageSrc}" class="d-block w-100" alt="${newItem.imageAlt}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${newItem.heading}</h5>
        <p>${newItem.paragraph}</p>
        <a href="${newItem.readMoreLink}" class="btn btn-primary">Read More</a>
      </div>
    </div>
  `;
  $(".carousel-inner").append(carouselItem);

  // Activate the new item
  $("#carouselExample").carousel("next");
}



