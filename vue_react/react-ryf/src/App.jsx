// 组件就是函数
// 组件首字母大写 复用
// 组件的返回值是JSX
function App() {
  // jsx
  // js函数区域 里编写html
  let myTitle =<h1>Hello World</h1>;
  return (
    // <div>
    // {myTitle}
    // </div>
    // JSX 最外层, 只能有且必须有一个节点
    // encolsed tag -> 原理? api fragment节点
    <>
    <p>hello</p><p>world</p>
    </>
  )
}

export default App
