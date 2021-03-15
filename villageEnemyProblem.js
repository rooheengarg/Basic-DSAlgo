// Binary tree > 3 type nodes > villager/protector/enemy > number of safe nodes (return)

// v        {s: 1, u:0}=>{s: 4, u:3}
// / \
// p  p        {s:2, u:1} , {s: 1, u:2}

// /\    /\
// e p   e e
// {s:0, u:1} {s:1, u:0}   {s: 0, u:1} {s:0, u:1}

// {} // 0 safe nodes
// {root} root === e ? { root : unsafe } : {root : safe }

// v.    v       f(root) = f(checkSafety(root) +  checkSafety(left_children) +  checksafety(right_children))

// check root is safe or unsafe

var map = { s: 0, u: 0 };
function checkSafety(root) {
  if (!root) return map;

  const l_map = checkSafety(root.left);
  const r_map = checkSafety(root.right);

  let safe = l_map[s] + r_map[s] + (root.type === ENEMY ? 0 : 1);
  let unsafe = l_map[u] + r_map[u] + (root.type === ENEMY ? 1 : 0);

  return { s: safe, u: unsafe };
}
