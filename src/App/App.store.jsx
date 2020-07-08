import { store } from "@risingstack/react-easy-state";

export const DATA_App = store({
  string: "",
  bool: true,
});

export const Store_App = store({
  DATAT: [],

  /** active HMR (hot module reloader) */
  HMR() {
    if (nw) {
      var path = "./";
      var fs = window.require("fs");

      var reloadWatcher = fs.watch(path, function () {
        location.reload();
        reloadWatcher.close();
      });
    }
  },
});
