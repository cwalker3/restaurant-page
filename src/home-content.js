import HomeImageUrl from './images/home-img.jpg';

export function homeContent() {
  const homeImage = createHomeImage();
  const headline = createHeadline();
  const description = createDescription();

  const homeContent = [homeImage, headline, description];

  return homeContent;
}

function createHomeImage() {
  const image = new Image();
  image.src = HomeImageUrl;

  return image;
}

function createHeadline() {
  const headline = document.createElement('h1');
  headline.textContent = 'Edible Food Restaurant';

  return headline;
}

function createDescription() {
  const description = document.createElement('p');
  description.textContent =
    'We take pride in the fact that all of our food is edible. No one has ever died from eating our food. Everything on our menu is non-toxic in small amounts.';

  return description;
}
