const test = (data, user) => {
  const a = data.users.getAllInformation(user.username);
  return a[0];
};

module.exports = {
  test,
};
