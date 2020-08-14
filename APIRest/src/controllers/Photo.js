class Photo {
  async store(res, req) {
    console.log(req.file);
  }
}
export default new Photo();
