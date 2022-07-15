import Api from "@/services/Api";

export default {
  addInfo(credentials) {
    return Api().post("User", credentials);
  },
  getInfo() {
    return Api().get("User");
  },
  deleteInfo(id) {
    return Api().delete("User" + "?id=" + id);
  },
  updateInfo(credentials) {
    return Api().patch("User", credentials);
  },
};
