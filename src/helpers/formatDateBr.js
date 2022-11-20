formatDate = {
    formatDateBr(data) {
      return new Intl.DateTimeFormat("pt-BR", {
        timeZone: "UTC",
      }).format(data);
    }
}
module.exports = formatDate
