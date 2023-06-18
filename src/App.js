function App() {
  return (
    <>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </>
  );
}

function AppHeader() {
  return (
    <>
      <div
        className=" row bg-primary text-light fs-1 p-3"
        style={{ cursor: "Pointer" }}
      >
        <div className="col">Project</div>
        <div className="col">Home</div>
        <div className="col">About Us</div>
      </div>
    </>
  );
}

function AppBody() {
  return (
    <>
      <div className="alert alert-success mt-2 fs-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae,
        architecto incidunt iure, aperiam sapiente reiciendis esse praesentium
        dicta autem voluptates deserunt debitis nemo voluptatibus inventore
        recusandae ullam sed, impedit in magnam. Tenetur non, totam amet
        reiciendis nesciunt perferendis harum architecto commodi ad voluptates
        cupiditate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
        quae, architecto incidunt iure, aperiam sapiente reiciendis esse
        praesentium dicta autem voluptates deserunt debitis nemo voluptatibus
        inventore recusandae ullam sed, impedit in magnam. Tenetur non, totam
        amet reiciendis nesciunt perferendis harum architecto commodi ad
        voluptates cupiditate!
      </div>
    </>
  );
}

function AppFooter() {
  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center bg-secondary text-light"
        style={{ height: 250 }}
      >
        Lorem ipsum dolor sit amet consectetur
      </div>
    </>
  );
}

export default App;
