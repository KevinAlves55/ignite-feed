import "./styles/Global.css";
import Style from "./App.module.css";

import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <>
      <Header />

      <div className={Style.wrapper}>
        <Sidebar />

        <main>
          <Post author="Kevin Alves" content="fsdlkfdshfshkfjghkjdfdhjkfdhsfjkdhfdsjfdshfjfhdj" />
          <Post author="Kevin Alves" content="fsdlkfdshfshkfjghkjdfdhjkfdhsfjkdhfdsjfdshfjfhdj" />
          <Post author="Kevin Alves" content="fsdlkfdshfshkfjghkjdfdhjkfdhsfjkdhfdsjfdshfjfhdj" />
          <Post author="Kevin Alves" content="fsdlkfdshfshkfjghkjdfdhjkfdhsfjkdhfdsjfdshfjfhdj" />
          <Post author="Kevin Alves" content="fsdlkfdshfshkfjghkjdfdhjkfdhsfjkdhfdsjfdshfjfhdj" />
        </main>
      </div>
    </>
  );
};