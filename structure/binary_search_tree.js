/**
 * 二叉查找树，其实就是二分查找，不过这里定义了树的数据结构，再实现一遍吧
 */
//定义节点数据结构
class BstNode{
    constructor(key){
        this.key=key;
        this.left = null;
        this.right = null;
    }
}
//定义树数据结构
class BST{
    constructor(){
        this.root = null;
    }

    add(key){
        if(this.root===null){
            this.root = new BstNode(key);
        }else{
            this._add(this.root,key)
        }
    }

    _add(node,key){
        if (key < node.key) {
            if (node.left === null) {
                node.left = new BstNode(key);
            } else {
                this._add(node.left, key);
            }
        } else if (key > node.key) {
            if (node.right === null) {
                node.right = new BstNode(key);
            } else {
                this._add(node.right, key);
            }
        }
    }

    find(key){
        return this._find(key,this.root)
    }

    _find(val,node){
        if (node === null) {
            return false;
        } else if (val > node.key) {
            return this._find(val, node.right);
        } else if (val < node.key) {
            return this._find(val, node.left);
        } else {
            return true;
        }
    }
}

let bst = new BST();


console.log(bst)
