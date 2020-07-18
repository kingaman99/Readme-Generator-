function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.desc}
# ${data.favebaksetballplayer}
`;
}

module.exports = generateMarkdown;
