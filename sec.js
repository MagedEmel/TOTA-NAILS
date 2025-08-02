"use strict";
const _0x55bc39 = _0x4d98;
function _0x36ca() {
  const _0x1e1dc6 = [
    "appointments",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "1tiCFen",
    "innerHTML",
    "phone",
    "push",
    "time",
    "appendChild",
    "6710BvtKOT",
    "createElement",
    "name",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "14OCmTEN",
    "database",
    "setHours",
    "value",
    "555562bhIBGP",
    "trim",
    "val",
    "128quIMru",
    "442480yDSYMD",
    "toUpperCase",
    "9gLGJNo",
    "1305XtPqlW",
    "getTime",
    "</td>\x0a\x20\x20\x20\x20\x20\x20",
    "map",
    "291628FweRwo",
    "8284926IabDvV",
    "12048MzeMle",
    "day",
    "15310lTtbYa",
    "includes",
    "#table\x20tbody",
    "ref",
    "timestamp",
    "12598LFHyZX",
    "forEach",
    "66DGdLok",
  ];
  _0x36ca = function () {
    return _0x1e1dc6;
  };
  return _0x36ca();
}
(function (_0x366646, _0x3653c4) {
  const _0x102a8b = _0x4d98,
    _0x49e541 = _0x366646();
  while (!![]) {
    try {
      const _0x43972c =
        (-parseInt(_0x102a8b(0x9b)) / 0x1) * (parseInt(_0x102a8b(0x96)) / 0x2) +
        (parseInt(_0x102a8b(0xaf)) / 0x3) * (parseInt(_0x102a8b(0x8d)) / 0x4) +
        (-parseInt(_0x102a8b(0xad)) / 0x5) * (parseInt(_0x102a8b(0x98)) / 0x6) +
        (-parseInt(_0x102a8b(0xa9)) / 0x7) *
          (-parseInt(_0x102a8b(0xac)) / 0x8) +
        (parseInt(_0x102a8b(0x89)) / 0x9) * (parseInt(_0x102a8b(0x91)) / 0xa) +
        (parseInt(_0x102a8b(0xa1)) / 0xb) * (-parseInt(_0x102a8b(0x8f)) / 0xc) +
        (-parseInt(_0x102a8b(0x8e)) / 0xd) * (-parseInt(_0x102a8b(0xa5)) / 0xe);
      if (_0x43972c === _0x3653c4) break;
      else _0x49e541["push"](_0x49e541["shift"]());
    } catch (_0x49d1f9) {
      _0x49e541["push"](_0x49e541["shift"]());
    }
  }
})(_0x36ca, 0xb87df);
function _0x4d98(_0xd0d2a1, _0x23cf3) {
  const _0x36caa1 = _0x36ca();
  return (
    (_0x4d98 = function (_0x4d9897, _0x7e41a3) {
      _0x4d9897 = _0x4d9897 - 0x89;
      let _0x185f51 = _0x36caa1[_0x4d9897];
      return _0x185f51;
    }),
    _0x4d98(_0xd0d2a1, _0x23cf3)
  );
}
const tableBody = document["querySelector"](_0x55bc39(0x93));
firebase[_0x55bc39(0xa6)]()
  [_0x55bc39(0x94)](_0x55bc39(0x99))
  ["on"](_0x55bc39(0xa8), function (_0x25505c) {
    const _0x2f952c = _0x55bc39,
      _0x117fd9 = _0x25505c[_0x2f952c(0xab)](),
      _0x27bb1b = [];
    for (let _0x35d6a0 in _0x117fd9) {
      const _0x1a87d3 = _0x117fd9[_0x35d6a0],
        [_0x4fc0df, _0x2c9465, _0x13e58a] = _0x1a87d3[_0x2f952c(0x90)]
          ["split"]("-")
          [_0x2f952c(0x8c)](Number),
        [_0x4d2ae6, _0x3f8ee2] = _0x1a87d3[_0x2f952c(0x9f)]
          [_0x2f952c(0xaa)]()
          ["split"]("\x20");
      let _0xedaeb4, _0x47ee64;
      _0x4d2ae6[_0x2f952c(0x92)](":")
        ? ([_0xedaeb4, _0x47ee64] = _0x4d2ae6["split"](":"))
        : ((_0xedaeb4 = _0x4d2ae6), (_0x47ee64 = "00"));
      let _0x1d894b = Number(_0xedaeb4);
      const _0x46aff4 = Number(_0x47ee64);
      if (_0x3f8ee2["toUpperCase"]() === "PM" && _0x1d894b !== 0xc)
        _0x1d894b += 0xc;
      else
        _0x3f8ee2[_0x2f952c(0xae)]() === "AM" &&
          _0x1d894b === 0xc &&
          (_0x1d894b = 0x0);
      const _0x18e787 = new Date(
          _0x4fc0df,
          _0x2c9465 - 0x1,
          _0x13e58a,
          _0x1d894b,
          _0x46aff4
        ),
        _0x5ca780 = new Date();
      _0x5ca780[_0x2f952c(0xa7)](0x0, 0x0, 0x0, 0x0);
      const _0x5a6a40 = new Date(_0x4fc0df, _0x2c9465 - 0x1, _0x13e58a);
      _0x5a6a40[_0x2f952c(0xa7)](0x0, 0x0, 0x0, 0x0);
      if (_0x5a6a40 < _0x5ca780) continue;
      _0x27bb1b[_0x2f952c(0x9e)]({
        name: _0x1a87d3[_0x2f952c(0xa3)],
        phone: _0x1a87d3[_0x2f952c(0x9d)],
        day: _0x1a87d3["day"],
        time: _0x1a87d3["time"],
        timestamp: _0x18e787[_0x2f952c(0x8a)](),
      });
    }
    _0x27bb1b["sort"](
      (_0xebfc1c, _0x5d381d) =>
        _0xebfc1c[_0x2f952c(0x95)] - _0x5d381d["timestamp"]
    ),
      (tableBody[_0x2f952c(0x9c)] = ""),
      _0x27bb1b[_0x2f952c(0x97)]((_0x21cc2e) => {
        const _0x58e71a = _0x2f952c,
          _0x4f26df = document[_0x58e71a(0xa2)]("tr");
        (_0x4f26df["innerHTML"] =
          _0x58e71a(0x9a) +
          _0x21cc2e[_0x58e71a(0x90)] +
          _0x58e71a(0xa4) +
          _0x21cc2e[_0x58e71a(0x9f)] +
          _0x58e71a(0xa4) +
          _0x21cc2e[_0x58e71a(0xa3)] +
          "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>" +
          _0x21cc2e[_0x58e71a(0x9d)] +
          _0x58e71a(0x8b)),
          tableBody[_0x58e71a(0xa0)](_0x4f26df);
      });
  });
