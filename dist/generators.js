'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marked = [generator].map(regeneratorRuntime.mark);

function generator() {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 'p';

        case 2:
          console.log('o');
          _context.next = 5;
          return 'n';

        case 5:
          console.log('y');
          _context.next = 8;
          return 'f';

        case 8:
          console.log('o');
          _context.next = 11;
          return 'o';

        case 11:
          console.log('!');

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

exports.default = generator();