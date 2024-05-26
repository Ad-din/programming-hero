#include <iostream>
using namespace std;
struct Node {
  int data;
  Node* left;
  Node* right;

  Node(int data) : data(data), left(nullptr), right(nullptr) {}
};

class BinarySearchTree {
 private:
  Node* root;

  Node* insert(Node* node, int value) {
    if (node == nullptr) {
      return new Node(value);
    }

    if (value < node->data) {
      node->left = insert(node->left, value);
    } else if (value > node->data) {
      node->right = insert(node->right, value);
    }

    return node;
  }
  void inorderTravesal(Node* node){
    if(node==nullptr){
        return;

    }
    inorderTravesal(node->left);
    cout<<node->data<<" ";
    inorderTravesal(node->right);

  }

 public:
  BinarySearchTree() : root(nullptr) {}

  void insert(int value) {
    root = insert(root, value);
  }
  void inorderTraversal(){
    inorderTraversal();
    cout<<endl;
  }
};

int main() {
  BinarySearchTree bst;

  int values[] = {55, 20, 30, 75, 80, 15, 78, 5, 25, 85, 28};

  for (int value : values) {
    bst.insert(value);
  }
cout<<"Inorder traversal of the BST ";
bst.inorderTraversal();
  // You can add code here to traverse and print the BST (e.g., inorder traversal)

  return 0;
}
