 const parent = document.querySelector('.parent');

        // console.log(parent);
        // console.log(parent.children[0].innerHTML);

        // Loop through all children
        // for (let i = 0; i < parent.children.length; i++) {
        //     console.log(parent.children[i].innerHTML);
        // }

        parent.children[1].style.color = "red";   // Second child (Tuesday) turns red
        console.log(parent.firstElementChild);    // Logs the first child (Monday)
        console.log(parent.lastElementChild); 
      

        const dayone =  document.querySelector('.day');
       console.log(dayone);
        console.log(dayone.parentElement);
       console.log(dayone.nextElementSibling);

        //console.log("Node:", parent.childNodes); // Includes text nodes (like spaces/newlines)