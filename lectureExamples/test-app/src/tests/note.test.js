import Note from "../Note";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";



describe('<Note />', () => {
    it('should render content ', () => {
        //arrange
        const note =  {
            title: "tsting note",
            content: "testing content is rendered properly",
            important: true,
          }

        //act. render note component
        render(<Note note={note} />)

        //assert
        // const element = screen.getByText("testing content is rendered properly");
        // expect(element).toBeDefined();

        const { container } = render(<Note note={note} />);

        const div = container.querySelector(".note");
        expect(div).toHaveTextContent(
      "testing content is rendered properly"
        );
         screen.debug();
    });

    it('should call callback function when clicking the button', async () => {
        //arrange
        const note =  {
            title: "tsting note",
            content: "testing content is rendered properly",
            important: true,
          }

        const mockToggleFunction = jest.fn()  
        const user= userEvent.setup();
        

        //act
        render(<Note note={note} toggleImportance={mockToggleFunction}/>)
        const button = screen.getByText("make not important")
        await user.click(button)
        // act toggleimportance

        //asert
        expect(mockToggleFunction.mock.calls).toHaveLength(1);

        // const element = screen.getByText("make important");
        // expect(element).toBeDefined();
    });
    
    
});
