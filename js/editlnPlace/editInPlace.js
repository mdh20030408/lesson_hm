/**
 *  @func  就地编辑
 *  @params { id, parent 父节点,value 默认值}
 *  @author mdh
 *  @date 2024/11/28
 */ 
function EditInPlace(id,parent,value){
    this.id = id; // 跨函数共享属性
    this.parent = parent || document.body;
    this.value = value ||  '这个家伙很懒，什么都没有留下';
    this.createElement(this.id);
}
    EditInPlace.prototype.createElement = function(id){
        // console.log(id);
        // <div id="ep1"></div>
         // 创建一个 div 元素作为容器 
  this.containerElement = document.createElement('div');
  // 设置容器元素的 id
  this.containerElement.id = this.id;
  // 将容器元素添加到父元素中
  this.parent.appendChild(this.containerElement);
  // 创建一个 span 元素用于显示静态文本
  this.staticElement = document.createElement('span');
  // 设置 span 元素的文本内容 
  this.staticElement.innerText = this.value;
  // 将 span 元素添加到容器元素中
  this.containerElement.appendChild(this.staticElement)
    }