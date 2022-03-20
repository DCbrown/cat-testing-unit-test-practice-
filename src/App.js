import Card from "../src/components/Card/Card"

function App() {
  return (
    <div>
      <Card 
        name = "JoJo"
        phone = "111-111-1111"
        email = "Mudada@gmail.com"
        image = {{
          url: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
          alt: "kitty"
        }}
        favoured = {false}
      />
    </div>
  );
}

export default App;
