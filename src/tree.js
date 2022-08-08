const createTree = value => {
    return {
        data: value,
        children: null,
        parent: null // 没有父节点
    }
}
const addChild = (node, value) => {
    const newNode = {
        data: value,
        children: null,
        parent: node // 往一个节点添加子节点的时候 让子节点记住父节点是谁 
    }
    // 如果 tree.child 为空 返回(保底) 自己
    node.children = node.children || []
    node.children.push(newNode)
    return newNode
}
// 遍历 tree 所有节点
const travel = (tree, fn) => {
    // 调用函数 fn() 执行 log 操作
    fn(tree)
    // 如果 tree.children 为空 什么也不做
    if (!tree.children) { return }
    // 开始遍历 tree
    for (let i = 0; i < tree.children.length; i++) {
        // 遍历树的孩子们
        // travel 需要传入一个节点 和一个函数
        travel(tree.children[i], fn)
    }
}
const removeNode = (tree, node) => {
    //找到所有子节点
    const siblings = node.parent.children
    let index = 0
    // 循环子节点
    for (let i = 0; i < siblings.length; i++) {
        // 第几个是要删除的节点 (找到要删除的节点排行第几)
        if (siblings[i] === node)
            // 排行第几
            index = i
    }
    // 最后 splice 以下
    siblings.splice(index, 1)
}
const tree = createTree(10)
const node2 = addChild(tree, 20)
addChild(tree, 30)
const node4 = addChild(tree, 40)
addChild(tree, 50)

addChild(node2, 201)
addChild(node2, 202)
addChild(node2, 203)
console.log(tree)

//travel(tree, (node) => console.log(node.data))
removeNode(tree, node4)
console.log(tree)