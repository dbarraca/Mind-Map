# Mind-Map

Mind Map is a note taking web application. Boards are a way to get a quick glance at your organized notes on a specific topic. 
- Double click the board to add a note.
- Click on the note title to edit the title.
- Click on the note body to edit with styling options.
- In order to move note overing over a note. Then, drag and drop the icon on the top left of note to move it to another location on the board. 

## Features to Add
- Rename Board  title
- Changing note card accent color
- Resizing note height and width
- Add description field to Board
- Option to open note as a board with notes inside it in a nesting behavior. (Original note's body will be the description of it in board form)
- Tag system
- Arrows and lines to connect notes representing relationship

#### Ideas
- Mini Map in top right allowing to jump to part of board 
- History
- API call to unsplash to quickly add image to body or background images
- Save-able themes

## Dev To-Do list
### Back-End
- [x] Set up Mongo Database
- [ ] Populate DB with Notes
    - [x] Implement posting notes
    - [x] Post notes using postman
    - [x] Updating note titles
    - [x] Updating note bodies
- [ ] Populate DB with first Board or relate a board to notes
- [x] Fetch Board and notes from DB in front end
- [ ] Add Tag system
- [ ] Add Description field

### Front-End
- [ ] Add Redux or context to mangage state
- [ ] Change color identification from bg to accent and border on hover
- [x] Set limit to board height and width
- [ ] Create note color picker feature
- [ ] Create Side panel holding Note list
- [ ] Create feature to open a note as a board
- [ ] Show description of board on board title hover
- [ ] Limit note size and Expand note on hover
- [ ] Add a yellowish ting to background image
- [ ] Add links/arrows between notes
