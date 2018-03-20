/**
 * 单链表有一个Head始终指向头部节点，每个节点数据结构有数据和指向下一个节点的指针，最后一个节点指向null
 */
//定义节点数据结构
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//链表类
class linkedList {
    constructor(val = null) {
        this.head = null;//头指针
        this.length = 0;//链表长度
        if (val) {
            this.head = new Node(val);
            this.length = 1;
        }
    }

    //打印链表
    show() {
        let current = this.head;
        while (current) {
            console.log('-->', current.val);
            current = current.next
        }
    }

    //向尾部添加节点
    append(val) {
        const node = new Node(val);
        if (this.length === 0) {
            this.head = node
        } else {
            let current = this.head;
            //找到最后一个节点
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    //在指定位置插入节点
    insert(val, position) {
        if (position > this.length || position < 0) return false;
        const node = new Node(val);
        //如果插入位置在头结点
        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            //插入位置前的指针指向插入节点，插入节点指针指向插入位置后的节点
            let current = this.head;
            let pre = null;
            let index = 0;
            while (index < position) {
                pre = current;
                current = current.next;
                index++
            }
            node.next = current;
            pre.next = node;
            this.length++
        }
    }


    //返回一个值的节点位置
    indexOf(val) {
        let current = this.head;
        let index = 0;
        while (index < this.length) {
            if (val === current.val) return index;
            current = current.next;
            index++
        }
        return false
    }

    //删除指定位置节点
    removeByIndex(position) {
        if (position >= this.length || position < 0) return null;
        let current = this.head;
        if (position === 0) { // 删除头节点，只需改变 head 指针即可
            this.head = current.next;
        } else {
            let index = 0;
            let prev = null;
            while (index < position) {
                prev = current;
                current = current.next;
                index++
            }
            prev.next = current.next; // 改变上一个节点的 next 指向
        }
        this.length--; // 长度减少
        return current.val; // 返回删除节点的值
    }

    //删除指定值的节点
    removeByValue(val) {
        let index = this.indexOf(val);
        return this.removeByIndex(index);
    }

    //返回链表长度
    size() {
        return this.length
    }
}

let test = new linkedList('test');
test.append('test1');
test.append('test2');
test.append('test3');
test.insert('sth', 2);
test.show();
test.size();
console.log(test.indexOf('test'));