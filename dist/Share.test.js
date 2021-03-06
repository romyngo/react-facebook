"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _FacebookProvider = _interopRequireDefault(require("./FacebookProvider"));

var _Share = _interopRequireDefault(require("./Share"));

describe('Provider', () => {
  it('should be able to create simple instance of provider', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_FacebookProvider.default, {
      appId: "123456789"
    }, _react.default.createElement("span", null, "Test")));
    expect(wrapper.html()).toBe('<span>Test</span>');
  });
  it('should be able to create simple instance', done => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_FacebookProvider.default, {
      appId: "123456789"
    }, _react.default.createElement(_Share.default, null, ({
      handleClick
    }) => _react.default.createElement("button", {
      type: "button",
      onClick: done
    }, "Test"))));
    expect(wrapper.html()).toBe('<button type="button">Test</button>');
    done();
  });
});
//# sourceMappingURL=Share.test.js.map