'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//classes

var user = function () {
    function user(username, email, password) {
        _classCallCheck(this, user);

        this.username = username;
        this.email = email;
        this.password = password;
    }

    _createClass(user, [{
        key: 'register',
        value: function register() {
            console.log(this.username);
        }
    }]);

    return user;
}();

var Bob = new user('Tonisal', 'markus.bressel@gmx.de', 'penis');

Bob.register();

var member = function (_user) {
    _inherits(member, _user);

    function member(username, email, password, memberpackage) {
        _classCallCheck(this, member);

        var _this = _possibleConstructorReturn(this, (member.__proto__ || Object.getPrototypeOf(member)).call(this, username, email, password));

        _this.package = memberpackage;

        return _this;
    }

    return member;
}(user);

// Template literals
// Connect lines while templating with backticks (`)
// Insert Variables or calling function with $(variableName) while using backticks

var name = 'Markus';

function returnUse(string) {
    return string;
}

var template = '<h1>hello, ' + name + '</h1>\n    <p>this is a simple ' + returnUse('template') + '</p>';

document.getElementById('template').innerHTML = template;

// New string and number methods
// startsWith()
// endsWith()
// includes()

var theString = 'Hello, my name is Markus and penis';

console.log(theString.startsWith('Hello'));
console.log(theString.endsWith('Hello'));
console.log(theString.includes('Hello'));