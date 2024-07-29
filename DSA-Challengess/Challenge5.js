//QUESTION 1

// Recursive Approach

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

var preorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if (node) {
            result.push(node.val);   // Visit the root
            traverse(node.left);     // Traverse the left subtree
            traverse(node.right);    // Traverse the right subtree
        }
    }
    
    traverse(root);
    return result;
};


let tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

console.log(preorderTraversal(tree)); // Output: [1, 2, 3]


//Iterative Approach

var preorderTraversal = function(root) {
    if (root === null) return [];
    
    const stack = [root];
    const result = [];
    
    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);  // Visit the root
        
        // Push right first so that left is processed first
        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
    }
    
    return result;
};


let tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

console.log(preorderTraversal(tree)); // Output: [1, 2, 3]


//  QUESTION 2  

// Recursive Approach 

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

var postorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if (node) {
            traverse(node.left);      // Traverse the left subtree
            traverse(node.right);     // Traverse the right subtree
            result.push(node.val);    // Visit the root
        }
    }
    
    traverse(root);
    return result;
};


let tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

console.log(postorderTraversal(tree)); // Output: [3, 2, 1]

// Iterative Approach 

var postorderTraversal = function(root) {
    if (root === null) return [];
    
    const stack = [root];
    const result = [];
    
    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);   // Visit the root
        
        // Push left first so that right is processed first
        if (node.left !== null) {
            stack.push(node.left);
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
    }
    
    return result.reverse();  // Reverse the result to get postorder
};


let tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

console.log(postorderTraversal(tree)); // Output: [3, 2, 1]


// QUESTION 3

// Recursive Approach

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

var inorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if (node) {
            traverse(node.left);      // Traverse the left subtree
            result.push(node.val);    // Visit the root
            traverse(node.right);     // Traverse the right subtree
        }
    }
    
    traverse(root);
    return result;
};


let tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

console.log(inorderTraversal(tree)); // Output: [1, 3, 2]


//Iterative approach
var inorderTraversal = function(root) {
    const stack = [];
    const result = [];
    let current = root;
    
    while (current !== null || stack.length > 0) {
        // Reach the leftmost Node of the current Node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        // Current must be null at this point
        current = stack.pop();
        result.push(current.val); // Visit the root
        
        // We have visited the node and its left subtree. Now, it's right subtree's turn
        current = current.right;
    }
    
    return result;
};


let tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

console.log(inorderTraversal(tree)); // Output: [1, 3, 2]
