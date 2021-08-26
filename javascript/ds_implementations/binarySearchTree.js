// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search tree class

class BinarySearchTree {
  constructor() {
    // root of a binary search tree
    this.root = null;
  }

  add(data) {
    const node = this.root;
    // Check if the parent node is null, then we create a new node as the parent
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      // if the parent node isn't null, then we check where to put the node using a recursive function
      const searchTree = (node) => {
        // Check if the data is less than the current, if yes it goes to the left and if no it goes right.
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            // This is where the recursion happens
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            // This is where the recursion happens
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  remove(node, data) {
    // Check if the node(parent node) is null or not
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      // Check if both left and right node have no child and return null
      if (node.left === null && node.right === null) {
        return null;
      }
      // Check if left node has a child
      if (node.left === null) {
        return node.right;
      }
      // Check if right node has a child
      if (node.right === null) {
        return node.left;
      }
      let tempNode = node.right;
      while (tempNode.left !== null) {
        tempNode = tempNode.left;
      }
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else {
      node.right = removeNode(node.right, data);
      return node;
    }
  }

  search(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
}
