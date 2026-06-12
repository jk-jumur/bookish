import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../Components/listedBooks/ListedReadList";
import ListedWishList from "../../Components/listedBooks/ListedWishList";


const Books = () => {
    const { storedBooks, wishList} = useContext(BookContext)
         console.log( storedBooks,wishList,"bookContext");
    return (
        <div className="max-w-6xl mx-auto ">


            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ListedReadList/>
    </TabPanel>
    <TabPanel>
      <ListedWishList/>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;