var routers = [
  {name:'Vivint_Cust1', serial:'RNV5019091', mac:'00019F153A05', id:'1267747'},
  {name:'Vivint_Cust2', serial:'RNV5019092', mac:'00019F153A09', id:'1267748'},
  {name:'Vivint_Cust3', serial:'RNV5019093', mac:'00019F153A0D', id:'1267749'},
  {name:'Vivint_Cust4', serial:'RNV5019094', mac:'00019F153A11', id:'1267750'},
  {name:'Vivint_Cust5', serial:'RNV5019095', mac:'00019F153A15', id:'1267751'},
  {name:'Vivint_Cust6', serial:'RNV5018975', mac:'00019F153835', id:'1267753'},
  {name:'Vivint_Cust7', serial:'RNV5019086', mac:'00019F1539F1', id:'1267754'},
  {name:'Vivint_Cust8', serial:'RNV5019087', mac:'00019F1539F5', id:'1267755'},
  {name:'Vivint_Cust9', serial:'RNV5019088', mac:'00019F1539F9', id:'1267756'},
  {name:'Vivint_Cust10', serial:'RNV5019090', mac:'00019F153A01', id:'1267757'},
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
