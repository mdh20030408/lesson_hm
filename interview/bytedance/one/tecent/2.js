// 编写二叉树的前序遍历
// function preOrder(root){
//     if(root===null){
//         return;
//     }
//     console.log(root.val);
//     preOrder(root.left);
//     preOrder(root.right);
// }
// 递归变迭代
function preOrderTraversal(root){
    //栈 右节点入栈 左节点后入栈
    // 栈模拟递归
    const stack = [root];
    const res = [];

    if(root===null){
        return res; 
    }
    while(stack.length){
        const node = stack.pop();
        res.push(node.val);
        if(node.right){
            stack.push(node.right);
        }
        if(node.left){
            stack.push(node.left);
        } 
    }
    return res;
}