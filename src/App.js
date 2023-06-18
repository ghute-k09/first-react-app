function App() {
  return (
    <>
      <h1 className="bg-primary p-3 text-light">Project</h1>

      <DataBlock />
      <DataBlock />
      <DataBlock />
    </>
  );
}

function DataBlock() {
  return (
    <>
      <div className="alert alert-warning">
        <h1>topic 1</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore
        porro dolorum sapiente autem ipsum assumenda, doloremque molestiae
        quaerat magni doloribus eaque laboriosam. Tenetur in sit natus et
        possimus cupiditate nam dolorem unde quia! Atque distinctio facere eius
        magnam dolore eaque accusamus, impedit illo adipisci.
      </div>
    </>
  );
}
export default App;
