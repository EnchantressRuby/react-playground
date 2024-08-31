import Dog from "./components/Dog"

function App() {
  return (
    // JSX
    <div className="App">

      <Dog name="Misa" img="https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265_1280.jpg" color="brown"
        // isBlueEyed={true}
        isBlueEyed
      // true 
      />

      <Dog name="Teal" img="https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg"
        //color="gray"
        isBlueEyed={true} />

      <Dog name="Opal" img="https://cdn.pixabay.com/photo/2022/11/10/20/12/dog-7583611_1280.jpg" color="black"
      // isBlueEyed={false}
      // false (if w r not sending too)
      />

    </div>
  );
}

export default App;
