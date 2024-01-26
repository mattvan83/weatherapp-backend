function checkBody(body, keys) {
  for (const key of keys) {
    if (!body[key]) {
      return false;
    }
  }
  return true;
}

module.exports = { checkBody };
