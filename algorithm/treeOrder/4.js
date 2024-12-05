function postorder(root){
    if(!root){
        return
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}
const root ={
    val:'A',
    left:{
        val:'B',
        left:{
            val:'D'
        },
        right:{
            val:'E'
        }
    },
    right:{
        val:'C',
        right:{
            val:'F'
        }
    }
}
postorder(root);