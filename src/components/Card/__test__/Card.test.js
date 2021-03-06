import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event"
import Card from "../Card"

const cardProps = {
  name: "JoJo",
  phone: "111-111-1111",
  email: "Mudada@gmail.com",
  image: {
    url: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    alt: "kitty",
  },
  favoured: false,
};

describe("Card", () => {
  test("should show the name", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/jojo/i)).toBeInTheDocument();
  });
  test("should show the phone number", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument();
  });
  test("should show the email", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/mudada@gmail.com/i)).toBeInTheDocument();
  });
  test("should show the image", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByAltText(/kitty/i).src).toBe(cardProps.image.url);
  });

  test("should show outline heart", ()=> {
    render(<Card {...cardProps} />);
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  })

  test("should show fliied heart", ()=> {
    render(<Card {...cardProps} favoured={true}/>);

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  })

  test("should toggle heart status", ()=> {
    render(<Card {...cardProps}/>) 

    userEvents.click(screen.getByRole("button"));
    
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

    userEvents.click(screen.getByRole("button"));

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  })
});
