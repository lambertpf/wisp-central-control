var routers = [
  {name:'RN_Demo1', serial:'RNV5001752', mac:'00019F141B19', id:'1267758'},
  {name:'RN_Demo2', serial:'RNV5000511', mac:'00019F1407DD', id:'2'},
];

Template.managedRouter.helpers({
  routers: function () {
    return routers;
  }
});

ManagedRouter = {
  last_clicked: 0,
  toggle_overlay: function(id) {
    this.last_clicked = id;
    el = document.getElementById("overlay_" + id);
    el.style.display = (el.style.display == "block") ? "none" : "block";
    el = document.getElementById("overlay_fade");
    el.style.display = (el.style.display == "block") ? "none" : "block";
  },
  toggle_last: function() {
    this.toggle_overlay(this.last_clicked);
  }
}
