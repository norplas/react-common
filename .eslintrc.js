var OFF = 0,
    WARN = 1,
    ERROR = 2;
module.exports = exports = {
    "extends": [
        "airbnb"
    ],
    "rules": {
        "linebreak-style": "off",
        "indent": [WARN, 4],
        "no-param-reassign": "off",
        "no-console": OFF,
        "import/prefer-default-export": OFF,
        "comma-dangle": OFF,
        "react/jsx-indent": OFF,
        "react/jsx-indent-props": OFF,
        "react/jsx-curly-spacing": OFF,
        "react/jsx-filename-extension": OFF,
        "import/extensions": OFF

    },
    "env": {
        "jest": true
    }
}