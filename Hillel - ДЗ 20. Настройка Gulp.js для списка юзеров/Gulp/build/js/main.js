"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var api = function () {
  var API_URL = 'https://reqres.in/api';

  var API = /*#__PURE__*/function () {
    function API() {
      _classCallCheck(this, API);
    }

    _createClass(API, [{
      key: "login",
      value: function login(email, password) {
        return fetch("".concat(API_URL, "/login"), {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        }).then(function (response) {
          return response.json();
        });
      }
    }, {
      key: "getUsers",
      value: function getUsers() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        return fetch("".concat(API_URL, "/users?page=").concat(page)).then(function (response) {
          return response.json();
        });
      }
    }]);

    return API;
  }();

  return new API();
}();

var _render = function render(template, bind) {
  var result = template;
  Object.keys(bind).forEach(function (e) {
    result = result.replaceAll("{{".concat(e, "}}"), bind[e]);
  });
  return result;
};

var LoginComponent = /*#__PURE__*/function () {
  function LoginComponent(template, containerEl) {
    _classCallCheck(this, LoginComponent);

    this._template = template;
    this._containerEl = containerEl;

    this.onSuccess = function () {};

    this.render();
  }

  _createClass(LoginComponent, [{
    key: "onSubmit",
    value: function onSubmit() {
      var _this = this;

      var email = this._containerEl.querySelector('#email_input').value;

      var password = this._containerEl.querySelector('#password_input').value;

      api.login(email, password).then(function (e) {
        _this.onSuccess && _this.onSuccess(e.token);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this._containerEl) return;
      this._containerEl.innerHTML = _render(this._template, {});

      this._containerEl.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn-submit')) _this2.onSubmit(e);
      });
    }
  }]);

  return LoginComponent;
}();

var UserComponent = /*#__PURE__*/function () {
  function UserComponent(template, cardTemplate, containerEl) {
    _classCallCheck(this, UserComponent);

    this._template = template;
    this._userCardTemplate = cardTemplate;
    this._containerEl = containerEl;
    this.list = [];

    this.onSuccess = function () {};

    this.loadUsersList();
  }

  _createClass(UserComponent, [{
    key: "loadUsersList",
    value: function loadUsersList() {
      var _this3 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      api.getUsers(page).then(function (_ref) {
        var data = _ref.data;
        _this3.list = data;

        _this3.render();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (!this._containerEl) return;
      this._containerEl.innerHTML = _render(this._template, {});

      var listEl = this._containerEl.querySelector('#user-list');

      listEl.innerHTML = this.list.map(function (e) {
        return _objectSpread(_objectSpread({}, e), {}, {
          name: "".concat(e.first_name, " ").concat(e.last_name)
        });
      }).map(function (e) {
        return _render(_this4._userCardTemplate, e);
      }).join('\n');
    }
  }]);

  return UserComponent;
}();

var mainContainer = document.getElementById('main');
var login = new LoginComponent(document.getElementById('loginTemplate').innerText, mainContainer);
login.onSuccess = onSuccessLogin;

function onSuccessLogin() {
  var userList = new UserComponent(document.getElementById('userListTemplate').innerText, document.getElementById('userCardTemplate').innerText, mainContainer);
}