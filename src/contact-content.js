export function contactContent() {
  const contactMessage = document.createElement('p');
  const phoneNumber = document.createElement('span');
  const email = document.createElement('span');

  contactMessage.textContent =
    'Please don\'t contact us if you are experiencing any pain or discomfort after eating our "food"';
  phoneNumber.textContent = '111-111-1111';
  email.textContent = 'fake.email@ediblefood.com';

  return [contactMessage, phoneNumber, email];
}
