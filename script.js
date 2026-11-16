const inquiry = document.querySelector('#inquiry');
const emailLink = document.querySelector('#contact-email');
const fields = [
  ['name', 'Name'],
  ['company', 'Company'],
  ['email', 'Business email'],
  ['location', 'Job location'],
  ['project', 'Project type'],
  ['deadline', 'Bid deadline and time zone'],
  ['scope', 'How we can help'],
];

inquiry.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(inquiry);
  const details = fields.flatMap(([field, label]) => {
    const value = data.get(field).trim();
    return value ? [label + ': ' + value] : [];
  });
  const body = [
    'Hello, I would like to request an electrical estimating consultation.',
    '',
    ...details,
  ].join('\r\n');
  window.location.href = emailLink.href + '&body=' + encodeURIComponent(body);
});

inquiry.hidden = false;
