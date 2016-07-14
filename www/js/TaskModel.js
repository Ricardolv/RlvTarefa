function getTaks() {

  this.itens = [];

  var list = localStorage.getItem("taskList");

  if (list !== null) {
    this.itens = angular.fromJson(list);
  }

  this.save = function () {
    var list = angular.toJson(this.itens);
    localStorage.setItem("taskList", list);
  }

  this.add = function(item) {
      this.itens.push(item);
  };

  this.remove = function(item) {

      var pos = this.itens.indexOf(item);
      this.itens.splice(pos, 1);
  };
}
