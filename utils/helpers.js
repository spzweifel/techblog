module.exports = {
    format_date: (date) => {
      return date.toLocaleDateString();
    },
    format_username: (username) => {
      return parse(username).toLocaleString();
    },
    format_title: (title) => {
      return parse(title).toLocaleString();
    }
}