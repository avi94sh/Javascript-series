
        //craete a new element
        const div = document.createElement('div');
        console.log(div);

        //add class to the div
        div.className = "main";
        // add id to elemnt div
        div.id = Math.round(Math.random() * 10 + 1)

        div.setAttribute('title', 'this is div');
        div.style.backgroundColor = "green";
        div.style.color = "white";
        div.style.padding = "10px";
        div.style.margin = "10px";
        //div.innerText = "this is my first div"; -->
      const addText = document.createTextNode("this is my first div");
        div.appendChild(addText);
        //append the div to the body
        document.body.appendChild(div);

      // now we craete child element of div
      const h1 = document.createElement('h1');
      console.log(h1);

      // set atrribute to h1
      h1.setAttribute('class', 'heading');
      h1.style.color = "pink";
      h1.style.fontSize = "30px";
      //now add class name and id to h1
      h1.id = "h1title";
      div.style.padding = "10px";
      div.style.margin = "10px";
     
      const h1text = document.createTextNode("this is heading");
      h1.appendChild(h1text);

      // now append h1 to div
      div.appendChild(h1);

    //let find parent elemnt of h1
   // console.log(h1.parentElement);  // it will return div

   const h1hh = document.querySelector('#h1title');
    console.log(h1hh.parentElement);  // it will return div