import { render,screen } from "@testing-library/react";
import NoteForm from "../NoteForm";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"


describe('<NoteForm />', () => {
    it('should call addNote and update parent state', async () => {
        //arrange
        const createNote = jest.fn();
        const user = userEvent.setup();

        //act
        render(<NoteForm createNote={createNote} />)

        //arrange
        const input = screen.getByRole('textbox')
        const saveButton = screen.getByText("save");

        //act
        await user.type(input,"this is a new note");
        await user.click(saveButton);

        //asert
        expect(createNote.mock.calls).toHaveLength(1);
        expect(createNote.mock.calls[0][0].content).toBe("this is a new note");
    });
    
});
