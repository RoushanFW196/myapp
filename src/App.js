
import Headings from './Heading';
import List from './List';
function App() {
  return (
    <>
    <div>
    <Headings data="Mobile Operating System"/>,
    <ul>
    <List name="Android" />
    <List name="Blackberry" />
    <List name="iphone" />
    <List name="Windows Phone" />
    </ul>
    </div>,

    <div>
    <Headings data="Mobile Manufacturers"/>,
    <ul>
    <List name="Samsung" />
    <List name="HTC" />
    <List name="Micromax" />
    <List name="Apple" />
    </ul>
  </div>
    

    </>
 
  );
}

export default App;
