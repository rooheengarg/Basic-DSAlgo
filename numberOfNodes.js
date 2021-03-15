            1
            /\
           2   3
           /\
          5  6

// {} return 0
//{1} return root.value%2 == 0 ? 1 : 0;

// {1,2,3} 

f(root) = root.value%2 == 0 ? 1 : 0 + numberOfnodes(root.left) + numberOfnodes(root.right);



// Count leaf node

            1
            /\
           2   3
           /\
          5  6

// {} return 0;
// {1} return 1;
// {1,2,3}

f(root) = countLeafNodes(root.left) + countLeafNodes(root.right)


// level wise print 
            1(0)
            /\
        2(1)  3(1)                       
           /\
        5(2) 6(2) 

        hashing: {
            0: '1',
            1: '23',
            2: '56'
        }
       //BFS 1(/N) 2 3 (/N) 5 6  
       //REQ. 
       //1
       //23
       //56
// {}
//{1} log 1
// {1,2,3} log 1 
 //23 
 //56

                1(0)
                /\
            2(1)  3(1)                       
             /\
        5(2) 6(2) 

        //BFS 1(/N) 2 3 (/N) 5 6  
           q: 1
           q : 2
           q: 2

    // LOGIC
q.enqueue(root);
while(q.size() > 0) {
    n = q.size();
    console.log('\n')
    while(n--) {
       var d_el = q.dequeue();
       console.log(d_el);
        q.enqueue(d_el.left);
        q.enqueue(d_el.right);
    }

}

// ONE FISH RUINS THE SEA

            

