module.exports = function recursion(tree) {
  let res=[];
  pushnodes(tree, 0, res);
  return res;

  function pushnodes(node,level,res) {
    if (!(res[level])) res[level] = [];
    res[level].push(node.value);
    if((!node.left)&&(!node.right)) return;
    else {
      if(node.left) pushnodes(node.left,level+1,res);
      if(node.right) pushnodes(node.right,level+1,res);
    }
  }
};