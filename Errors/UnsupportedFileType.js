class UnsupportedFileType extends Error {
  constructor(message) {
    super(message);
    this.name = "UnsupportedFileType";
  }
}

module.exports = UnsupportedFileType;
