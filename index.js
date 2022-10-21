(function () {
  let state = {
    items: [],
  };
  const app = document.getElementById("app");
  function setState(newState) {
    state = newState;
    render(state);
  }

    function render(state) {
      app.innerHTML = ''
      for (let elem of state.items) {
        app.innerHTML += `<div>
        <input type='checkbox' class='checkbox'>
        <h2 class='txt'>${elem.title}</h2>
        <button class='butt1' id='butt'>delete</button>
        </div>`;
        }
      app.innerHTML += `<p>${state.items.length}</p>`;
    }
  

  

  function addItem(item) {
    const next = { title: item.title, completed: true };
    state.items.push(next);
    setState(state);
  }

  function deleteItem(num) {
    state.items.splice(num, 1);
    setState(state);
  }

  function toggleCompleted(num) {
    state.items[num].completed = !state.items[num].completed;
    setState(state);
  }

  addItem({ title: "foo1" });
  addItem({ title: "foo2" });
  
  console.log(state);
})();
