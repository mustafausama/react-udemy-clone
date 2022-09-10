if (!localStorage.getItem("courses"))
  localStorage.setItem("courses", JSON.stringify({ courses: [] }));

const data = {};

data.id =
  window.location.pathname.split("/")[
    window.location.pathname.split("/").length - 2
  ];

data.image = document.querySelector(
  '[data-purpose="introduction-asset"] > button > span > img'
).src;

data.title = document.querySelector('[data-purpose="lead-title"]').innerText;

data.shortDescription = document.querySelector(
  'div[data-purpose="lead-headline"]'
).innerText;

data.author = document.querySelector(
  '[data-purpose="instructor-name-top"] > span > a > span'
).innerText;

data.rating = {
  score: parseFloat(
    document.querySelector('[data-purpose="rating-number"]').innerText
  ),
  reviews: parseInt(
    document
      .querySelector('[data-purpose="rating"] > span:last-child')
      .innerText.split(" ")[0]
      .slice(1)
      .replace(/,/g, "")
  )
};

data.price = parseFloat(
  document
    .querySelector(
      '[data-purpose="course-price-text"] > span:last-child > span'
    )
    .innerText.substring(2)
);

data.lastUpdate = document
  .querySelector('[data-purpose="last-update-date"] span')
  .innerText.split(" ")[2];

data.locale = document.querySelector(
  '[data-purpose="lead-course-locale"]'
).innerText;

data.caption = document.querySelector(
  '[data-purpose="caption"] span'
).innerText;

data.includes = {
  video: parseFloat(
    document
      .querySelector('[data-purpose="video-content-length"]')
      .innerText.split(" ")[0]
  ),
  articles: document.querySelector('[data-purpose="num-articles"]')
    ? parseInt(
        document
          .querySelector('[data-purpose="num-articles"]')
          .innerText.split(" ")[0]
      )
    : 0,
  download: parseInt(
    document
      .querySelector('[data-purpose="num-additional-resources"]')
      .innerText.split(" ")[0]
  )
};

data.whatYouWillLearn = [
  ...document.querySelectorAll('[data-purpose="objective"] > div > span')
].map((elem) => elem.innerText);

if (
  document
    .querySelector('[data-purpose="expand-toggle"]')
    .getAttribute("aria-expanded") === "false"
)
  document.querySelector('[data-purpose="expand-toggle"]').click();

data.content = {
  sections: parseInt(
    document
      .querySelector('[data-purpose="curriculum-stats"] > span')
      .innerText.split(" • ")[0]
      .split(" ")[0]
  ),
  lectures: parseInt(
    document
      .querySelector('[data-purpose="curriculum-stats"] > span')
      .innerText.split(" • ")[1]
      .split(" ")[0]
  ),
  total: document
    .querySelector('[data-purpose="curriculum-stats"] > span')
    .innerText.split(" • ")[2]
    .split(" total")[0],
  contentDetails: [
    ...document.querySelectorAll(".section--panel--1tqxC.panel--panel--3uDOH")
  ].map((section) => ({
    title: section.querySelector(".section--section-title--8blTh").innerText,
    lectures: section
      .querySelector('[data-purpose="section-content"]')
      .innerText.split(" • ")[0]
      .split(" ")[0],
    duration: section
      .querySelector('[data-purpose="section-content"]')
      .innerText.split(" • ")[1],
    lecturesDetails: [
      ...section.querySelectorAll(".udlite-block-list-item-content")
    ].map((lecture) => ({
      title: lecture.querySelector(".section--row--3PNBT").innerText,
      preview:
        lecture.querySelectorAll(".section--preview-text--38nT0").length > 0,
      duration: lecture.querySelector(".section--item-content-summary--126oS")
        .innerText
    }))
  }))
};

if (
  document
    .querySelector(
      '[data-purpose="course-description"] > .show-more--container--3W59b > button'
    )
    .getAttribute("aria-label") === "Show more description"
)
  document
    .querySelector(
      '[data-purpose="course-description"] > .show-more--container--3W59b > button'
    )
    .click();

data.requirements = [
  ...document.querySelector('[data-purpose="requirements-title"]').nextSibling
    .childNodes
].map((req) => req.innerText);

data.descriptionHTML = document.querySelector(
  '[data-purpose="safely-set-inner-html:description:description"]'
).innerHTML;

data.whoThisCourseIsFor = [
  ...document.querySelectorAll('[data-purpose="target-audience"] > ul > li')
].map((aud) => aud.innerText);

data.instructors = [
  ...document.querySelectorAll('[data-purpose="instructor-bio"]')
].map((instructor) => ({
  name: instructor.querySelector(".instructor--instructor__title--34ItB")
    .innerText,
  title: instructor.querySelector(".instructor--instructor__job-title--1HUmd")
    .innerText,
  img: instructor.querySelector(".instructor--instructor__image--va-P5").src,
  stats: [...instructor.querySelectorAll('[data-purpose="stat"]')].map(
    (stat) => stat.innerText
  ),
  description: instructor.querySelector('[data-purpose="description-content"]')
    .innerHTML
}));

document
  .querySelector('[data-purpose="show-reviews-modal-trigger-button"]')
  .click();

await waitForElm(".reviews-modal--reviews-modal--3H4Xb");

const reviewsModal = document.querySelector(
  ".reviews-modal--reviews-modal--3H4Xb"
);

reviewsModal.querySelector('[data-purpose="show-more-review-button"]').click();

await new Promise((r) => setTimeout(r, 2000));

data.reviews = [
  ...reviewsModal.querySelectorAll(".reviews-modal--reviews-list--3nlSl li")
]
  .filter(
    (review) =>
      review.querySelector(".review--review-name-and-rating--2_u3C > p") !==
      null
  )
  .map((review) => ({
    user: review.querySelector(".review--review-name-and-rating--2_u3C > p")
      .innerText,
    stars: review
      .querySelector(".star-rating--star-wrapper--1QyBg > span")
      .innerText.split(" ")[1],
    date: review.querySelector(".review--time-since--2ZfqR").innerText,
    content: review.querySelector(".show-more--content--2BLF7").innerText
  }));

data.reviewsPercentage = [
  ...reviewsModal.querySelectorAll('[data-purpose="percent-label"]')
].map((p) => p.innerText.split("%")[0]);

// console.log(
//   JSON.stringify(JSON.parse(localStorage.getItem("courses")).courses.push(data))
// );

const locSto = JSON.parse(localStorage.getItem("courses"));
locSto.courses.push(data);

localStorage.setItem("courses", JSON.stringify(locSto));

async function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}
