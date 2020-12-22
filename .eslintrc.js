module.exports = {
  /**
   * 默认情况下，ESLint会在所有父级目录里寻找配置文件，一直到根目录。
   * 为了将ESLint限制在一个特定的项目，设置root: true；
   * ESLint一旦发现配置文件中有 root: true，就会停止在父级目录中寻找。
   */
  root: true,
  // 指定解析器
  // babel-ESLint: 一个对Babel解析器的包装，使其能够与ESLint兼容。
  // parser: 'babel-eslint',
  // 设置解析器能帮助ESLint确定什么是解析错误。
  parserOptions: {
    parser: 'babel-eslint',
    // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    // sourceType: 'module',
    // 指定js版本ES6。语法上的支持
    ecmaVersion: 6,
  },
  // 脚本在执行期间访问的额外的全局变量
  // env: 指定脚本的运行环境
  env: {
    // 开启浏览器全局变量。
    browser: true,
    // 会自动开启es6语法支持。
    es6: true,
    // 开启Node.js 全局变量和 Node.js 作用域
    node: true,
  },
  // plugin:(此处不能有空格)包名/配置名称。解析时plugin是解析成 eslint-plugin-vue。如果有空格会解析失败，eslint-plugin- vue。
  // plugin可以省略包名的前缀 eslint-plugin-
  plugins: [
    // 此插件用来识别.html 和 .vue文件中的js代码
    'html',
    'vue',
  ],
  extends: ['plugin:vue/essential', '@vue/airbnb'],

  rules: {
    /**
     * 【==================================== Possible Errors ====================================】
     * 这些规则与JavaScript代码中可能的错误或逻辑错误有关
     */
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    /**
     * 【==================================== Best Practices =====================================】
     * 这些规则是关于最佳实践的，帮助你避免一些问题
     */
    // 'no-param-reassign': 'off', // 禁止对 function 的参数进行重新赋值

    /**
     * 【====================================== Strict Mode ======================================】
     * 该规则与使用严格模式和严格模式指令有关
     */

    /**
     * 【======================================= Variables ======================================】
     * 这这些规则与变量声明有关
     */

    /**
     * 【================================== Node.js and CommonJS =================================】
     * 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的
     */

    /**
     * 【==================================== Stylistic Issues ===================================】
     * 这些规则是关于风格指南的，而且是非常主观的
     */
  },
};
