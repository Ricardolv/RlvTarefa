function getTaks() {

  this.itens = [{name: 'item 01', finished: false},
                {name: 'item 02', finished: false},
                {name: 'item 03', finished: false}];

  this.add = function(item) {
      this.itens.push(item);
  };

  this.remove = function(item) {

      var pos = this.itens.indexOf(item);
      this.itens.splice(pos, 1);
  };
}
